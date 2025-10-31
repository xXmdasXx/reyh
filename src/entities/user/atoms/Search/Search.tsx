import React, { useState } from "react";
import { TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchTextFieldAtom: React.FC<{ placeholder?: string; onSearch?: (value: string) => void }> = ({ placeholder = "جستجو کنید...", onSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (onSearch) onSearch(event.target.value);
  };

  return (
    <Box className="w-full flex justify-end">
      <TextField
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="!w-[100%]"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon className="text-white/80" />
            </InputAdornment>
          ),
          sx: {
            bgcolor: "transparent",
            background: "linear-gradient(to right, #B020D580, #4D88FF80)", // gradient
            borderRadius: "0.7rem",
            color: "white",
            height: "43px",
            
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiInputBase-input": {
              color: "white",
              fontSize: '0.8rem'
            },
          },
        }}
      />
    </Box>
  );
};

export default SearchTextFieldAtom;
