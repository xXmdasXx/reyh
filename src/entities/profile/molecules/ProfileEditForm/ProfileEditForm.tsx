// src/entities/profile/molecules/ProfileEditForm/ProfileEditForm.tsx
import React, { useState, useEffect } from "react";
import Typography from "../../../global/atoms/Typography/TypographyAtom";
import TextInput from "../../../global/atoms/Input/TextInput";
import PrimaryButton from "../../../global/atoms/Button/PrimaryButton";

interface ProfileEditFormProps {
  userInfo: {
    fullname: string;
    email: string;
    phonenumber: string;
    username: string;
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
    fullname: "",
    email: "",
    phonenumber: "",
    username: "",
    bio: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    username: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  // پر کردن فیلدها با اطلاعات واقعی کاربر
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      fullname: userInfo.fullname || "",
      email: userInfo.email || "",
      phonenumber: userInfo.phonenumber || "",
      username: userInfo.username || ""
    }));
  }, [userInfo]);

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));

    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone: string) => {
    const phoneRegex = /^09\d{9}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors = {
      fullname: "",
      email: "",
      phonenumber: "",
      username: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    };
    let hasError = false;

    if (formData.fullname.trim() && formData.fullname.trim().length < 3) {
      newErrors.fullname = "نام باید حداقل ۳ کاراکتر باشد";
      hasError = true;
    }

    if (formData.email.trim() && !isValidEmail(formData.email.trim())) {
      newErrors.email = "فرمت ایمیل صحیح نیست";
      hasError = true;
    }

    if (formData.phonenumber.trim() && !isValidPhone(formData.phonenumber.trim())) {
      newErrors.phonenumber = "شماره تلفن باید با 09 شروع شود و 11 رقم باشد";
      hasError = true;
    }

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
    if (!validateForm()) {
      return;
    }

    const updateData: any = {};

    if (formData.fullname.trim() !== userInfo.fullname) {
      updateData.fullname = formData.fullname.trim();
    }

    if (formData.email.trim() !== userInfo.email) {
      updateData.email = formData.email.trim();
    }

    if (formData.phonenumber.trim() !== userInfo.phonenumber) {
      updateData.phonenumber = formData.phonenumber.trim();
    }

    if (formData.username.trim() !== userInfo.username) {
      updateData.username = formData.username.trim();
    }

    if (formData.bio.trim()) {
      updateData.bio = formData.bio.trim();
    }

    if (formData.newPassword) {
      updateData.current_password = formData.currentPassword;
      updateData.new_password = formData.newPassword;
    }

    onUpdateInfo(updateData);
  };

const gradientInputClass =
  "!bg-gradient-to-br !from-[#B020D5]/40 from-0% !to-[#4D88FF]/40 to-100% !text-white !placeholder-white/70";




  return (
    <div className="w-full">
      <div className="flex flex-col gap-4">
        <Typography variant="h6" className="text-white font-bold mb-2 sm:mb-4 text-center lg:text-right">
          تغییر اطلاعات
        </Typography>

        {/* فرم ویرایش - ریسپانسیو */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* ستون اول */}
          <div className="w-full lg:w-1/2 space-y-4 lg:space-y-7">
            <div>
              <Typography variant="body2" className="!opacity-80 text-[#ffffff] mb-2 lg:mb-3 text-right">
                نام و نام خانوادگی
              </Typography>
              <TextInput
              
                InputProps={{
                  className: gradientInputClass,
                }}
                placeholder="نام خود را وارد کنید"
                label=""
                icon=""
                value={formData.fullname}
                onChange={handleInputChange('fullname')}
                error={!!errors.fullname}
                helperText={errors.fullname}
                fullWidth
              />
            </div>

            <div>
              <Typography variant="body2" className="text-[#ffffff] mb-2 text-right">
                شماره تماس
              </Typography>
              <TextInput
                InputProps={{
                  className: gradientInputClass,
                }}
                placeholder="شماره خود را وارد کنید "
                label=""
                value={formData.phonenumber}
                onChange={handleInputChange("phonenumber")}
                error={!!errors.phonenumber}
                helperText={errors.phonenumber}
                fullWidth
              />
            </div>

            <div>
              <Typography variant="body2" className="text-[#ffffff] mb-2 text-right">
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

          {/* ستون دوم */}
          <div className="w-full lg:w-1/2 space-y-4 lg:space-y-7">
            <div>
              <Typography variant="body2" className="text-[#ffffff] mb-2 text-right">
                نام کاربری
              </Typography>
              <TextInput
                InputProps={{
                  className: gradientInputClass,
                }}
                placeholder="نام کاربری خود را وارد کنید "
                label=""
                value={formData.username}
                onChange={handleInputChange("username")}
                error={!!errors.username}
                helperText={errors.username}
                fullWidth
              />
            </div>

            <div>
              <Typography variant="body2" className="text-[#ffffff] mb-2 lg:mb-3 text-right">
                ایمیل
              </Typography>
              <TextInput
                InputProps={{
                  className: gradientInputClass,
                }}
                placeholder="ایمیل خود را وارد کنید "
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

            <div>
              <Typography variant="body2" className="text-[#ffffff] mb-2 lg:mb-3 text-right">
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

        {/* درباره من */}
        <div className="space-y-2 lg:space-y-4 mt-4">
          <Typography variant="body2" className="text-[#ffffff] mb-2 lg:mb-3 text-right">
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
                height: 120,
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