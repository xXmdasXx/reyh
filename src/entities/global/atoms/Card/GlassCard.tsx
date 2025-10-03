"use client";

import { Card, CardContent } from "@mui/material";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  width?: string | number;
  height?: string | number;
  className?: string
}

export default function GlassCard({
  children,
  width = "400px",
  height = "auto",
  className = ''
}: GlassCardProps) {
  return (
    <Card
      elevation={0}
      className={className}
      sx={{
        width,
        height,
        borderRadius: "50px",

        p: {
          xs: 1.5,   
          sm: 3,     
          md: 5,     
        },

        background: "rgba(255, 255, 255, 0.01)",
        boxShadow: `
        inset 0 13px 20px -10px rgba(255, 255, 255, 1),
        inset 0 45px 40px -10px rgba(255, 255, 255, 0.2), 
        inset 0 -10px 20px -10px rgba(255, 255, 255, 0.2)
        `,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        display: "flex",
      }}
    >
      <CardContent sx={{ 
        width: "100%", 
        height: "100%", 
        p: { xs: 1.5, sm: 2.5 }, // اینم واکنش‌گرا بشه
        display: "flex",
        flexDirection: "column",
      }}>
        {children}
      </CardContent>
    </Card>
  );
}
