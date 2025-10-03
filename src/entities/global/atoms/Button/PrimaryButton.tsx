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
  [key: string]: any;
}

export default function PrimaryButton({
  children,
  onClick = () => {},
  type = "button",
  disabled,
  fullWidth = true,
  className,
  sx = {},
  ...props
}: PrimaryButtonProps) {
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
        ontSize: '22px',
        fontWeight: '700',
        mt: 3,
        height: '48px',
        fontSize: '1.2rem',
        background: 'linear-gradient(to left, #BB19DF, #1529E3)',
        color: "#fff",
      
        borderRadius: "12px",
        "&:hover": {
          background: 'linear-gradient(to left, #a514c7, #1221c0)',
          opacity: 0.9,
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}