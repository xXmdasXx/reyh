// layout.tsx
'use client'
import React, { useState } from 'react';
import Sidebar from '@/entities/profile/organisms/SidebarNavigation/Sidebar';
import MegaBlob from '@/entities/profile/molecules/dashBG/dashboardBG'; // مسیر فایل bg

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activePage, setActivePage] = useState("profile");

  return (
    <div className="flex h-screen bg-[#040317] text-white relative">
      {/* پس‌زمینه */}
      <div className="">
        <MegaBlob />
      </div>
      
      {/* سایدبار */}
      <div className="relative z-10">
        <Sidebar activePage={activePage} onNavigate={setActivePage} />
      </div>
      
      {/* محتوای اصلی */}
      <main className="flex-1 p-4 overflow-auto relative z-10">
        {children}
      </main>
    </div>
  );
}