import { useEffect, useMemo, useState } from 'react'
import { fetchUserPurchasesData, UserPurchase, UserSubscription } from '@/services/purchases'

type UsePurchasesResult = {
  purchases: UserPurchase[]
  subscriptions: UserSubscription[]
  loading: boolean
  error: unknown
  refetch: () => void
}

export function usePurchases(): UsePurchasesResult {
  const [purchases, setPurchases] = useState<UserPurchase[]>([])
  const [subscriptions, setSubscriptions] = useState<UserSubscription[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<unknown>(null)
  const [reloadKey, setReloadKey] = useState<number>(0)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    setError(null)

    fetchUserPurchasesData(controller.signal)
      .then((res) => {
        const hasPurchases = Array.isArray(res.purchases) && res.purchases.length > 0
        const hasSubscriptions = Array.isArray(res.subscriptions) && res.subscriptions.length > 0

        //دیتا فیک 
        const fallbackPurchases: UserPurchase[] = [
          { id: 1, title: 'لورم ایپسوم', artist: 'هنرمند ', image: '' },
          { id: 2, title: 'لورم ایپسوم', artist: 'هنرمند ', image: '' },
          { id: 3, title: 'لورم ایپسوم', artist: 'هنرمند ', image: '' },
          { id: 4, title: 'لورم ایپسوم', artist: 'هنرمند ', image: '' },
          { id: 5, title: 'لورم ایپسوم', artist: 'هنرمند ', image: '' },
          { id: 6, title: 'لورم ایپسوم', artist: 'هنرمند ', image: '' },
          { id: 7, title: 'لورم ایپسوم', artist: 'هنرمند ', image: '' },
          { id: 8, title: 'لورم ایپسوم', artist: 'هنرمند ', image: '' },
          { id: 9, title: 'لورم ایپسوم', artist: 'هنرمند ', image: '' },
          { id: 10, title: 'لورم ایپسوم', artist: 'هنرمند ', image: '' },
          { id: 11, title: 'لورم ایپسوم', artist: 'هنرمند ', image: '' },
          { id: 12, title: 'لورم ایپسوم', artist: 'هنرمند ', image: '' },
          { id: 13, title: 'لورم ایپسوم', artist: 'هنرمند ', image: '' },
          { id: 14, title: 'لورم ایپسوم', artist: 'هنرمند ', image: '' },


        ]

        //دیتا فیک 
        const fallbackSubscriptions: UserSubscription[] = [
          { id: 's1', title: 'پلن اکسکلوسیو', price: '875,۰۰۰', date: '1403/07/01', iconType: 'diamond', ispremium: false },
          { id: 's2', title: 'پلن پرمیوم', price: '875٬۰۰۰', date: '1403/08/01', iconType: 'star', ispremium: true },
          { id: 's3', title: 'پلن پرمیوم', price: '875٬۰۰۰', date: '1403/08/01', iconType: 'star', ispremium: true },
          { id: 's4', title: 'پلن پرمیوم', price: '875٬۰۰۰', date: '1403/08/01', iconType: 'star', ispremium: true },
        ]

        setPurchases(hasPurchases ? res.purchases : fallbackPurchases)
        setSubscriptions(hasSubscriptions ? res.subscriptions : fallbackSubscriptions)
      })
      .catch((err) => {
        // Ignore cancellation errors (Axios CanceledError or AbortController)
        const isAbortDom = err instanceof DOMException && err.name === 'AbortError'
        const isAxiosCanceled = err?.name === 'CanceledError' || err?.code === 'ERR_CANCELED' || err?.message === 'canceled'
        if (isAbortDom || isAxiosCanceled) return
        setError(err)
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [reloadKey])

  const refetch = () => setReloadKey((k) => k + 1)

  return useMemo(() => ({ purchases, subscriptions, loading, error, refetch }), [purchases, subscriptions, loading, error])
}


