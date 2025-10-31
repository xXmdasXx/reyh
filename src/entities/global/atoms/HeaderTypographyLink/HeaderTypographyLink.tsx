"use client";

import React from "react";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  text: string;
  href: string;
  className?: string;
  sx?: object;
  onClick?: () => void;
}

const HeaderTypographyLink: React.FC<Props> = ({ text, href, className, sx = {}, onClick }) => {
  const pathname = usePathname(); // مسیر فعلی رو میاره

  const isActive = pathname === href;

  return (
    <Link href={href} passHref onClick={onClick}>
      <Typography
        component="span"
        className={className}
        sx={{
          filter: isActive ? `drop-shadow(0 0 10px #BC75CB)` : ``,
          cursor: "pointer",
          transition: "all 0.3s ease",
          "&:hover": {
            color: "text.primary",
            filter: `drop-shadow(0 0 10px #BC75CB)`,
          },
          ...sx,
        }}
      >
        {text}
      </Typography>
    </Link>
  );
};

export default HeaderTypographyLink;
