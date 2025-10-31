import React from "react";
import Typography from "../../../global/atoms/Typography/TypographyAtom";
import ImageAtom from "../../atoms/ImageAtom/ImageAtom";
import DisplayInfoCard from "../DisplayInfoCard/DisplayInfoCard";
import SatisfactionRating from "../SatisfactionRating/SatisfactionRating";

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
  const calculateDaysRemaining = (expiryDate: string) => {
    if (!expiryDate) return 0;
    const expiry = new Date(expiryDate);
    const today = new Date();
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

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
    <div className="w-full max-w-full md:max-w-[680px] lg:max-w-[900px] xl:max-w-full xl:h-auto bg-gradient-to-tr from-[#4D88FF73]/48 to-transparent rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col justify-between  mx-auto">
      
      {/* بخش بالا */}
      <div className="flex flex-col md:flex-row xl:flex-row items-center md:items-start xl:items-center justify-between gap-4">
        {/* تصویر پروفایل و اطلاعات */}
        <div className="flex flex-row md:flex-row xl:flex-row items-center md:items-start xl:items-center gap-4 w-full md:w-auto xl:w-full justify-start md:justify-start xl:justify-start md:text-right md:pr-4 xl:pr-0 xl:text-center">
          <div className="w-[95px] h-[95px] rounded-full  flex items-center justify-center">
            <ImageAtom
              src="/defultAvatar.svg"
              alt="Profile"
              className="w-[95px] h-[95px] rounded-full"
            />
          </div>

          <Typography
            component="div"
            sx={{ fontFamily: 'IRANSansWeb' }}
            className="text-white text-right xl:text-center flex-1 md:flex-none"
          >
            <div className="text-[16px] md:text-[18px] lg:text-2xl xl:text-2xl">
              {userInfo.fullname || "کاربر اکورا"}
            </div>
            <div className="mt-1 md:mt-2 lg:mt-3 xl:mt-4 text-[12px] md:text-[13px] lg:text-[15px] opacity-35">
              {membershipDuration}
            </div>
          </Typography>
        </div>

        {/* وضعیت اشتراک */}
        <div className="w-full md:w-[300px] lg:w-[350px] xl:w-[500px] px-4 py-3 rounded-2xl bg-gradient-to-r from-[#060B28]/94 to-[#0A0E23]/49 opacity-95">
          <Typography
            variant="body2"
            className="flex items-center gap-2 text-white justify-start xl:justify-start"
          >
            <ImageAtom alt="Vector" src="/Vector.svg" className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" />
            اشتراک {userInfo.subscription || "رایگان"}
          </Typography>
          <Typography
            variant="caption"
            className="text-gray-300 block text-right xl:text-start mt-2 px-3"
          >
            {daysRemaining > 0 ? `${daysRemaining} روز باقی مانده` : "اشتراک فعال نیست"}
          </Typography>
        </div>
      </div>

      {/* بخش پایین - کارت‌های اطلاعات */}
      <div className="flex-1 mt-3 ">
        <div className="grid  grid-cols-1 md:mt-10 md:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-3 gap-4 md:gap-6 xl:gap-4 2xl:gap-6 place-items-center md:place-items-stretch xl:place-items-center 2xl:place-items-stretch w-full">
          
          {/* خریدهای من */}
          <DisplayInfoCard
            title="خریدهای من"
            description="تمامی خرید ها"
            secenddescription={userInfo.products.length > 0 ? "" : "فایلی خریداری نشده ...."}
          >
            <div className="flex flex-row items-center justify-center w-full">
              <img
                src="/historyProfileImage.svg"
                alt="sample"
                className="w-[136px] h-[136px] md:w-[110px] md:h-[110px] lg:w-[102px] lg:h-[102px] xl:w-[120px] xl:h-[120px] 2xl:w-[102px] 2xl:h-[102px]"
              />
            </div>
          </DisplayInfoCard>

          {/* آثار من */}
          <DisplayInfoCard title="آثار من" description="از تمامی پروژه‌ها">
            <div className="flex flex-col items-center gap-3 w-full xl:items-center 2xl:items-center ">
              <div className="rounded-full w-full max-w-[143px] md:max-w-[130px] lg:max-w-[120px] xl:max-w-[140px] 2xl:max-w-[120px] h-[51px] md:h-[42px] lg:h-[38px] xl:h-[42px] 2xl:h-[38px] bg-gradient-to-r flex items-center justify-start from-[#ff734486] to-[#35115f81] pl-2">
                <div className="bg-[#8b41299c] w-[32px] h-[32px] md:w-[28px] md:h-[28px] flex items-center justify-center mr-2 rounded-full">
                  <img src="/headphone.svg" alt="" className="w-[17px] h-[15px] md:w-[15px] md:h-[13px]" />
                </div>
                <p className="font-IRANSansWeb text-[14px] md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[12px] mr-2">
                  {userInfo.files.length} ترک
                </p>
              </div>

              <div className="rounded-full w-full max-w-[143px] md:max-w-[130px] lg:max-w-[120px] xl:max-w-[140px] 2xl:max-w-[120px] h-[51px] md:h-[42px] lg:h-[38px] xl:h-[42px] 2xl:h-[38px] flex items-center justify-start bg-gradient-to-r from-[#b120d51f] to-[#b120d585] pl-2">
                <div className="bg-[#780e928c] w-[32px] h-[32px] md:w-[28px] md:h-[28px] flex items-center justify-center mr-2 rounded-full">
                  <img src="/musicIcon.svg" alt="" className="w-[17px] h-[17px] md:w-[15px] md:h-[15px]" />
                </div>
                <p className="font-IRANSansWeb text-[14px] md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[12px] mr-2">
                  {userInfo.collections.length} بیت
                </p>
              </div>

              <div className="rounded-full w-full max-w-[143px] md:max-w-[130px] lg:max-w-[120px] xl:max-w-[140px] 2xl:max-w-[120px] h-[51px] md:h-[42px] lg:h-[38px] xl:h-[42px] 2xl:h-[38px] flex items-center justify-start bg-gradient-to-r from-[#4d88ff5d] to-[#c4a4645b] pl-2">
                <div className="bg-[#16347079] w-[32px] h-[32px] md:w-[28px] md:h-[28px] flex items-center justify-center mr-2 rounded-full">
                  <img src="/volume-1 1.svg" alt="" className="w-[17px] h-[17px] md:w-[15px] md:h-[15px]" />
                </div>
                <p className="font-IRANSansWeb text-[14px] md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[12px] mr-2">10 سمپل</p>
              </div>
            </div>
          </DisplayInfoCard>

          {/* درصد رضایت آثار من */}
          <DisplayInfoCard
            title="درصد رضایت آثار من"
            description="بر اساس لایک‌ها"
            
          >
            <div className="flex p-2 h-[140px] justify-center w-full min-h-[120px]">
              <SatisfactionRating percentage={95} />
            </div>
          </DisplayInfoCard>

        </div>
      </div>
    </div>
  );
};

export default ProfileInfoDisplay;