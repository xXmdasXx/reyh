// entities/profile/molecules/PurchasesCard/PurchasesCard.tsx
'use client'
import React from "react";
import Typography from "../../../global/atoms/Typography/TypographyAtom";
import PrimaryButton from "../../../global/atoms/Button/PrimaryButton";
import Image from "next/image";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

interface PurchasesCardProps {
  id: number;
  title: string;
  price: string;
  date: string;
  iconType: 'star' | 'diamond';
  ispremium: boolean;
  status?: string;
}

const PurchasesCard: React.FC<PurchasesCardProps> = ({
  id,
  title,
  price,
  date,
  iconType,
  ispremium,
  status = "پرطرفدار ترین"
}) => {
  return (
    <div className={`backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 w-[280px]  flex-shrink-0 ${
      ispremium 
        ? "bg-gradient-to-br from-[#B020D5]/20 to-[#B020D5]/10" 
        : "bg-gradient-to-br from-[#4D88FF]/40 to-[#887755]/50"
    }`}>
            {/* Header with icon and status */}
            <div className="flex items-center justify-between mb-3">
              <div className="text-2xl">
                {iconType === 'star' ? (
                  <Image 
                    src="/starVector.svg" 
                    alt="Star" 
                    width={24} 
                    height={24}
                    className="w-6 h-6"
                  />
                ) : (
                  <Image 
                    src="/gemVector.svg" 
                    alt="Diamond" 
                    width={24} 
                    height={24}
                    className="w-6 h-6"
                  />
                )}
              </div>
        {ispremium ? (
          <div className="text-xs bg-gradient-to-r !from-[#AA229C] !to-[#A25FF8] text-white px-4 py-1 rounded flex items-center gap-1" style={{ fontFamily: 'IRANSansWeb' }}>
            <TrendingUpIcon sx={{ fontSize: "1rem", color: "white" }} />
            {status}
          </div>
        ) : null}
      </div>

      {/* Content */}
      <div className="mb-2">
        <Typography variant="h6" className="font-bold text-white mb-1">
          {title}
        </Typography>
        <Typography variant="h5" className="font-bold text-white py-2">
          {price} / در ماه
        </Typography>
        <Typography variant="body2" className="text-gray-300 pt-1">
          پایان یافته در تاریخ {date}
        </Typography>
      </div>

      {/* Action Button */}
      <PrimaryButton
        className={`!w-full  !text-sm ${
          ispremium 
            ? "!bg-gradient-to-r !from-[#AA229C] !to-[#A25FF8]" 
            : "!bg-gradient-to-r !from-[#13E5D5]/50 !to-[#13E5D5]"
        }`}
        sx={{
          fontSize: "0.875rem",
          padding: "8px 16px",
          borderRadius: "8px",
          "&:hover": {
            opacity: 0.8,
            transform: "scale(1.02)"
          }
        }}
      >
    خرید مجدد
      </PrimaryButton>
    </div>
  );
};

export default PurchasesCard;
