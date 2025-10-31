import React, { useState, MouseEvent } from "react";
import { Button, Menu, MenuItem, Box, Typography, Divider, Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const GenreFilterAtom: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [genres, setGenres] = useState<{ [key: string]: boolean }>({
    'ترپ': false,
    "اولد اسکول": false,
    "سینت ویو": false,
    "بوم بپ": false,
  });

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleChange = (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenres(prev => ({ ...prev, [key]: event.target.checked }));
  };

  const handleApply = () => {
    console.log("Genres applied:", genres);
    handleClose();
  };
  const handleReset = () => {
    setGenres({ Action: false, Comedy: false, Drama: false, Horror: false });
  };

  return (
    <Box className='md:!mr-5'>
      <Button
        variant="outlined"
        onClick={handleClick}
        className="!text-white/75 !border-white/75 !ml-[-11] !px-2 w-full !py-2 !rounded-[0.7rem] !flex !justify-between
        2xl:!px-6
        lg:!px-4 lg:!ml-0
        md:w-auto"
        endIcon={<ArrowDropDownIcon />}
      >
        فیلتر ژانر
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
            <Typography variant="subtitle2">انتخاب ژانر</Typography>
            <FormGroup>
              {Object.keys(genres).map((key) => (
                <FormControlLabel
                  key={key}
                  control={<Checkbox checked={genres[key]} onChange={handleChange(key)} />}
                  label={key}
                />
              ))}
            </FormGroup>
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

export default GenreFilterAtom;
