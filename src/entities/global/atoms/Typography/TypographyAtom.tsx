// atoms/TypographyAtom.jsx
import React from "react";
import Typography from "@mui/material/Typography";

export default function TypographyAtom({
  children,
  variant = "body1",
  align = "inherit",
  className,
  sx,
  p,
  ...props
}:any) {
  return (
    <Typography
    
      p={p}
      variant={variant}
      align={align}
      className={className}  // ✅ برای tailwind یا css
      sx={sx}                // ✅ برای mui sx
      {...props}
    >
      {children}
    </Typography>
  );
}