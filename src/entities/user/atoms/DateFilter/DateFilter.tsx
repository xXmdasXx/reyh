import React, { useState, MouseEvent } from "react";
import { Button, Menu, MenuItem, Box, Typography, Divider, TextField } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ReleaseDateFilterAtom: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [releaseDate, setReleaseDate] = useState<{ from: string; to: string }>({ from: "", to: "" });

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleChange = (field: "from" | "to") => (event: React.ChangeEvent<HTMLInputElement>) => {
    setReleaseDate(prev => ({ ...prev, [field]: event.target.value }));
  };

  const handleApply = () => {
    console.log("Release date applied:", releaseDate);
    handleClose();
  };
  const handleReset = () => setReleaseDate({ from: "", to: "" });

  return (
    <Box className='md:!mr-5'>
      <Button
        variant="outlined"
        onClick={handleClick}
        className="!text-white/75 !border-white/75 !px-2 !py-2 w-full !rounded-[0.7rem] !flex !justify-between
        2xl:!px-6
        lg:!px-4 lg:!ml-0
        md:w-auto"
        endIcon={<ArrowDropDownIcon/>}
      >
        تاریخ انتشار
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{ className: "!w-72 !mt-2 !p-4 !bg-gray-900/10 !backdrop-blur-md !rounded-xl !shadow-lg !border !border-white/30" }}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem disableRipple>
          <Box sx={{ width: "100%" }}>
            <Typography variant="subtitle2">انتخاب بازه تاریخ</Typography>
            <Box className="flex gap-2 mt-2">
              <TextField label="از" type="date" size="small" fullWidth value={releaseDate.from} onChange={handleChange("from")} />
              <TextField label="تا" type="date" size="small" fullWidth value={releaseDate.to} onChange={handleChange("to")} />
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box sx={{ display: "flex", justifyContent: "space-between", gap: 1 }}>
              <Button size="small" onClick={handleReset}>ریست</Button>
              <Button variant="contained" size="small" onClick={handleApply}>اعمال</Button>
            </Box>
          </Box>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ReleaseDateFilterAtom;
