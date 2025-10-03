// entries/molecules/SidebarItem/SidebarItem.tsx
import React from "react";
import PrimaryButton from "../../../global/atoms/Button/PrimaryButton";

interface SidebarItemProps {
  label: string;
  icon: React.ElementType; // چون از MUI میاد
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, icon: Icon, active = false, onClick }) => {
  return (
    <PrimaryButton
      onClick={onClick}
      className="!font-medium !w-full flex items-center gap-3"
      sx={{
        background: active
          ? "linear-gradient(to left, #BB19DF, #1529E3)"
          : "transparent",
        color: active ? "#fff" : "#E4E4E4",
        border: "none",
        justifyContent: "flex-start",
        paddingLeft: "20px",
        fontSize: "1rem",
        "&:hover": {
          background: active
            ? "linear-gradient(to left, #a514c7 0%, #1221c0 100%)"
            : "rgba(255, 255, 255, 0.5)",
        },
      }}
    >
      {/* آیکون */}
      <Icon style={{ fontSize: "1.3rem" }} />
      {/* متن */}
      <span>{label}</span>
    </PrimaryButton>
  );
};

export default SidebarItem;
