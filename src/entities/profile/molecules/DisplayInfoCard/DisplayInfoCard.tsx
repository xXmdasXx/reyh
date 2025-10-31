import React, { ReactNode } from "react";
import Typography from "../../../global/atoms/Typography/TypographyAtom";

interface DisplayInfoCardProps {
  title: string;
  description: string;
  secenddescription?: string;
  children?: ReactNode;
}

const DisplayInfoCard: React.FC<DisplayInfoCardProps> = ({
  title,
  description,
  secenddescription,
  children,
}) => {
  return (
    <div className="
      w-full h-auto 
      bg-gradient-to-br from-[#060B28F0]/94 to-[#0A0E237D]/49 
      rounded-2xl p-4 md:p-5 
      flex flex-col items-start justify-start text-right 
      transition-all duration-300
      sm:w-full sm:h-auto
      md:w-full md:h-[290px]
      lg:w-full lg:h-[260px]
      xl:w-full xl:h-[280px]
      2xl:w-full 2xl:h-[260px]
    ">

      {/* عنوان */}
      <Typography
        variant="body1"
        className="
          text-white font-semibold 
          text-[18px] 
          md:text-[16px] 
          lg:text-[20px]
          xl:text-[18px]
          2xl:text-[20px]
        "
      >
        {title}
      </Typography>

      {/* توضیح اول */}
      <Typography
        sx={{ fontFamily: "IRANSansWeb" }}
        className="
          text-gray-300 mt-2 opacity-60 
          text-[13px] 
          md:text-[12px] 
          lg:text-[14px]
          xl:text-[13px]
          2xl:text-[14px]
        "
      >
        {description}
      </Typography>

      {/* محتوای اصلی */}
      <div className="mt-4 md:mt-5 flex justify-start items-center w-full">
        {children}
      </div>

      {/* توضیح دوم (در صورت وجود) */}
      {secenddescription && (
        <Typography
          sx={{ fontFamily: "IRANSansWeb" }}
          className="
            text-gray-300 
            text-[13px] 
            md:text-[12px] 
            lg:text-[14px] 
            xl:text-[13px]
            2xl:text-[14px]
            mt-3 opacity-60
          "
        >
          {secenddescription}
        </Typography>
      )}
    </div>
  );
};

export default DisplayInfoCard;