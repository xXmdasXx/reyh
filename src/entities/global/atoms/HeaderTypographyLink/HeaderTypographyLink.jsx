import React from "react";
import Typography from "@mui/material/Typography";

const AtomHeaderLink = ({ text, href = "#", sx = {} , className}) => {
  return (
    <Typography
      component="a"
      href={href}
      className={className}
      sx={{
        color: "#cfcfcf",
        cursor: "pointer",
        transition: 'all 0.3s ease',
        "&:hover": {
          color: "text.primary",
          filter: `drop-shadow(0 0 10px #BC75CB)`
        },
        ...sx,
      }}
    >
      {text}
    </Typography>
  );
};

export default AtomHeaderLink;
