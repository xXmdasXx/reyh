"use client";

import React from 'react';
import BuySubscriptionCard from '@/entities/global/atoms/BuySubscriptionCard/BuySubscriptionCard';
import BuySubscriptionButton from '@/entities/global/atoms/BuySubscriptionButton/BuySubscriptionButton';
import Typography from '@/entities/global/atoms/Typography/TypographyAtom';
import LeafVector from '@/entities/landing/atoms/LeafVector/LeafVector';
import GemVector from '@/entities/landing/atoms/GemVector/GemVector';
import StarVector from '@/entities/landing/atoms/StarVector/StarVector';
import CheckCircle from '@/entities/landing/atoms/CheckCircle/CheckCircle';
import { useSubscriptionPlans } from '@/hooks/useSubscriptionPlans';

function SubscriptionPage() {
  const { plans, loading, error } = useSubscriptionPlans();
  
  console.log('📄 SubscriptionPage render - plans:', plans, 'loading:', loading, 'error:', error);

  const getIconComponent = (iconType: string) => {
    switch (iconType) {
      case 'leaf':
        return <LeafVector />;
      case 'star':
        return <StarVector />;
      case 'gem':
        return <GemVector />;
      default:
        return <LeafVector />;
    }
  };

  const handleBuySubscription = (planId: string | number) => {
    alert(`خرید پلن ${planId} - در حال حاضر امکان خرید وجود ندارد`);
  };

  if (loading) {
    return (
      <div className="w-full px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <Typography variant="h6" className="text-white/70" style={{ fontFamily: 'IRANSansWeb' }}>
            در حال بارگذاری پلن‌های اشتراک...
          </Typography>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <Typography variant="h6" className="text-red-400 mb-2" style={{ fontFamily: 'IRANSansWeb' }}>
              خطا در بارگذاری
            </Typography>
            <Typography variant="body2" className="text-white/70" style={{ fontFamily: 'IRANSansWeb' }}>
              {error}
            </Typography>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-8">
      {/* Plans Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div 
            key={plan.id} 
            className="flex justify-center"
          >
            <BuySubscriptionCard gradient={plan.gradient}>
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="mb-3 scale-75">{getIconComponent(plan.iconType)}</div>
                
                {/* Plan Name */}
                <Typography variant="h5" className="font-bold text-white mb-2" style={{ fontFamily: 'IRANSansWeb' }}>
                  {plan.name}
                </Typography>
                
                {/* Price */}
                <div className="flex items-baseline gap-1 mb-4">
                  <Typography variant="h4" className="font-bold text-white text-2xl" style={{ fontFamily: 'IRANSansWeb' }}>
                    {plan.price}
                  </Typography>
                  <Typography variant="body2" className="text-white/70 text-xs" style={{ fontFamily: 'IRANSansWeb' }}>
                    تومان / ماه
                  </Typography>
                </div>
                
                {/* Features */}
                <div className="flex-1 space-y-2 mb-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="shrink-0 mt-0.5 scale-75">
                        <CheckCircle />
                      </div>
                      <Typography variant="body2" className="text-white/80 text-xs" style={{ fontFamily: 'IRANSansWeb' }}>
                        {feature}
                      </Typography>
                    </div>
                  ))}
                </div>
                
                {/* Button */}
                <BuySubscriptionButton 
                  className={`${plan.buttonStyle} !text-sm !h-12`}
                  onClick={() => handleBuySubscription(plan.id)}
                  style={{ fontFamily: 'IRANSansWeb' }}
                >
                  خرید اشتراک
                </BuySubscriptionButton>
              </div>
            </BuySubscriptionCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubscriptionPage;

