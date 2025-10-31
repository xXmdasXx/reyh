// entities/profile/organisms/purchases/Purchases.tsx
'use client'
import React, { useMemo, useState, useEffect } from "react";
import Typography from "../../../global/atoms/Typography/TypographyAtom";
import PurchasesCard from "../../molecules/PurchasesCard/PurchasesCard";
import SearchHeader from "../../molecules/SearchHeader/SearchHeader";
import PurchaseGrid from "../../molecules/PurchaseGrid/PurchaseGrid";
import PurchasePagination from "../../molecules/PurchasePagination/PurchasePagination";
import { usePurchases } from "@/hooks/usePurchases";

const Purchases: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [screenSize, setScreenSize] = useState<'mobile' | 'xl'|'tablet' | 'desktop'>('desktop');

  // تشخیص ابعاد صفحه
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 768) {
        setScreenSize('mobile');
      } else if (window.innerWidth < 1024) {
        setScreenSize('tablet');
      } else if (window.innerWidth < 1280) {
        setScreenSize('xl');
      }
       else {
        setScreenSize('desktop');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // اشتراک‌ها و خریدها از API
  const { purchases, subscriptions, loading, error } = usePurchases();

  // نرمال‌سازی اشتراک‌ها برای کارت‌ها (انواع دقیق موردنیاز)
  const uiSubscriptions = useMemo(() => {
    return subscriptions.map((s, idx) => {
      const icon: 'star' | 'diamond' = s.iconType === 'star' ? 'star' : 'diamond'
      return {
        id: typeof s.id === 'number' ? s.id : idx + 1,
        title: s.title ?? 'اشتراک',
        price: s.price ?? '۰',
        date: s.date ?? '',
        iconType: icon,
        ispremium: Boolean(s.ispremium),
      }
    })
  }, [subscriptions])

// داده واقعی خریدها از API

  // تعداد آیتم‌ها در هر صفحه بر اساس ابعاد صفحه
  // موبایل: 2 ستون × 3 ردیف = 6 آیتم
  // تبلت: 4 ستون × 2 ردیف = 8 آیتم
  // دسکتاپ: 6 ستون × 2 ردیف = 12 آیتم
  const getItemsPerPage = () => {
    switch (screenSize) {
      case 'mobile': return 6;
      case 'tablet': return 8;
      case 'xl': return 10;
      case 'desktop': return 12;
      default: return 12;
    }
  };
  const itemsPerPage = getItemsPerPage();
  
  // محاسبه آیتم‌های صفحه فعلی
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // نرمال‌سازی خریدها برای گرید
  const uiPurchases = useMemo(() => {
    return purchases.map((p, idx) => ({
      id: typeof p.id === 'number' ? p.id : idx + 1,
      title: p.title ?? 'بدون عنوان',
      artist: p.artist ?? 'نامشخص',
      image: p.image,
    }))
  }, [purchases])

  const currentPagePurchases = useMemo(() => uiPurchases.slice(startIndex, endIndex), [uiPurchases, startIndex, endIndex]);
  
  // محاسبه تعداد کل صفحات
  const totalPages = useMemo(() => Math.max(1, Math.ceil(purchases.length / itemsPerPage)), [purchases.length, itemsPerPage]);

  if (loading) {
    return (
      <div className="px-4 md:px-0 lg:px-12 pt-8 md:pt-12 flex flex-col gap-6 md:gap-10 min-h-[60vh] items-center justify-center">
        <Typography variant="h5" className="text-white">در حال بارگذاری...</Typography>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-0 lg:px-12 pt-8 md:pt-12 flex flex-col gap-6 md:gap-10">
      {/* تیتر بالای صفحه */}
      <Typography variant="h4" className="font-bold text-white mb-6 text-base md:text-3xl">
        اشتراک های خریداری شده
      </Typography>

      {/* بخش اشتراک‌های خریداری شده */}
      <div className="mb-5">
        
        <div className="direction-rtl flex overflow-x-auto  gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ">
          {uiSubscriptions.map((subscription) => (
            <PurchasesCard
              key={subscription.id}
              id={subscription.id}
              title={subscription.title}
              price={subscription.price}
              date={subscription.date}
              iconType={subscription.iconType}
              ispremium={subscription.ispremium}
            />
          ))}
        </div>
      </div>


      {/* بخش خریدها */}
      <div className="mb-8 mt-5 flex flex-col min-h-[60vh]">
        <SearchHeader title="خرید ها" />
        <div className="flex-1">
          {error ? (
            <Typography variant="body2" className="text-red-400">خطا در بارگذاری خریدها</Typography>
          ) : (
            <PurchaseGrid purchases={currentPagePurchases} />
          )}
        </div>
        <PurchasePagination 
          currentPage={currentPage} 
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          className="mt-auto"
        />
      </div>
    </div>
  );
};

export default Purchases;
