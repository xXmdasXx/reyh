import React, { useState, MouseEvent } from "react";
import { Button, Menu, MenuItem, Box, Typography, Divider, Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const LicenseFilterAtom: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [licenses, setLicenses] = useState<{ [key: string]: boolean }>({
    Exclusive: false,
    Normal: false
  });

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleChange = (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setLicenses(prev => ({ ...prev, [key]: event.target.checked }));
  };

  const handleApply = () => {
    console.log("Licenses applied:", licenses);
    handleClose();
  };
  const handleReset = () => {
    setLicenses({ Free: false, Paid: false, Subscription: false });
  };

  return (
    <Box className='md:!mr-5'>
      <Button
        variant="outlined"
        onClick={handleClick}
        className="!text-white/75 !border-white/75 !ml-[-11] !px-2 !py-2 w-full !rounded-[0.7rem] !flex !justify-between
        2xl:!px-6
        lg:!px-4 lg:!ml-0
        md:w-auto"
        endIcon={<ArrowDropDownIcon />}
      >
        فیلتر لایسنس
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
            <Typography variant="subtitle2">فیلتر لایسنس</Typography>
            <FormGroup>
              {Object.keys(licenses).map((key) => (
                <FormControlLabel
                  key={key}
                  control={<Checkbox checked={licenses[key]} onChange={handleChange(key)} />}
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

export default LicenseFilterAtom;
