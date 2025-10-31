// entities/profile/molecules/MobileNavbar/MobileNavbar.tsx
'use client'
import React from "react";
import Typography from "../../../global/atoms/Typography/TypographyAtom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

interface MobileNavbarProps {
  onMenuClick?: () => void;
  isOpen?: boolean;
  title?: string;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ 
  onMenuClick, 
  isOpen = false, 
  title = "اکورا" 
}) => {
  return (
    <div className="flex flex-row bg-[#10021b] lg:hidden px-3 absolute top-0 right-0 left-0 z-20">
      <div className="flex items-center justify-between p-4 w-full">
        <button
          aria-label="Toggle sidebar"
          onClick={onMenuClick}
          className="ml-2 rounded-md p-2 transition"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

       
        <div className='flex-1 flex justify-center items-center'>
          <Typography style={{ fontFamily: 'IRANSansWeb' }}>{title}</Typography>
        </div>
        <div className="w-10"></div>
      </div>
    </div>
  );
};

export default MobileNavbar;

