// entities/profile/molecules/PurchaseGrid/PurchaseGrid.tsx
'use client'
import React from "react";
import Typography from "../../../global/atoms/Typography/TypographyAtom";

interface Purchase {
  id: number;
  title: string;
  artist: string;
  image?: string;
}

interface PurchaseGridProps {
  purchases: Purchase[];
  gridClassName?: string;
}

const PurchaseGrid: React.FC<PurchaseGridProps> = ({ purchases, gridClassName }) => {
  return (
    <div className={`grid grid-cols-2 grid-rows-3 md:grid-cols-4 md:grid-rows-2 lg:grid-cols-5 lg:grid-rows-2 xl:grid-cols-6 xl:grid-rows-2 gap-4 mb-4 ${gridClassName ?? ''} cursor-pointer`}>
      {purchases.map((purchase) => (
        <div key={purchase.id} className="flex flex-col gap-1">
          {/* باکس نارنجی */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-tr from-[#FF7344] to-[#35115F] aspect-square mb-2"></div>
          
          {/* اطلاعات محصول زیر باکس */}
          <div className="text-start ">
            <Typography variant="body2" className="mb-1 py-1 text-white font-bold" sx={{ fontFamily: 'IRANSansWeb' }}>
              {purchase.title}
            </Typography>
            <Typography variant="caption" className="text-white/70" sx={{ fontFamily: 'IRANSansWeb' }}>
              {purchase.artist}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PurchaseGrid;
