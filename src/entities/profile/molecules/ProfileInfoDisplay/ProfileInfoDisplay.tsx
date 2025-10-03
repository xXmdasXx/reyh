// src/entities/profile/molecules/ProfileInfoDisplay/ProfileInfoDisplay.tsx
import React from "react";
import Typography from "../../../global/atoms/Typography/TypographyAtom";
import ImageAtom from "../../atom/ImageAtom/ImageAtom";
import DisplayInfoCard from "../DisplayInfoCard/DisplayInfoCard";


interface ProfileInfoDisplayProps {
  userInfo: {
    name: string;
    email: string;
    phone: string;
    password: string;
  };
}

const ProfileInfoDisplay: React.FC<ProfileInfoDisplayProps> = ({ userInfo }) => {
  return (
    <div className="h-[452px] w-[750px] bg-gradient-to-tr from-[#4D88FF]/20 to-[#4D88FF]/20 rounded-2xl p-10 flex flex-col justify-between">
      
      {/* بخش بالا */}
      <div className="flex items-center justify-between">
        {/* تصویر پروفایل */}
        <div className="flex items-center gap-4">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#BB19DF] to-[#1529E3] flex items-center justify-center">
            <ImageAtom
              src="/defultAvatar.png"
              alt="Profile"
              className="w-24 h-24 rounded-full"
            />
          </div>
          <Typography sx={{ fontFamily: 'IRANSansWeb'}} variant="" className="text-white ">
            <div className="text-2xl">
              شادی قدمیاری
            </div>
            
            
            <div className="mt-3 text-[15px] opacity-35">
               عضویت از چهار سال پیش
            </div>
            {userInfo.name}
            
            
           
          </Typography>
        </div>

        {/* وضعیت اشتراک */}
        <div className="w-[248px] px-2 py-3 rounded-2xl bg-gradient-to-r from-[#060B28]/94 to-[#0A0E23]/49 opacity-95">
          <Typography variant="body2" className="  flex items-center gap-2 text-white">
            <ImageAtom alt="Vector" src="/vector.png" className=" w-10 h-10 " />
            اشتراک اکسکلوسیو
          </Typography>
          <Typography variant="caption" className="text-gray-300 p-3 ">
            ۱۸ روز باقی مانده
          </Typography>
        </div>
      </div>

      {/* بخش پایین (فعلاً خالی) */}
      <div className="flex-1 mt-6">
        {/* اینجا بعداً محتوا اضافه میشه */}
        <div className=" flex gap-[32px] mt-[1.25rem]">
          <DisplayInfoCard
            title=" خرید های من "
            description=" تمامی زمان ها "
            secenddescription = "فایلی خریداری نشده ...."
          >
            <div className="flex flex-row items-center justify-center">
              <img src="/historyProfileImage.png" alt="sample" className=" w-[102px] h-[102px]" />
            </div>
            {/* هر چیزی خواستی می‌تونی اینجا بذاری */}
            
           
          </DisplayInfoCard>
           <DisplayInfoCard
            title=" اثر های من"
            description="از تمامی پروژه ها"
            secenddescription = ""
          >
            {/* هر چیزی خواستی می‌تونی اینجا بذاری */}
            <div className=" flex flex-col items-start gap-3">
              <div className="rounded-full w-[90px] h-[38px] bg-gradient-to-r flex items-center  from-[#FF7344] to-[#35115F]">
                <div className="bg-[#8b4129] w-[26px] flex items-center justify-center h-[26px] mr-2 rounded-full ">
                  <img src="/headphone.png" alt="" />
                </div>
                
                 <p className="font-IRANSansWeb text-[12px] mr-2">39 ترک</p> 
                
                
              </div>

              <div className="rounded-full w-[90px] flex items-center h-[38px] bg-gradient-to-r from-[#B020D5]/13 to-[#B020D5]">
                <div className="bg-[#630c79] w-[26px] flex items-center justify-center h-[26px]  mr-2 rounded-full ">
                  <img src="/musicIcon.png" alt="" />
                </div>
                <p className="font-IRANSansWeb text-[12px] mr-2"> 29 بیت</p> 
                
              </div>
              <div className="rounded-full w-[90px] flex items-center h-[38px] bg-gradient-to-r from-[#4D88FF]/45 to-[#887755]">
                <div className="bg-[#163470] w-[26px] flex items-center justify-center h-[26px]  mr-2 rounded-full ">
                  <img src="/volume-1 1.png" alt="" />
                </div>
                <p className="font-IRANSansWeb text-[12px] mr-2"> 10 سمپل</p> 
                
              </div>
              
              
                  
                
                
              
            </div>
            
              
            
           
          </DisplayInfoCard>
           <DisplayInfoCard
            title=" درصد رضایت آثار من"
            description="بر اساس لایک ها"
            secenddescription = ""
          >
            {/* هر چیزی خواستی می‌تونی اینجا بذاری */}
            <div className="w-[102px] h-[102px] " ></div>

           
          </DisplayInfoCard>

          

        </div>
      </div>
    </div>
  );
};

export default ProfileInfoDisplay;