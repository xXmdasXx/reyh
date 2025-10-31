import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { addToCart as addToCartAPI, getCart as getCartAPI, removeFromCart as removeFromCartAPI } from '@/services/cart'

export type CartItem = {
    id: string;
    licenseId: string;
    title: string;
    artist: string;
    license: string;
    format: string;
    type: 'beat' | 'sample' | 'album';
    price: number;
    image: string;
    duration?: number;
    bpm?: number;
    key?: string;
    genre?: string;
    createdAt: string;
    updatedAt: string;
}

export type cartState = {
    cartItems: CartItem[];
    discountCode: string;
    discountPercentage: number;
    loading: boolean;
    error: string | null;
    // Local cart methods
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    getTotal: () => number;
    getDiscount: () => number;
    getFinalTotal: () => number;
    getCartCount: () => number;
    clearCart: () => void;
    isItemInCart: (id: string) => boolean;
    applyDiscountCode: (code: string) => void;
    removeDiscount: () => void;
    // API sync methods
    addToCart: (licenseId: string) => Promise<boolean>;
    removeFromCart: (licenseId: string) => Promise<boolean>;
    syncCartFromServer: () => Promise<boolean>;
    clearError: () => void;
}

export const useCartStore = create<cartState>()(
    persist(
        (set, get) => ({
            cartItems: [],
            discountCode: '',
            discountPercentage: 0,
            loading: false,
            error: null,
            
            addItem: (item) => set((state) => {
                const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);
                if (existingItem) {
                    // Prevent duplicates - item already exists in cart
                    return state;
                }
                return { cartItems: [...state.cartItems, item] };
            }),
            
            removeItem: (id) => set((state) => ({
                cartItems: state.cartItems.filter(item => item.id !== id)
            })),
            
            getTotal: () => {
                const state = get();
                return state.cartItems.reduce((total, item) => total + item.price, 0);
            },
            
            getDiscount: () => {
                const state = get();
                const total = state.cartItems.reduce((total, item) => total + item.price, 0);
                return (total * state.discountPercentage) / 100;
            },
            
            getFinalTotal: () => {
                const state = get();
                const total = state.cartItems.reduce((total, item) => total + item.price, 0);
                const discount = (total * state.discountPercentage) / 100;
                return total - discount;
            },
            
            getCartCount: () => {
                const state = get();
                return state.cartItems.length;
            },
            
            clearCart: () => set({ cartItems: [], discountCode: '', discountPercentage: 0 }),
            
            isItemInCart: (id) => {
                const state = get();
                return state.cartItems.some(item => item.id === id);
            },
            
            applyDiscountCode: (code) => {
                // Define your discount codes here
                const discountCodes: Record<string, number> = {
                    'WELCOME10': 10,
                    'SAVE20': 20,
                    'MUSIC15': 15,
                    'ECHORA25': 25,
                };
                
                const discountPercentage = discountCodes[code.toUpperCase()] || 0;
                
                set({
                    discountCode: code,
                    discountPercentage: discountPercentage
                });
                
                return discountPercentage > 0;
            },
            
            removeDiscount: () => set({
                discountCode: '',
                discountPercentage: 0
            }),

            // API sync methods
            addToCart: async (licenseId: string) => {
                const token = localStorage.getItem('token');
                if (!token) {
                    set({ error: 'Authentication required' });
                    return false;
                }

                set({ loading: true, error: null });
                
                try {
                    const response = await addToCartAPI(licenseId, token);
                    if (response.success) {
                        // Optionally sync cart from server after adding
                        await get().syncCartFromServer();
                        return true;
                    } else {
                        set({ error: response.message || 'Failed to add item to cart' });
                        return false;
                    }
                } catch (error) {
                    const errorMessage = error instanceof Error ? error.message : 'Failed to add item to cart';
                    set({ error: errorMessage });
                    return false;
                } finally {
                    set({ loading: false });
                }
            },

            removeFromCart: async (licenseId: string) => {
                const token = localStorage.getItem('token');
                if (!token) {
                    set({ error: 'Authentication required' });
                    return false;
                }

                set({ loading: true, error: null });
                
                try {
                    const response = await removeFromCartAPI(licenseId, token);
                    if (response.success) {
                        // Remove from local state immediately for better UX
                        get().removeItem(licenseId);
                        return true;
                    } else {
                        set({ error: response.message || 'Failed to remove item from cart' });
                        return false;
                    }
                } catch (error) {
                    const errorMessage = error instanceof Error ? error.message : 'Failed to remove item from cart';
                    set({ error: errorMessage });
                    return false;
                } finally {
                    set({ loading: false });
                }
            },

            syncCartFromServer: async () => {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.warn('No authentication token found for cart sync');
                    set({ error: 'Authentication required' });
                    return false;
                }

                console.log('Starting cart sync from server...');
                set({ loading: true, error: null });
                
                try {
                    const response = await getCartAPI(token);
                    console.log('Cart API response:', response);
                    
                    // Check if response is valid
                    if (!response) {
                        throw new Error('No response received from server');
                    }

                    // Handle different response structures
                    let cartData: any;
                    if (response.success && response.data) {
                        cartData = response.data;
                    } else if ((response as any).items) {
                        // Direct items array response
                        cartData = { items: (response as any).items };
                    } else if (Array.isArray(response)) {
                        // Response is directly an array of items
                        cartData = { items: response };
                    } else {
                        throw new Error('Invalid response structure from server');
                    }

                    // Ensure items array exists
                    if (!cartData.items || !Array.isArray(cartData.items)) {
                        console.log('No items in cart or items is not an array:', cartData);
                        set({ 
                            cartItems: [],
                            discountCode: cartData.discount?.code || '',
                            discountPercentage: cartData.discount?.percentage || 0
                        });
                        console.log('Cart synced successfully (empty cart)');
                        return true;
                    }

                    // Transform server cart items to match local CartItem format
                    const serverCartItems: CartItem[] = cartData.items.map((item: any) => ({
                        id: item.id || item.licenseId || Math.random().toString(),
                        licenseId: item.licenseId || item.id || Math.random().toString(),
                        title: item.title || item.name || 'Untitled',
                        artist: item.artist || item.artistName || 'Unknown Artist',
                        license: item.license || item.licenseType || 'Standard',
                        format: item.format || item.fileFormat || 'MP3',
                        type: item.type || 'beat',
                        price: Number(item.price) || 0,
                        image: item.image || item.coverImage || '/default-image.png',
                        duration: item.duration,
                        bpm: item.bpm,
                        key: item.key,
                        genre: item.genre,
                        createdAt: item.createdAt || new Date().toISOString(),
                        updatedAt: item.updatedAt || new Date().toISOString()
                    }));

                    console.log('Transformed cart items:', serverCartItems);
                    set({ 
                        cartItems: serverCartItems,
                        discountCode: cartData.discount?.code || '',
                        discountPercentage: cartData.discount?.percentage || 0
                    });
                    console.log('Cart synced successfully');
                    return true;
                } catch (error) {
                    const errorMessage = error instanceof Error ? error.message : 'Failed to sync cart from server';
                    console.error('Cart sync error:', error);
                    
                    // If it's an authentication error, clear the token
                    if (errorMessage.includes('Authentication failed') || errorMessage.includes('401')) {
                        localStorage.removeItem('token');
                        set({ error: 'Session expired. Please login again.' });
                    } else {
                        set({ error: errorMessage });
                    }
                    return false;
                } finally {
                    set({ loading: false });
                }
            },

            clearError: () => set({ error: null })
        }),
        {
            name: 'cart-storage',
            // Persist cartItems and discount info
            partialize: (state) => ({ 
                cartItems: state.cartItems,
                discountCode: state.discountCode,
                discountPercentage: state.discountPercentage
            })
        }
    )
);

