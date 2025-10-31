// TypeScript interfaces for cart operations
export interface CartItem {
  id: string;
  licenseId: string;
  title: string;
  artist: string;
  price: number;
  type: 'beat' | 'sample';
  duration?: number;
  bpm?: number;
  key?: string;
  genre?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CartResponse {
  success: boolean;
  message?: string;
  data: {
    items: CartItem[];
    totalItems: number;
    totalPrice: number;
    discount?: {
      code?: string;
      amount?: number;
      percentage?: number;
    };
  };
  error?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

// Base API configuration
const API_BASE_URL = 'https://echora.ir/api';

/**
 * Adds a license to the user's cart
 * @param licenseId - The ID of the license to add to cart
 * @param token - User authentication token
 * @returns Promise<ApiResponse> - API response with cart data
 */
export async function addToCart(licenseId: string, token: string): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/licenses/addtocart/${licenseId}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw new Error(`Failed to add item to cart: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Retrieves the user's cart contents
 * @param token - User authentication token
 * @returns Promise<CartResponse> - Cart data with items and totals
 */
export async function getCart(token: string): Promise<CartResponse> {
  try {
    console.log('Fetching cart from:', `${API_BASE_URL}/carts`);
    const response = await fetch(`${API_BASE_URL}/carts`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Cart API response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Cart API error response:', errorText);
      
      // Handle specific error cases
      if (response.status === 401) {
        throw new Error('Authentication failed. Please login again.');
      } else if (response.status === 404) {
        // Cart not found, return empty cart
        return {
          success: true,
          data: {
            items: [],
            totalItems: 0,
            totalPrice: 0
          }
        };
      } else if (response.status >= 500) {
        throw new Error('Server error. Please try again later.');
      } else {
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }
    }

    const data = await response.json();
    console.log('Cart API response data:', data);
    
    // Ensure the response has the expected structure
    if (typeof data === 'object' && data !== null) {
      return data;
    } else {
      throw new Error('Invalid response format from server');
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
    
    // If it's a network error, provide a more user-friendly message
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Network error. Please check your internet connection.');
    }
    
    throw new Error(`Failed to fetch cart: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Removes a license from the user's cart
 * @param licenseId - The ID of the license to remove from cart
 * @param token - User authentication token
 * @returns Promise<ApiResponse> - API response confirming removal
 */
export async function removeFromCart(licenseId: string, token: string): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/carts/${licenseId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error removing item from cart:', error);
    throw new Error(`Failed to remove item from cart: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
