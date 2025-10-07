//ProfileInfoDisplay.tsx
import React from "react";
import Typography from "../../../global/atoms/Typography/TypographyAtom";
import ImageAtom from "../../atom/ImageAtom/ImageAtom";
import DisplayInfoCard from "../DisplayInfoCard/DisplayInfoCard";

interface ProfileInfoDisplayProps {
  userInfo: {
    fullname: string;
    email: string;
    phonenumber: string;
    username: string;
    subscription: string;
    subscription_expires_at: string;
    created_at: string;
    products: any[];
    collections: any[];
    files: any[];
  };
}

const ProfileInfoDisplay: React.FC<ProfileInfoDisplayProps> = ({ userInfo }) => {
  // محاسبه روزهای باقی‌مانده از اشتراک
  const calculateDaysRemaining = (expiryDate: string) => {
    if (!expiryDate) return 0;
    const expiry = new Date(expiryDate);
    const today = new Date();
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  // محاسبه مدت عضویت
  const calculateMembershipDuration = (createdAt: string) => {
    if (!createdAt) return "";
    const created = new Date(createdAt);
    const today = new Date();
    const diffTime = today.getTime() - created.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays < 30) return `${diffDays} روز عضویت`;
    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths < 12) return `${diffMonths} ماه عضویت`;
    const diffYears = Math.floor(diffMonths / 12);
    return `${diffYears} سال عضویت`;
  };

  const daysRemaining = calculateDaysRemaining(userInfo.subscription_expires_at);
  const membershipDuration = calculateMembershipDuration(userInfo.created_at);

  return (
    <div className="w-full max-w-[750px] bg-gradient-to-tr from-[#4D88FF]/20 to-[#4D88FF]/20 rounded-2xl p-4 sm:p-6 lg:p-10 flex flex-col justify-between min-h-[452px]">
      {/* بخش بالا */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
        {/* تصویر پروفایل و اطلاعات */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-[#BB19DF] to-[#1529E3] flex items-center justify-center">
            <ImageAtom
              src="/defultAvatar.png"
              alt="Profile"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full"
            />
          </div>
          <Typography sx={{ fontFamily: 'IRANSansWeb'}} variant="" className="text-white text-center sm:text-right">
            <div className="text-xl sm:text-2xl">
              {userInfo.fullname || "کاربر اکورا"}
            </div>
            <div className="mt-2 sm:mt-3 text-sm sm:text-[15px] opacity-35">
              {membershipDuration}
            </div>
          </Typography>
        </div>
        {/* وضعیت اشتراک */}
        <div className="w-full sm:w-[248px] px-4 py-3 rounded-2xl bg-gradient-to-r from-[#060B28]/94 to-[#0A0E23]/49 opacity-95">
          <Typography variant="body2" className="flex items-center gap-2 text-white justify-center sm:justify-start">
            <ImageAtom alt="Vector" src="/vector.png" className="w-8 h-8 sm:w-10 sm:h-10" />
            اشتراک {userInfo.subscription || "رایگان"}
          </Typography>
          <Typography variant="caption" className="text-gray-300 block text-center sm:text-right mt-2 px-3">
            {daysRemaining > 0 ? `${daysRemaining} روز باقی مانده` : "اشتراک فعال نیست"}
          </Typography>
        </div>
      </div>

      {/* بخش پایین - کارت‌های اطلاعات */}
      <div className="flex-1 mt-6">
        {/* استفاده از grid برای ریسپانسیو عالی */}
        <div className="grid  xl:grid-cols-3 gap-8 mt-5 place-items-center xl:place-items-stretch">
          {/* خریدهای من */}
          <DisplayInfoCard
            title="خریدهای من"
            description="تمامی زمان‌ها"
            secenddescription={userInfo.products.length > 0 ? "" : "فایلی خریداری نشده ...."}
          >
            <div className="flex flex-row items-center justify-center">
              <img src="/historyProfileImage.png" alt="sample" className="w-[102px] h-[102px]" />
            </div>
          </DisplayInfoCard>

          {/* آثار من */}
          <DisplayInfoCard
            title="آثار من"
            description="از تمامی پروژه‌ها"
            secenddescription=""
          >
            <div className="flex flex-col items-start gap-3">
              <div className="rounded-full w-[90px] h-[38px] bg-gradient-to-r flex items-center from-[#FF7344] to-[#35115F]">
                <div className="bg-[#8b4129] w-[26px] flex items-center justify-center h-[26px] mr-2 rounded-full">
                  <img src="/headphone.png" alt="" />
                </div>
                <p className="font-IRANSansWeb text-[12px] mr-2">{userInfo.files.length} ترک</p>
              </div>
              <div className="rounded-full w-[90px] flex items-center h-[38px] bg-gradient-to-r from-[#B020D5]/13 to-[#B020D5]">
                <div className="bg-[#630c79] w-[26px] flex items-center justify-center h-[26px] mr-2 rounded-full">
                  <img src="/musicIcon.png" alt="" />
                </div>
                <p className="font-IRANSansWeb text-[12px] mr-2">{userInfo.collections.length} بیت</p>
              </div>
              <div className="rounded-full w-[90px] flex items-center h-[38px] bg-gradient-to-r from-[#4D88FF]/45 to-[#887755]">
                <div className="bg-[#163470] w-[26px] flex items-center justify-center h-[26px] mr-2 rounded-full">
                  <img src="/volume-1 1.png" alt="" />
                </div>
                <p className="font-IRANSansWeb text-[12px] mr-2">10 سمپل</p>
              </div>
            </div>
          </DisplayInfoCard>

          {/* درصد رضایت آثار من */}
          <DisplayInfoCard
            title="درصد رضایت آثار من"
            description="بر اساس لایک‌ها"
            secenddescription=""
          >
            <div className="w-[102px] h-[102px]" />
          </DisplayInfoCard>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoDisplay;