// entries/molecules/SidebarItem/SidebarItem.tsx
import React from "react";
import PrimaryButton from "../../../global/atoms/Button/PrimaryButton";

interface SidebarItemProps {
  label: string;
  icon: React.ElementType | string; // می‌تواند MUI icon یا مسیر SVG باشد
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, icon, active = false, onClick }) => {
  // بررسی اینکه آیا icon یک string (مسیر SVG) است یا React component
  const renderIcon = () => {
    if (typeof icon === 'string') {
      // اگر string است، از img tag استفاده کن
      return <img src={icon} alt={label} style={{ width: "1.3rem", height: "1.3rem" }} />;
    } else {
      // اگر React component است، آن را render کن
      const IconComponent = icon as React.ElementType;
      return <IconComponent style={{ fontSize: "1.3rem" }} />;
    }
  };

  return (
    
    <PrimaryButton
      onClick={onClick}
      className=" !font-medium !w-full flex items-center gap-3"
      sx={{
        background: active
          ? "linear-gradient(to left, #4d88ff2f, #b120d53d)"
          : "transparent",
        color: active ? "#fff" : "#E4E4E4",
        border: "none",
        justifyContent: "flex-start",
        paddingLeft: "20px",
        fontSize: "1rem",
        "&:hover": {
          background: active
            ? "linear-gradient()"
            : "rgba(255, 255, 255, 0.5)",
        },
      }}
    >
      {/* آیکون */}
      {renderIcon()}
      {/* متن */}
      <span>{label}</span>
    </PrimaryButton>
    
    
  );
};

export default SidebarItem;



<div className="bg-[#b120d567]"></div>
