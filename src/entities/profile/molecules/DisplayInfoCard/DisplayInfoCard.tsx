// src/entities/common/molecules/DisplayInfoCard.tsx
import React, { ReactNode } from "react";
import Typography from "../../../global/atoms/Typography/TypographyAtom";

interface DisplayInfoCardProps {
  title: string;
  description: string;
  secenddescription?: string; // بهتره اختیاری باشه
  children?: ReactNode; // برای محتوای دلخواه
}

const DisplayInfoCard: React.FC<DisplayInfoCardProps> = ({
  title,
  description,
  secenddescription, // اینجا باید اضافه بشه
  children,
}) => {
  return (
    <div className="w-[210px] h-[230px] bg-gradient-to-r from-[#060B28]/94 to-[#0A0E23]/49 rounded-2xl p-4 ">
      <div>
        {/* عنوان */}
        <Typography variant="body1" className="text-white text-[12px] font-semibold">
          {title}
        </Typography>

        {/* توضیح */}
        <Typography sx={{ fontFamily: 'IRANSansWeb'}} variant="" className="text-gray-300 text-[12px] mt-2 opacity-30">
          {description}
        </Typography>


        {/* بخش دلخواه */}
        <div className="  mt-4">{children}
          
        </div>

        {/* توضیح دوم (در صورت وجود) */}
        {secenddescription && (
          <Typography
            variant=""
            sx={{ fontFamily: 'IRANSansWeb'}}
            className="text-gray-300 flex flex-row justify-center text-[12px] mt-2 opacity-50"
          >
            {secenddescription}
          </Typography>
        )}
        
      </div>
    </div>
  );
};

export default DisplayInfoCard;
