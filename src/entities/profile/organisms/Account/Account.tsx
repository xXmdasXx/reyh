// src/entities/profile/organisms/account/Account.tsx
'use client'
import React, { useState, useEffect } from "react";
import Typography from "../../../global/atoms/Typography/TypographyAtom";
import ProfileInfoDisplay from "../../molecules/ProfileInfoDisplay/ProfileInfoDisplay";
import ProfileEditForm from "../../molecules/ProfileEditForm/ProfileEditForm";
import { api } from "@/lib/Axios";
import { Alert } from "@mui/material";

const Account: React.FC = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    username: ""
  });

  const [loading, setLoading] = useState(true);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState<"error" | "success">("error");

  // دریافت اطلاعات کاربر هنگام بارگذاری صفحه
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;

        // فرض می‌کنیم endpoint برای دریافت اطلاعات کاربر /user یا /me است
        const response = await api.get('me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.data) {
          setUserInfo({
            name: response.data.name || "",
            email: response.data.email || "",
            phone: response.data.phone || "",
            password: "********", // رمز عبور را نمایش نمی‌دهیم
            username: response.data.username || ""
          });
        }
      } catch (error: any) {
        console.error("Failed to fetch user data:", error);
        setAlertSeverity("error");
        setAlertMessage("خطا در دریافت اطلاعات کاربر");
        setShowAlert(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleUpdateInfo = async (newInfo: any) => {
    setUpdateLoading(true);
    setShowAlert(false);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setAlertSeverity("error");
        setAlertMessage("لطفا ابتدا وارد شوید");
        setShowAlert(true);
        return;
      }

      // ارسال درخواست به /update_user
      const response = await api.put('update_user', newInfo, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log("Update success:", response.data);

      // به‌روزرسانی state
      setUserInfo(prev => ({ ...prev, ...newInfo }));

      // نمایش پیام موفقیت
      setAlertSeverity("success");
      setAlertMessage("اطلاعات با موفقیت به‌روزرسانی شد");
      setShowAlert(true);

      // پنهان کردن پیام بعد از 3 ثانیه
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);

    } catch (error: any) {
      console.error("Update failed:", error.response?.data);

      setAlertSeverity("error");
      
      // نمایش خطای دقیق بک‌اند
      if (error.response?.data?.detail) {
        if (typeof error.response.data.detail === 'string') {
          setAlertMessage(error.response.data.detail);
        } else if (Array.isArray(error.response.data.detail)) {
          const errorMessages = error.response.data.detail
            .map((err: any) => err.msg)
            .join(' - ');
          setAlertMessage(errorMessages);
        } else {
          setAlertMessage("خطا در به‌روزرسانی اطلاعات");
        }
      } else if (error.response?.data?.message) {
        setAlertMessage(error.response.data.message);
      } else if (error.message) {
        setAlertMessage("خطا در برقراری ارتباط با سرور");
      } else {
        setAlertMessage("خطای نامشخص رخ داده است");
      }

      setShowAlert(true);
    } finally {
      setUpdateLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-white">در حال بارگذاری اطلاعات...</p>
      </div>
    );
  }

  return (
    <div className="p-12 flex flex-col gap-10">
      {/* تیتر بالای صفحه */}
      <Typography variant="h4" className="font-bold text-white">
        اطلاعات کاربری
      </Typography>

      {/* Alert برای نمایش پیام‌ها */}
      <Alert
        severity={alertSeverity}
        className={`!bg-gray-500/20 !rounded-xl !text-white !transition-opacity !duration-200 ${
          showAlert ? '!visible !opacity-100' : '!invisible !opacity-0'
        }`}
      >
        {alertMessage || ' '}
      </Alert>

      {/* محتوای اصلی - دو بخش نصف نصف */}
      <div className="flex gap-15 ">
        {/* بخش راست - نمایش اطلاعات */}
        <div className=" flex-1 w-1/2">
          <ProfileInfoDisplay userInfo={userInfo} />
        </div>

        {/* بخش چپ - فرم تغییرات */}
        <div className=" w-1/2 flex-1">
          <ProfileEditForm 
            userInfo={userInfo} 
            onUpdateInfo={handleUpdateInfo}
            loading={updateLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Account;