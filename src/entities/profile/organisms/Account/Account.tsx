// src/entities/profile/organisms/Account/Account.tsx
'use client'
import React, { useState, useEffect } from "react";
import Typography from "../../../global/atoms/Typography/TypographyAtom";
import ProfileInfoDisplay from "../../molecules/ProfileInfoDisplay/ProfileInfoDisplay";
import ProfileEditForm from "../../molecules/ProfileEditForm/ProfileEditForm";
import { api } from "@/lib/Axios";
import SnackbarAtom from "@/entities/global/atoms/Snackbar/SnackbarAtom";

const Account: React.FC = () => {
  const [userInfo, setUserInfo] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    username: "",
    subscription: "",
    subscription_expires_at: "",
    created_at: "",
    products: [],
    collections: [],
    files: []
  });

  const [loading, setLoading] = useState(true);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"error" | "success">("error");

  // دریافت اطلاعات کاربر هنگام بارگذاری صفحه
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          window.location.href = '/login';
          return;
        }

        // درخواست GET به /account با Bearer Token
        const response = await api.get('account', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.data) {
          setUserInfo({
            fullname: response.data.fullname || "",
            email: response.data.email || "",
            phonenumber: response.data.phonenumber || "",
            username: response.data.username || "",
            subscription: response.data.subscription || "Free",
            subscription_expires_at: response.data.subscription_expires_at || "",
            created_at: response.data.created_at || "",
            products: response.data.products || [],
            collections: response.data.collections || [],
            files: response.data.files || []
          });
        }
      } catch (error: any) {
        console.error("Failed to fetch user data:", error);
        setSnackbarSeverity("error");
        setSnackbarMessage("خطا در دریافت اطلاعات کاربر");
        setShowSnackbar(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleUpdateInfo = async (newInfo: any) => {
    setUpdateLoading(true);
    setShowSnackbar(false);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setSnackbarSeverity("error");
        setSnackbarMessage("لطفا ابتدا وارد شوید");
        setShowSnackbar(true);
        return;
      }

      // ارسال درخواست PUT به /update_user با Bearer Token
      const response = await api.put('update_user', newInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      console.log("Update success:", response.data);

      // به‌روزرسانی state با داده‌های جدید
      setUserInfo(prev => ({ 
        ...prev, 
        fullname: newInfo.fullname || prev.fullname,
        email: newInfo.email || prev.email,
        phonenumber: newInfo.phonenumber || prev.phonenumber,
        username: newInfo.username || prev.username
      }));

      // نمایش پیام موفقیت
      setSnackbarSeverity("success");
      setSnackbarMessage("اطلاعات با موفقیت به‌روزرسانی شد");
      setShowSnackbar(true);

    } catch (error: any) {
      console.error("Update failed:", error.response?.data);

      setSnackbarSeverity("error");
      
      // نمایش خطای دقیق بک‌اند
      if (error.response?.data?.detail) {
        if (typeof error.response.data.detail === 'string') {
          setSnackbarMessage(error.response.data.detail);
        } else if (Array.isArray(error.response.data.detail)) {
          const errorMessages = error.response.data.detail
            .map((err: any) => err.msg)
            .join(' - ');
          setSnackbarMessage(errorMessages);
        } else {
          setSnackbarMessage("خطا در به‌روزرسانی اطلاعات");
        }
      } else if (error.response?.data?.message) {
        setSnackbarMessage(error.response.data.message);
      } else if (error.message) {
        setSnackbarMessage("خطا در برقراری ارتباط با سرور");
      } else {
        setSnackbarMessage("خطای نامشخص رخ داده است");
      }

      setShowSnackbar(true);
    } finally {
      setUpdateLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-white">در حال بارگذاری اطلاعات...</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-8 lg:p-12 flex flex-col gap-6 lg:gap-10">
      {/* تیتر بالای صفحه */}
      <Typography variant="h4" className="font-bold text-white text-center lg:text-right">
        اطلاعات کاربری
      </Typography>

      {/* محتوای اصلی - ریسپانسیو */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* بخش راست - نمایش اطلاعات */}
        <div className="w-full lg:w-1/2">
          <ProfileInfoDisplay userInfo={userInfo} />
        </div>

        {/* بخش چپ - فرم تغییرات */}
        <div className="w-full lg:w-1/2">
          <ProfileEditForm 
            userInfo={userInfo} 
            onUpdateInfo={handleUpdateInfo}
            loading={updateLoading}
          />
        </div>
      </div>

      {/* Snackbar */}
      <SnackbarAtom
        open={showSnackbar}
        message={snackbarMessage}
        severity={snackbarSeverity}
        onClose={handleCloseSnackbar}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </div>
  );
};

export default Account;