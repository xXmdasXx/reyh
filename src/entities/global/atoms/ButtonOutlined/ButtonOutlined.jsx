import React from "react";
import Button from "@mui/material/Button";

function AtomButton({label,...props}) {
  return (
    <Button
      variant="outlined"      // حالت outlined
      color="#858585"         // رنگ دکمه
      size="medium"           // اندازه دکمه (small, medium, large)
      sx={{
        borderColor: "#858585",   // رنگ حاشیه
        color: "#858585",         // رنگ متن
        borderRadius: "50px",
        textTransform: "none",
        padding: "8px 24px",
        fontWeight: "500",
        "&:hover": {
          borderColor: "#858585", // حاشیه در حالت hover
          backgroundColor: "rgba(133, 133, 133, 0.1)", // رنگ بکگراند محو در hover
        },
      }}
      {...props}
    >
      {label}
    </Button>
  );
}

export default AtomButton;
