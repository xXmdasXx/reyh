import React, { useState, MouseEvent } from "react";
import {
  Button,
  Menu,
  MenuItem,
  Box,
  Slider,
  Typography,
  Divider
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const PriceFilterAtom: React.FC = () => {
  // وضعیت باز بودن منو
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // محدوده قیمت
  const [price, setPrice] = useState<number[]>([0, 500]);

  // باز کردن منو
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // بستن منو
  const handleClose = () => {
    setAnchorEl(null);
  };

  // تغییر اسلایدر
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setPrice(newValue);
    }
  };

  // اعمال فیلتر
  const handleApply = () => {
    console.log("قیمت انتخاب‌شده:", price);
    handleClose();
  };

  // ریست کردن اسلایدر
  const handleReset = () => {
    setPrice([0, 500]);
  };

  return (
    <Box>
      {/* دکمه فیلتر */}
      <Button
        variant="outlined"
        onClick={handleClick}
        className="!text-white/75 !border-white/75 !ml-[-11] !px-2 !py-2 w-full !rounded-[0.7rem] !flex !justify-between
        2xl:!px-6
        lg:!ml-0 lg:!px-4
        md:w-auto"
        endIcon={<ArrowDropDownIcon />}
        aria-controls={open ? "price-filter-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        فیلتر قیمت
      </Button>

      {/* منوی دراپ‌داون */}
      <Menu
        id="price-filter-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
            className: "!w-72 !mt-2 !p-4 !bg-gray-900/10 !backdrop-blur-md !rounded-xl !shadow-lg !border !border-white/30 "
        }}
      >
        <MenuItem disableRipple>
          <Box sx={{ width: "100%" }}>
            <Typography variant="subtitle2">محدوده قیمت</Typography>
            <Typography variant="caption" sx={{ display: "block", mb: 1 }}>
              از {price[0]} تا {price[1]} تومان
            </Typography>

            <Slider
            className="!w-full"
              value={price}
              onChange={handleChange}
              valueLabelDisplay="auto"
              min={0}
              max={4000}
              step={10}
              disableSwap={true}
              sx={{
                '& .MuiSlider-thumb': {
                  width: 20,
                  height: 20,
                  marginTop: '0px',   // تنظیم عمودی دقیق
                  marginRight: '-12px',   // اصلاح افقی اگر لازم بود
                },
                '& .MuiSlider-rail': {
                  height: 4,
                },
                '& .MuiSlider-track': {
                  height: 4,
                },
                }}            
            />

            <Divider sx={{ my: 1 }} />

            <Box sx={{ display: "flex", justifyContent: "space-between", gap: 1 }}>
              <Button size="small" onClick={handleReset}>ریست</Button>
              <Button variant="contained" size="small" onClick={handleApply}>
                اعمال
              </Button>
            </Box>
          </Box>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default PriceFilterAtom;
