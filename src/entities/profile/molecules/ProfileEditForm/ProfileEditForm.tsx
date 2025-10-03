// src/entities/profile/molecules/ProfileEditForm/ProfileEditForm.tsx
import React, { useState } from "react";
import Typography from "../../../global/atoms/Typography/TypographyAtom";
import TextInput from "../../../global/atoms/Input/TextInput";
import PrimaryButton from "../../../global/atoms/Button/PrimaryButton";

interface ProfileEditFormProps {
  userInfo: {
    name: string;
    email: string;
    phone: string;
    password: string;
    username?: string;
  };
  onUpdateInfo: (newInfo: any) => void;
  loading?: boolean;
}

const ProfileEditForm: React.FC<ProfileEditFormProps> = ({ 
  userInfo, 
  onUpdateInfo,
  loading = false 
}) => {
  const [formData, setFormData] = useState({
    name: userInfo.name,
    email: userInfo.email,
    phone: userInfo.phone,
    username: userInfo.username || "",
    bio: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));

    // پاک کردن خطا هنگام تایپ
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  // تابع اعتبارسنجی ایمیل
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // تابع اعتبارسنجی شماره تلفن
  const isValidPhone = (phone: string) => {
    const phoneRegex = /^09\d{9}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      username: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    };
    let hasError = false;

    // بررسی نام
    if (formData.name.trim() && formData.name.trim().length < 3) {
      newErrors.name = "نام باید حداقل ۳ کاراکتر باشد";
      hasError = true;
    }

    // بررسی ایمیل
    if (formData.email.trim() && !isValidEmail(formData.email.trim())) {
      newErrors.email = "فرمت ایمیل صحیح نیست";
      hasError = true;
    }

    // بررسی شماره تلفن
    if (formData.phone.trim() && !isValidPhone(formData.phone.trim())) {
      newErrors.phone = "شماره تلفن باید با 09 شروع شود و 11 رقم باشد";
      hasError = true;
    }

    // بررسی رمز عبور جدید
    if (formData.newPassword) {
      if (!formData.currentPassword) {
        newErrors.currentPassword = "رمز عبور فعلی الزامی است";
        hasError = true;
      }

      if (formData.newPassword.length < 6) {
        newErrors.newPassword = "رمز عبور جدید باید حداقل ۶ کاراکتر باشد";
        hasError = true;
      }

      if (formData.newPassword !== formData.confirmPassword) {
        newErrors.confirmPassword = "رمز عبور جدید و تکرار آن یکسان نیستند";
        hasError = true;
      }
    }

    setErrors(newErrors);
    return !hasError;
  };

  const handleSubmit = () => {
    // اعتبارسنجی فرم
    if (!validateForm()) {
      return;
    }

    // آماده‌سازی داده‌ها برای ارسال
    const updateData: any = {};

    if (formData.name.trim() !== userInfo.name) {
      updateData.name = formData.name.trim();
    }

    if (formData.email.trim() !== userInfo.email) {
      updateData.email = formData.email.trim();
    }

    if (formData.phone.trim() !== userInfo.phone) {
      updateData.phone = formData.phone.trim();
    }

    if (formData.username.trim() !== userInfo.username) {
      updateData.username = formData.username.trim();
    }

    if (formData.bio.trim()) {
      updateData.bio = formData.bio.trim();
    }

    // اگر رمز عبور جدید وارد شده
    if (formData.newPassword) {
      updateData.current_password = formData.currentPassword;
      updateData.new_password = formData.newPassword;
    }

    // ارسال به والد
    onUpdateInfo(updateData);
  };

  const gradientInputClass =
    "!bg-gradient-to-br !from-[#B020D5] from-0% !to-[#4D88FF] to-100% !text-white !opacity-40 ";

  return (
    <div className="">
      <div className="flex flex-col gap-4 ">
        {/* تیتر */}
        <Typography variant="h6" className="text-white font-bold mb-4 text-right">
          تغییر اطلاعات
        </Typography>

        {/* فرم ویرایش */}
        <div className="flex flex-row gap-8 flex-1">
          <div className="w-1/2 space-y-7 ">
            <div>
              <Typography variant="body2" className="text-gray-400 mb-3 text-right">
                نام و نام خانوادگی
              </Typography>
              <TextInput
                InputProps={{
                  className: gradientInputClass,
                }}
                placeholder="نام خود را وارد کنید"
                label=""
                icon=""
                value={formData.name}
                onChange={handleInputChange('name')}
                error={!!errors.name}
                helperText={errors.name}
                fullWidth
              />
            </div>

            <div>
              <Typography variant="body2" className="text-gray-400 mb-2 text-right">
                شماره تماس
              </Typography>
              <TextInput
                InputProps={{
                  className: gradientInputClass,
                }}
                placeholder="09123456789"
                label=""
                value={formData.phone}
                onChange={handleInputChange("phone")}
                error={!!errors.phone}
                helperText={errors.phone}
                fullWidth
              />
            </div>

            <div>
              <Typography variant="body2" className="text-gray-400 mb-2 text-right">
                رمز عبور قبلی
              </Typography>
              <TextInput
                InputProps={{
                  className: gradientInputClass,
                }}
                placeholder="رمز عبور فعلی خود را وارد کنید"
                label=""
                icon="lock"
                type="password"
                value={formData.currentPassword}
                onChange={handleInputChange("currentPassword")}
                error={!!errors.currentPassword}
                helperText={errors.currentPassword}
                fullWidth
              />
            </div>
          </div>

          <div className=" space-y-7 w-1/2">
            <div>
              <Typography variant="body2" className="text-gray-400 mb-2 text-right">
                نام کاربری
              </Typography>
              <TextInput
                InputProps={{
                  className: gradientInputClass,
                }}
                placeholder="ali_ahmadi"
                label=""
                value={formData.username}
                onChange={handleInputChange("username")}
                error={!!errors.username}
                helperText={errors.username}
                fullWidth
              />
            </div>

            <div>
              <Typography variant="body2" className="text-gray-400 mb-3 text-right">
                ایمیل
              </Typography>
              <TextInput
                InputProps={{
                  className: gradientInputClass,
                }}
                placeholder="example@gmail.com"
                label=""
                icon=""
                type="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                error={!!errors.email}
                helperText={errors.email}
                fullWidth
              />
            </div>

            <div className="">
              <Typography variant="body2" className="text-gray-400 mb-3 text-right">
                رمز عبور جدید
              </Typography>
              <TextInput
                InputProps={{
                  className: gradientInputClass,
                }}
                placeholder="رمز عبور جدید خود را وارد کنید"
                label=""
                id="password"
                icon="lock"
                type="password"
                value={formData.newPassword}
                onChange={handleInputChange('newPassword')}
                error={!!errors.newPassword}
                helperText={errors.newPassword}
                fullWidth
              />
            </div>
          </div>
        </div>

        <div className="space-y-7">
          <Typography variant="body2" className="text-gray-400 mb-3 text-right">
            درباره من
          </Typography>
          <TextInput
            InputProps={{
              className: gradientInputClass,
            }}
            placeholder="چند جمله درباره خودتان بنویسید..."
            multiline
            rows={2}
            label=""
            icon=""
            type=""
            value={formData.bio}
            onChange={handleInputChange('bio')}
            sx={{
              '& .MuiInputBase-root': {
                height: 150,
                alignItems: 'flex-start',
              },
            }}
            fullWidth
          />
        </div>

        {/* دکمه ذخیره */}
        <div className="mt-4">
          <PrimaryButton
            onClick={handleSubmit}
            disabled={loading}
            className="!w-full"
            sx={{ mt: 0 }}
          >
            {loading ? 'در حال ذخیره...' : 'ذخیره تغییرات'}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditForm;