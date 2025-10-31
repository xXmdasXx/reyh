// entries/dashboard/organisms/Dashboard.tsx
'use client'
import React from "react";
import Typography from "../../../global/atoms/Typography/TypographyAtom";
import InfoCard from "../../molecules/profileInfocard/InfoCard";
import ImageAtom from "../../atoms/ImageAtom/ImageAtom";
import TextLink from "@/entities/global/atoms/Link/TextLink";

const Dashboard: React.FC = () => {
  const cards = [
    {
      title: "درآمد امروز",
      description: "5,300,000",
      image: "/wallet.svg",
    },
    {
      title: "تعداد کل آثار",
      description: "120",
      image: "/network.svg",
    },
    {
      title: "درآمد کل",
      description: "6,287,000",
      image: "/card.svg",
    },
    {
      title: "ترک های فروخته شده",
      description: "28",
      image: "/page.svg",
    },
  ];

  const purchasedProducts = [
    "اپ آرایش بخش",
    "تکه های شکسته",
    "تکه های شکسته",
    "اپ آرایش بخش",
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-10 xl:p-12 flex flex-col gap-6 lg:gap-10">
      {/* تیتر بالای صفحه */}
      <Typography variant="h4" className="font-bold text-white">
        داشبورد
      </Typography>

      {/* اول کارت‌های InfoCard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {cards.map((card, index) => (
          <InfoCard
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>

      {/* کارت خوش‌آمدگویی */}
      <div className="w-full max-w-none lg:max-w-[522px] h-auto lg:h-[374px] flex flex-col-reverse lg:flex-row-reverse items-center justify-between rounded-2xl p-4 sm:p-6 shadow-md bg-gradient-to-r from-[#4D88FF]/30 to-[#4D88FF]/10">
         {/* تصویر (سمت چپ) */}
        <div className="ml-0 lg:ml-5 flex-shrink-0 flex items-center justify-center">
          <ImageAtom
            src="/welcome.svg"
            alt="Welcome"
            className="w-[180px] h-[220px] sm:w-[200px] sm:h-[260px] lg:w-[236px] lg:h-[299px]"
          />
        </div>
        {/* متن‌ها (سمت راست) */}
        <div className="text-right flex flex-col gap-2 w-full lg:w-auto">
          <Typography variant="body2" className="text-gray-400">
            خوش آمدید.
          </Typography>
          <Typography variant="h4" className="font-bold text-white">
            شادی قدمیاری
          </Typography>
          <Typography variant="body1" className="text-gray-300">
            خوشحالیم که دوباره<br /> به اکورا برگشتی!
          </Typography>

          <div className="mt-4">
            <TextLink href="#" className="text-sm text-white ">
              ← به پروفایل برو
            </TextLink>
          </div>
        </div>
      </div>

</div>
  );
};

export default Dashboard;
