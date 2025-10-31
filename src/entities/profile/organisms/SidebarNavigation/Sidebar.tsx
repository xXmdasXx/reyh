// src/entities/profile/organisms/SidebarNavigation/Sidebar.tsx
'use client'
import React, { useState, useEffect } from "react";
import SidebarItem from "../../molecules/SidebarItem/SidebarItem";
import Typography from "../../../global/atoms/Typography/TypographyAtom"; 
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useRouter, usePathname } from "next/navigation";
import PrimaryButton from "@/entities/global/atoms/Button/PrimaryButton";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { removeAuthToken } from "@/lib/Axios";

interface SidebarProps {
  activePage?: string;
  onNavigate?: (key: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onNavigate }) => {
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
  const [currentActivePage, setCurrentActivePage] = useState("account"); // ✅ حالت داخلی
  const router = useRouter();
  const pathname = usePathname();

  const items = [
    { label: "اطلاعات حساب", icon: PersonOutlineIcon, key: "account", path: "/account" },
    { label: "داشبورد", icon: HomeOutlinedIcon, key: "dashboard", path: "/dashboard" },
    { label: "پروفایل اکورا", icon: AccountCircleOutlinedIcon, key: "profile", path: "/profile" },
    { label: "ترک‌های من", icon: "/whitenote.svg", key: "mytracks", path: "/mytracks" },

    { label: "خرید ها", icon: ShoppingBagOutlinedIcon, key: "purchases", path: "/purchases" },
    { label: "اشتراک", icon: StarOutlineOutlinedIcon, key: "subscription", path: "/subscription" },
  ];

  // ✅ تشخیص خودکار صفحه فعال بر اساس URL
  useEffect(() => {
    const detectActivePage = () => {
      if (pathname.includes("/account")) return "account";
      if (pathname.includes("/dashboard")) return "dashboard";
      if (pathname.includes("/mytracks")) return "mytracks";
      if (pathname.includes("/profile")) return "profile";
      if (pathname.includes("/purchases")) return "purchases";
      if (pathname.includes("/subscription")) return "subscription";
      return "account"; // ✅ پیش‌فرض
    };

    const detectedPage = detectActivePage();
    setCurrentActivePage(detectedPage);
    
    // اگر prop activePage ارسال شده، از آن استفاده کن
    if (activePage) {
      setCurrentActivePage(activePage);
    }
  }, [pathname, activePage]);

  const handleNavigate = (path: string, key: string) => {
    // ✅ به روزرسانی وضعیت فعال
    setCurrentActivePage(key);
    
    // ✅ فراخوانی تابع callback اگر وجود دارد
    if (onNavigate) {
      onNavigate(key);
    }
    
    // ✅ هدایت به مسیر مورد نظر
    router.push(path);
  };

  const handleLogout = () => {
    removeAuthToken();
    setOpenLogoutDialog(false);
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
      className=" 
       h-full w-[271px] flex flex-col py-12 text-right pr-4 pl-2
      bg-gradient-to-b from-[#030216] to-[#04032A] 
      sm:bg-gradient-to-b sm:from-[#030216] sm:to-[#04032A]
      md:bg-gradient-to-b md:from-[#030216] md:to-[#04032A]
      lg:bg-none
      xl:bg-none"
      style={{
        background: "linear-gradient (to bottom, #4d88ff5e 0%, #a42eda5d 2.37%, #b120d56b 5% , #b120d56b 100%   )",
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
       {items.map(item => (
          <SidebarItem
            key={item.key} // Must be item.key, NOT index
            label={item.label}
            icon={item.icon}
            active={currentActivePage === item.key}
            onClick={() => handleNavigate(item.path, item.key)}
          />
        ))}

      </div>

      {/* دکمه خروج در پایین */}
      <div className="px-6  mt-auto pt-6 pb-4">
        <PrimaryButton
          onClick={handleOpenLogoutDialog}
          className="!font-medium  !bg-gradient-to-br from-[#A12094EB]/94 to-[#9558E3E3]/49 !w-full flex items-center gap-3"
          sx={{
            
            color: "#fff",
            justifyContent: "flex-start",
            paddingLeft: "20px",
            fontSize: "1rem",
            "&:hover": {
              
              opacity: 0.9,
            },
          }}
        >
          <LogoutOutlinedIcon style={{ fontSize: "1.3rem" }} />
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
        <DialogTitle sx={{ textAlign: 'center', fontFamily: 'IRANSansWeb' }}>
          خروج از حساب کاربری
        </DialogTitle>
        <DialogContent sx={{ fontFamily: 'IRANSansWeb' }}>
          <Typography variant="body1" sx={{ color: '#e4e4e4', textAlign: 'center' }}>
            آیا مطمئن هستید که می‌خواهید از حساب کاربری خود خارج شوید؟
          </Typography>
        </DialogContent>
        <DialogActions sx={{ textAlign: 'center', padding: '16px 24px', gap: 2, justifyContent: 'center' }}>
          <Button
            onClick={handleCloseLogoutDialog}
            sx={{
              color: '#e4e4e4',
              fontFamily: 'IRANSansWeb',
              border: '1px solid #e4e4e4',
              padding: '8px 24px',
              borderRadius: '8px',
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