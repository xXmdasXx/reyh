// entries/dashboard/molecules/InfoCard.tsx
import React from "react";
import Typography from "../../../global/atoms/Typography/TypographyAtom";
import ImageAtom from "../../../profile/atom/ImageAtom/ImageAtom";


interface InfoCardProps {
  title: string;
  description: string;
  image: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, image }) => {
  return (
    <div
      className="w-[98%] h-18 flex items-center justify-between rounded-xl p-4 shadow-md"
      style={{
        background:
          "linear-gradient(180deg, rgba(77,136,255,0.45) 0%, #4D88FF 100%)",
      }}
    >
      {/* متن‌ها سمت راست */}
      <div className="flex flex-col text-right">
        <Typography  sx={{ fontSize: "13px", fontFamily: 'IRANSansWeb'}} className="  text-gray-400 ">
          {title}
        </Typography>
        <Typography variant="body2" className="text-gray-200">
          {description}
        </Typography>
      </div>

      {/* تصویر سمت چپ (آخر کارت) */}
      <div className="flex-shrink-0">
        <ImageAtom src={image} alt={title} className="w-16 h-16" />
      </div>
    </div>
  );
};

export default InfoCard;
