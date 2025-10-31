import { useState, useEffect } from 'react';
import { fetchSubscriptionPlans, SubscriptionPlan } from '@/services/subscriptionPlans';

export function useSubscriptionPlans() {
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPlans = async () => {
      try {
        console.log('🔄 Hook: Loading subscription plans...');
        setLoading(true);
        setError(null);
        const fetchedPlans = await fetchSubscriptionPlans();
        console.log('✅ Hook: Fetched plans:', fetchedPlans);
        setPlans(fetchedPlans);
      } catch (err: any) {
        console.error('❌ Hook: Error loading subscription plans:', err);
        setError('خطا در بارگذاری پلن‌های اشتراک');
      } finally {
        console.log('🏁 Hook: Loading completed');
        setLoading(false);
      }
    };

    console.log('🎯 Hook: useEffect triggered');
    loadPlans();
  }, []);

  return { plans, loading, error };
}
