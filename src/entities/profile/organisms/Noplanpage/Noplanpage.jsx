// entries/profile/organisms/ProfilePage.jsx
"use client";

import Sidebar from "../SidebarNavigation/Sidebar";
import Typography from "../../../global/atoms/Typography/TypographyAtom"; 
import Link from "../../../global/atoms/Link/TextLink";
import { useState } from "react";

const ProfilePage = () => {


  return (
    <div className="flex h-screen bg-black text-white">
    
      
      {/* محتوای اصلی */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <Typography sx={{ fontFamily: 'IRANSansWeb'}} variant="body" f className="  mb-4">
            لطفا برای دسترسی به این بخش ابتدا اشتراک تهیه کنید.
          </Typography>
          <Link href="/subscription" className="text-blue-400">
            « خرید اشتراک »
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;