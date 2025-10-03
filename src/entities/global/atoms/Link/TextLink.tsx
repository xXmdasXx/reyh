// atoms/TextLink.jsx
import React from "react";
import Link from "@mui/material/Link";

interface TextLinkProps {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
  className?: string;
  sx?: object;
  [key: string]: any;
}

export default function TextLink({ 
  children,
  href,
  onClick = () => {},
  className = "",
  sx = {},
  ...props 
}: TextLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      underline="hover"
      variant="body2"
      className={className}  
      sx={sx}                
      {...props}
    >
      {children}
    </Link>
  );
}