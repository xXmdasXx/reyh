import React from "react";
import Button from "@mui/material/Button";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  sx?: object;
  variantType?: "default" | "login"; // ✅ prop جدید اضافه شد
  [key: string]: any;
}

export default function PrimaryButton({
  children,
  onClick = () => {},
  type = "button",
  disabled,
  fullWidth = true,
  className,
  variantType = "default", // ✅ مقدار پیش‌فرض
  sx = {},
  ...props
}: PrimaryButtonProps) {
  // ✅ تعیین استایل بر اساس variantType
  const getBackgroundStyle = () => {
    switch (variantType) {
      case "login":
        return {
          background: 'linear-gradient(to left, #BB19DF, #1529E3)',
          "&:hover": {
            background: 'linear-gradient(to left, #a514c7, #1221c0)',
            opacity: 0.9,
          },
        };
      case "default":
      default:
        return {
          
          background: 'linear-gradient(to left, #4d88ff5e, #b120d591)', // ✅ دیفالت بدون رنگ
          "&:hover": {
            background: 'linear-gradient(to left, #4d88ff46, #b120d57c)',
          
          },
        };
    }
  };

  const buttonStyle = getBackgroundStyle();

  return (
    
    <Button
      variant="contained"
      color="primary"
      type={type}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      className={className}
      sx={{
        
        fontWeight: '700',
        mt: 3,
        height: '48px',
        fontSize: '1.2rem',
        color: "#fff",
        borderRadius: "12px",
        ...buttonStyle, // ✅ استایل بر اساس variantType
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}


