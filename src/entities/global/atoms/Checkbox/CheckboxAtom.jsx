// atoms/CheckboxAtom.jsx
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function CheckboxAtom({
  id,
  checked,
  onChange,
  label,
  className,
  sx,
  ...props
}) {
  return (
    <FormControlLabel
      {...props}
      control={
        <Checkbox
          id={id}
          checked={checked}
          onChange={onChange}
          className={className}
          sx={{
            // رنگ حالت عادی (unchecked)
            color: '#BB19DF',
            // رنگ حالت چک شده
            '&.Mui-checked': {
              color: '#BB19DF',
            },
            // رنگ حالت hover
            '&:hover': {
              backgroundColor: 'rgba(187, 25, 223, 0.1)',
            },
            // رنگ حالت focus
            '&.Mui-focusVisible': {
              color: '#BB19DF',
            },
            // Merge with any custom sx passed as prop
            ...sx,
          }}
        />
      }
      label={label}
      sx={{
        "& .MuiFormControlLabel-label": {
          fontSize: "0.8rem",
        },
      }}
    />
  );
}