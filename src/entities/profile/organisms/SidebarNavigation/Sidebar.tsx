// entries/profile/organisms/Sidebar.tsx
'use client'
import React, { useState } from "react";
import SidebarItem from "../../molecules/SidebarItem/SidebarItem";
import Typography from "../../../global/atoms/Typography/TypographyAtom"; 

// ایمپورت آیکون‌ها از متریال
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useRouter } from "next/navigation";
import PrimaryButton from "@/entities/global/atoms/Button/PrimaryButton";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

interface SidebarProps {
  activePage: string;
  onNavigate: (key: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onNavigate }) => {
  const [checked, setChecked] = useState(false);
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
  const router = useRouter();

  const items = [
    { label: "اطلاعات حساب", icon: PersonOutlineIcon, key: "account", path: "/account" },
    { label: "داشبورد", icon: HomeOutlinedIcon, key: "dashboard", path: "/dashboard" },
    { label: "پروفایل اکورا", icon: AccountCircleOutlinedIcon, key: "profile", path: "/profile" },
    { label: "خرید ها", icon: ShoppingBagOutlinedIcon, key: "purchases", path: "/purchases" },
    { label: "اشتراک", icon: StarOutlineOutlinedIcon, key: "subscription", path: "/subscription" },
  ];

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  const handleLogout = () => {
    // پاک کردن توکن و اطلاعات کاربر از localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // بستن دیالوگ
    setOpenLogoutDialog(false);
    
    // انتقال به صفحه لاگین
    router.push('/login');
  };

  const handleOpenLogoutDialog = () => {
    setOpenLogoutDialog(true);
  };

  const handleCloseLogoutDialog = () => {
    setOpenLogoutDialog(false);
  };

  return (
    <div
      className="h-full w-[271px] flex flex-col py-12 border-l border-blue-600/30 text-right pr-4 pl-2"
      style={{
        background: "linear-gradient (to bottom, #4d88ff5e 0%, #a42eda5d 2.37%, #b120d56b 5% , #b120d56b 100%  )",
      }}
    >
      {/* لوگو و عنوان */}
      <div className="flex items-center justify-between mb-8 mt-5 px-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center"></div>
          <Typography variant="h6" className="font-bold">اکورا</Typography>
        </div>
      </div>

      {/* آیتم‌ها */}
      <div className="px-6 flex flex-col gap-3 flex-1">
        {items.map((item) => (
          <SidebarItem
            key={item.key}
            label={item.label}
            icon={item.icon}
            active={activePage === item.key}
            onClick={() => {
              onNavigate(item.key);
              handleNavigate(item.path);
            }}
          />
        ))}
      </div>

      {/* دکمه خروج در پایین */}
      <div className="px-6 mt-auto pt-6 pb-4">
        <PrimaryButton
          onClick={handleOpenLogoutDialog}
          className="!font-medium !w-full flex items-center gap-3"
          sx={{
            background: "linear-gradient(to left, #FF4444, #CC0000)",
            color: "#fff",
            justifyContent: "flex-start",
            paddingLeft: "20px",
            fontSize: "1rem",
            "&:hover": {
              background: "linear-gradient(to left, #DD3333, #AA0000)",
              opacity: 0.9,
            },
          }}
        >
          {/* آیکون خروج */}
          <LogoutOutlinedIcon style={{ fontSize: "1.3rem" }} />
          {/* متن */}
          <span>خروج از حساب</span>
        </PrimaryButton>
      </div>

      {/* دیالوگ تایید خروج */}
      <Dialog
        open={openLogoutDialog}
        onClose={handleCloseLogoutDialog}
        PaperProps={{
          sx: {
            backgroundColor: '#1a1a2e',
            color: '#fff',
            borderRadius: '16px',
            minWidth: '400px'
          }
        }}
      >
        <DialogTitle sx={{ textAlign: '', fontFamily: 'IRANSansWeb' }}>
          خروج از حساب کاربری
        </DialogTitle>
        <DialogContent sx={{  fontFamily: 'IRANSansWeb' }}>
          <Typography variant="body1" sx={{ color: '#e4e4e4' }}>
            آیا مطمئن هستید که می‌خواهید از حساب کاربری خود خارج شوید؟
          </Typography>
        </DialogContent>
        <DialogActions sx={{ textAlign: 'right', padding: '16px 24px', gap: 2 }}>
          <Button
            onClick={handleCloseLogoutDialog}
            sx={{
              color: '#e4e4e4',
              fontFamily: 'IRANSansWeb',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            انصراف
          </Button>
          <Button
            onClick={handleLogout}
            sx={{
              background: 'linear-gradient(to left, #FF4444, #CC0000)',
              color: '#fff',
              fontFamily: 'IRANSansWeb',
              padding: '8px 24px',
              borderRadius: '8px',
              '&:hover': {
                background: 'linear-gradient(to left, #DD3333, #AA0000)',
              }
            }}
          >
            خروج
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Sidebar;


