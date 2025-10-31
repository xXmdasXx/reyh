import { api } from "@/lib/Axios";

export type UserPurchase = {
  id: number | string;
  title?: string;
  artist?: string;
  image?: string;
};

export type UserSubscription = {
  id: number | string;
  title?: string;
  price?: string;
  date?: string;
  iconType?: 'star' | 'diamond';
  ispremium?: boolean;
  status?: string;
};

export type PurchasesApiResponse = any; // Unknown shape; parsed defensively

export async function fetchUserPurchases(signal?: AbortSignal): Promise<UserPurchase[]> {
  try {
    const response = await api.get("/users/purchases", { signal });
    const data = response.data as PurchasesApiResponse;
    if (Array.isArray(data)) return data as UserPurchase[];
    if (data && Array.isArray((data as any).purchases)) return (data as any).purchases as UserPurchase[];
    return [];
  } catch (err: any) {
    const isAbortDom = err instanceof DOMException && err.name === 'AbortError'
    const isAxiosCanceled = err?.name === 'CanceledError' || err?.code === 'ERR_CANCELED' || err?.message === 'canceled'
    if (isAbortDom || isAxiosCanceled) return []
    throw err
  }
}

export async function fetchUserPurchasesData(signal?: AbortSignal): Promise<{ purchases: UserPurchase[]; subscriptions: UserSubscription[] }> {
  try {
    const response = await api.get("/users/purchases", { signal });
    const data = response.data as PurchasesApiResponse;

    // Parse purchases
    let purchasesSource: any[] = [];
    if (Array.isArray(data)) {
      purchasesSource = data as any[];
    } else if (data && Array.isArray((data as any).purchases)) {
      purchasesSource = (data as any).purchases as any[];
    }

    // Normalize common keys to our UserPurchase shape
    const purchases: UserPurchase[] = purchasesSource.map((p, idx) => ({
      id: p?.id ?? p?.purchaseId ?? idx + 1,
      title: p?.title ?? p?.name ?? p?.trackTitle ?? undefined,
      artist: p?.artist ?? p?.artistName ?? p?.singer ?? undefined,
      image: p?.image ?? p?.cover ?? p?.thumbnail ?? p?.artwork ?? undefined,
    }));

    // Parse subscriptions (defensive mappings for common keys)
    let subscriptionsSource: any[] = [];
    if (data && Array.isArray((data as any).subscriptions)) {
      subscriptionsSource = (data as any).subscriptions as any[];
    } else if (data && (data as any).subscription) {
      const s = (data as any).subscription;
      subscriptionsSource = Array.isArray(s) ? s : [s];
    }

    const subscriptions: UserSubscription[] = subscriptionsSource.map((s) => ({
      id: s.id ?? s.subscriptionId ?? cryptoRandomId(),
      title: s.title ?? s.name ?? 'اشتراک',
      price: s.price ?? s.amount ?? s.cost ?? '۰',
      date: s.date ?? s.expires_at ?? s.endDate ?? '',
      iconType: s.iconType ?? (s.ispremium || s.tier === 'premium' ? 'star' : 'diamond'),
      ispremium: Boolean(s.ispremium ?? s.premium ?? s.tier === 'premium'),
      status: s.status ?? 'پرطرفدار ترین',
    }));

    return { purchases, subscriptions };
  } catch (err: any) {
    const isAbortDom = err instanceof DOMException && err.name === 'AbortError'
    const isAxiosCanceled = err?.name === 'CanceledError' || err?.code === 'ERR_CANCELED' || err?.message === 'canceled'
    if (isAbortDom || isAxiosCanceled) return { purchases: [], subscriptions: [] }
    throw err
  }
}

function cryptoRandomId(): string {
  // Fallback simple id for UI keys if backend misses ids
  return Math.random().toString(36).slice(2);
}


