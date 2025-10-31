'use client'
import React, { useState } from 'react';
import Sidebar from '@/entities/profile/organisms/SidebarNavigation/Sidebar';
import MegaBlob from '@/entities/profile/molecules/dashBG/dashboardBG';
import MobileNavbar from '@/entities/profile/molecules/MobileNavbar/MobileNavbar';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activePage, setActivePage] = useState("purchases");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#040317] text-white relative overflow-hidden">
      {/* پس‌زمینه */}
      <div className="absolute inset-0 z-0">
        <MegaBlob />
      </div>
      
      
      {/* هدر موبایل و تبلت */}
      <MobileNavbar 
        onMenuClick={() => setIsSidebarOpen((prev) => !prev)}
        isOpen={isSidebarOpen}
        title="اکورا"
      />

      {/* اوورلی موبایل و تبلت */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 z-20 bg-black/80"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* سایدبار */}
      <div
        className={
          
          `z-30 lg:relative lg:z-10 ` +
          `lg:translate-x-0 lg:static fixed top-0 right-0 h-full ` +
          `transform transition-transform duration-300 ` +
          `${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} ` +
          `lg:translate-x-0`
        }
      >
        <Sidebar 
          activePage={activePage} 
          onNavigate={(key) => { 
            setActivePage(key); 
            setIsSidebarOpen(false); 
          }} 
        />
      </div>
      
      {/* محتوای اصلی */}
      <main className="flex-1 p-4 overflow-auto relative z-10 pt-16 lg:pt-0">
        {children}
      </main>
    </div>
  );
}