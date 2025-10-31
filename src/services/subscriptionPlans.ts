import { api } from "@/lib/Axios";

export type SubscriptionPlan = {
  id: number | string;
  name: string;
  price: string;
  features: string[];
  gradient: string;
  iconType: 'leaf' | 'star' | 'gem';
  buttonStyle: string;
  featured?: boolean;
};

export async function fetchSubscriptionPlans(): Promise<SubscriptionPlan[]> {
  console.log('🚀 Starting fetchSubscriptionPlans...');
  
  try {
    console.log('📡 Making API call to /users/purchases...');
    // Try to get subscription plans from the existing purchases endpoint
    const response = await api.get("/users/purchases");
    const data = response.data;
    
    console.log('✅ API Response from /users/purchases:', data);
    console.log('✅ Response status:', response.status);
    
    // Check if the response contains subscription plans
    if (data && Array.isArray(data.subscriptions)) {
      return data.subscriptions.map((plan: any, index: number) => normalizeSubscriptionPlan(plan, index));
    }
    
    // If data is an array, check if it contains subscription plans
    if (Array.isArray(data)) {
      const subscriptionPlans = data.filter((item: any) => 
        item.type === 'subscription' || 
        item.planType || 
        item.subscriptionType ||
        item.name?.includes('پلن') ||
        item.title?.includes('اشتراک')
      );
      
      if (subscriptionPlans.length > 0) {
        return subscriptionPlans.map((plan: any, index: number) => normalizeSubscriptionPlan(plan, index));
      }
    }
    
    // If no subscription plans found in API, return default plans
    console.log('⚠️ No subscription plans found in API response, using default plans');
    return getDefaultPlans();
  } catch (err: any) {
    console.error('❌ Error fetching subscription plans:', err);
    console.error('❌ Error details:', err.response?.data);
    console.error('❌ Error status:', err.response?.status);
    // Return default plans on error
    return getDefaultPlans();
  }
}

function normalizeSubscriptionPlan(plan: any, index: number): SubscriptionPlan {
  return {
    id: plan?.id ?? plan?.planId ?? index + 1,
    name: plan?.name ?? plan?.title ?? plan?.planName ?? `پلن ${index + 1}`,
    price: plan?.price ?? plan?.cost ?? plan?.amount ?? '0',
    features: Array.isArray(plan?.features) ? plan.features : 
              Array.isArray(plan?.benefits) ? plan.benefits :
              Array.isArray(plan?.description) ? plan.description : [],
    gradient: plan?.gradient ?? getDefaultGradient(index),
    iconType: plan?.iconType ?? getDefaultIconType(index),
    buttonStyle: plan?.buttonStyle ?? getDefaultButtonStyle(index),
    featured: Boolean(plan?.featured ?? plan?.isPremium ?? plan?.popular ?? index === 1),
  };
}

function getDefaultPlans(): SubscriptionPlan[] {
  return [
    {
      id: 1,
      name: 'پلن عادی',
      price: '389,000',
      features: [
        'دسترسی به تمام بیت‌ها',
        'دانلود نامحدود',
        'پشتیبانی 24/7',
        'بروزرسانی رایگان'
      ],
      gradient: 'from-[#887755]/10 to-[#5F2511]/30',
      iconType: 'leaf',
      buttonStyle: 'bg-gradient-to-r from-[#FFF500]/30 to-[#E11B54]/40',
    },
    {
      id: 2,
      name: 'پلن پریمیوم',
      price: '875,000',
      features: [
        'همه امکانات پلن عادی',
        'دسترسی زودهنگام',
        'محتوای اختصاصی',
        'مشاوره تخصصی'
      ],
      gradient: 'from-[#B020D5]/70 to-[#B020D5]/10',
      iconType: 'star',
      buttonStyle: 'bg-gradient-to-r from-[#ffffff]/40 to-[#B020D5]/80',
      featured: true,
    },
    {
      id: 3,
      name: 'پلن اکسکلوسیو',
      price: '999,000',
      features: [
        'همه امکانات پریمیوم',
        'ساخت بیت سفارشی',
        'جلسات خصوصی',
        'اولویت در پشتیبانی'
      ],
      gradient: 'from-[#887755]/15 to-[#4D88FF]/20',
      iconType: 'gem',
      buttonStyle: 'bg-gradient-to-r from-[#6681E2]/90 to-[#13E5D5]/70',
    }
  ];
}

function getDefaultGradient(index: number): string {
  const gradients = [
    'from-[#887755]/10 to-[#5F2511]/30',
    'from-[#B020D5]/70 to-[#B020D5]/10',
    'from-[#887755]/15 to-[#4D88FF]/20'
  ];
  return gradients[index % gradients.length];
}

function getDefaultIconType(index: number): 'leaf' | 'star' | 'gem' {
  const types: ('leaf' | 'star' | 'gem')[] = ['leaf', 'star', 'gem'];
  return types[index % types.length];
}

function getDefaultButtonStyle(index: number): string {
  const styles = [
    'bg-gradient-to-r from-[#FFF500]/30 to-[#E11B54]/40',
    'bg-gradient-to-r from-[#ffffff]/40 to-[#B020D5]/80',
    'bg-gradient-to-r from-[#6681E2]/90 to-[#13E5D5]/70'
  ];
  return styles[index % styles.length];
}
