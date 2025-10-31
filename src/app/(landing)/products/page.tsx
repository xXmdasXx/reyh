"use client";

import React, { useState, useEffect } from "react";
import Typography from "@/entities/global/atoms/Typography/TypographyAtom";
import ProductActionButton from "@/entities/products/molecoles/ProductActionButton";
import SearchHeader from "@/entities/profile/molecules/SearchHeader/SearchHeader";
import PurchaseGrid from "@/entities/profile/molecules/PurchaseGrid/PurchaseGrid";
import ArtistCard from "@/entities/artists/molecules/ArtistCard";
import TextLink from "@/entities/global/atoms/Link/TextLink";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import TrackCard from "@/entities/products/molecoles/TrackCard";

function ProductsPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIstablet] = useState(false);
  const [isLg, setIslg] = useState(false);
  const [isXl, setIsxl] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      // Reset همه state ها
      setIsMobile(false);
      setIstablet(false);
      setIslg(false);
      setIsxl(false);
      
      // تشخیص سایز
      if (width < 768) {
        setIsMobile(true);
      } else if (width >= 768 && width < 1024) {
        setIstablet(true);
      } else if (width >= 1024 && width < 1280) {
        setIslg(true);
      } else if (width >= 1280) {
        setIsxl(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const popularTracks = [
    { title: "لورم ایپسوم", downloadCount: "1.2 هزار دانلود", duration: "2:06", isPremium: true ,},
    { title: "لورم ایپسوم", downloadCount: "850 دانلود", duration: "3:24", isPremium: false },
    { title: "لورم ایپسوم", downloadCount: "2.1 هزار دانلود", duration: "1:45", isPremium: true },
    { title: "لورم ایپسوم", downloadCount: "1.8 هزار دانلود", duration: "4:12", isPremium: false },
    { title: "لورم ایپسوم", downloadCount: "950 دانلود", duration: "2:33", isPremium: true },
    { title: "لورم ایپسوم", downloadCount: "1.5 هزار دانلود", duration: "3:15", isPremium: false },
  ];

  const popularCollections = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    title: "لورم ایپسوم",
    artist: "آرتیست",
  }));

  const popularArtists = [
    { id: "1", name: "لورم ایپسوم", role: "آرتیست", imageUrl: "/images/person-1.jpg" },
    { id: "2", name: "لورم ایپسوم", role: "آرتیست", imageUrl: "/images/person-2.jpg" },
    { id: "3", name: "لورم ایپسوم", role: "آرتیست", imageUrl: "/images/person-3.jpg" },
    { id: "4", name: "لورم ایپسوم", role: "آرتیست", imageUrl: "/images/person-4.jpg" },
  ]

  return (
    <div className=" w-full  ">
      {/* Hero Section */}
      <div className="min-w-[calc(100vw+40px)] bg-gradient-to-r from-[#35115F]/20 to-[#FF7344]/20 -mr-10 px-10">
        <div className="flex justify-between items-center px-5 ">
          <div className="information">
            <Typography variant="h4" className="font-bold text-white pt-5 pb-3 mb-6 text-base md:text-3xl" sx={{ fontFamily: 'IRANSansWeb' }}>
              جایی برای کشف
            </Typography>
            <Typography variant="h4" className="font-bold text-white mb-6 text-base md:text-3xl" sx={{ fontFamily: 'IRANSansWeb' }}>
              حرفه‌ای‌ترین بیت‌ها و سمپل‌ها
            </Typography>
            <Typography variant="body1" className="text-white pt-5" sx={{ fontFamily: 'IRANSansWeb' }}>
              بهترین و بااستعدادترین تولیدکنندگان بیت و سمپل اینجایند تا به پروژه‌ات قدرت تازه‌ای بدن.
            </Typography>
            <div className="mt-6 flex flex-row items-center gap-2 overflow-x-auto no-scrollbar pb-2 touch-pan-x select-none overscroll-contain">
              <ProductActionButton
                text="کالکشن"
                icon={<img src="/Vectornotebook.svg" alt="notebook" className="w-5 h-5 object-contain shrink-0" />}
                backgroundClassName="bg-gradient-to-r from-[#35115F] to-[#FF7344]"
                className="shrink-0"
              />
              <ProductActionButton
                text="ترک"
                icon={<img src="/headphonewhite.svg" alt="headphone" className="w-5 h-5 object-contain shrink-0" />}
                backgroundClassName="bg-gradient-to-r from-[#B020D5] to-[#582CFF]"
                className="shrink-0"
              />
              <ProductActionButton
                text="هنرمندان"
                icon={<img src="/Vectormembers.svg" alt="members" className="w-5 h-5 object-contain shrink-0" />}
                backgroundClassName="bg-gradient-to-r from-[#887755] to-[#4D88FF]"
                className="shrink-0"
              />
            </div>
            <div className="mt-4 w-full">
              <SearchHeader title="" placeholder="جستجو کنید ..." fullWidth />
            </div>
          </div>

          {/* لوگو فقط در دسکتاپ */}
          <div className="plp-logo hidden lg:flex justify-center lg:justify-start pl-45 ">
            <img
              src="/images/plp-logo.png"
              alt="PLP Logo"
              className="mt-6 mr-15 w-auto h-auto max-w-[280px] lg:max-w-[360px]"
            />
          </div>
        </div>
      </div>

      {/* Category & Filter */}
      
      <section className="flex flex-col  gap-4 w-full mt-10 px-5">
        <div className="flex flex-col gap-4 md:flex-col lg:flex-row ld:items-center lg:justify-between">
          {/* دسته‌بندی */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar  md:overflow-visible">
            <Typography variant="h6" className="text-white font-medium shrink-0 pl-5" sx={{ fontFamily: 'IRANSansWeb' }}>
            
              دسته بندی
            </Typography>
            <div className="flex gap-2">
              <div className="p-[2px] rounded-2xl shrink-0" style={{ background: 'linear-gradient(to right, #35115F, #FF7344)' }}>
                <ProductActionButton
                  text="کالکشن"
                  icon={<img src="/Vectornotebook.svg" alt="notebook" className="w-5 h-5 object-contain shrink-0" />}
                  className="bg-[#030216]/90 backdrop-blur-sm hover:bg-[#030216]/70 transition-colors"
                />
              </div>
              <div className="p-[2px] rounded-2xl shrink-0" style={{ background: 'linear-gradient(to right, #B020D5, #582CFF)' }}>
                <ProductActionButton
                  text="ترک"
                  icon={<img src="/headphonewhite.svg" alt="headphone" className="w-5 h-5 object-contain shrink-0" />}
                  className="bg-[#030216]/90 backdrop-blur-sm hover:bg-[#030216]/70 transition-colors"
                />
              </div>
              <div className="p-[2px] rounded-2xl shrink-0" style={{ background: 'linear-gradient(to right, #887755, #4D88FF)' }}>
                <ProductActionButton
                  text="هنرمندان"
                  icon={<img src="/Vectormembers.svg" alt="members" className="w-5 h-5 object-contain shrink-0" />}
                  className="bg-[#030216]/90 backdrop-blur-sm hover:bg-[#030216]/70 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* فیلترها */}
          <div className="grid grid-cols-3 gap-3 w-full md:grid-cols-4 lg:flex lg:items-center lg:justify-end md:gap-3">
            {/* مرتب سازی */}
            <div className="bg-transparent border border-white/15 rounded-xl px-3 py-2">
              <select className="bg-transparent outline-none text-white text-sm w-full" defaultValue="" style={{ fontFamily: 'IRANSansWeb' }}>
                <option className="bg-black" value="">
                  مرتب سازی
                </option>
                <option className="bg-black" value="popular">
                  پرطرفدار
                </option>
                <option className="bg-black" value="newest">
                  جدیدترین
                </option>
                <option className="bg-black" value="alpha">
                  الفبا
                </option>
              </select>
            </div>

            {/* فیلتر سبک */}
            <div className="bg-transparent border border-white/15 rounded-xl px-3 py-2">
              <select className="bg-transparent outline-none text-white text-sm w-full" defaultValue="" style={{ fontFamily: 'IRANSansWeb' }}>
                <option className="bg-black" value="">
                  فیلتر سبک
                </option>
                <option className="bg-black" value="pop">
                  پاپ
                </option>
                <option className="bg-black" value="rock">
                  راک
                </option>
                <option className="bg-black" value="jazz">
                  جز
                </option>
              </select>
            </div>

            {/* تاریخ */}
            <div className="bg-transparent border border-white/15 rounded-xl px-3 py-2">
              <select className="bg-transparent outline-none text-white text-sm w-full" defaultValue="" style={{ fontFamily: 'IRANSansWeb' }}>
                <option className="bg-black" value="">
                  تاریخ
                </option>
                <option className="bg-black" value="today">
                  امروز
                </option>
                <option className="bg-black" value="week">
                  این هفته
                </option>
                <option className="bg-black" value="month">
                  این ماه
                </option>
              </select>
            </div>

            {/* قیمت */}
            <div className="bg-transparent border border-white/15 rounded-xl px-3 py-2 col-span-3 md:col-span-1">
              <select className="bg-transparent outline-none text-white text-sm w-full" defaultValue="" style={{ fontFamily: 'IRANSansWeb' }}>
                <option className="bg-black" value="">
                  قیمت
                </option>
                <option className="bg-black" value="free">
                  رایگان
                </option>
                <option className="bg-black" value="paid">
                  پولی
                </option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* ترک‌های پرطرفدار */}
      <section className="flex flex-col gap-4 w-full mt-10 px-5">
        <div className="flex items-center justify-between">
          <Typography variant="h5" className="font-bold text-white" sx={{ fontFamily: 'IRANSansWeb' }}>
            ترک‌های پرطرفدار
          </Typography>
          <TextLink href="#" className="text-sm text-white inline-flex items-center gap-1" sx={{ color: "#fff", fontFamily: 'IRANSansWeb' }}>
            مشاهده همه
            <ArrowBackIosNewOutlinedIcon fontSize="inherit" />
          </TextLink>
        </div>
        <div className="flex flex-col gap-3">
          {(isMobile ? popularTracks.slice(0, 3) : 
            isTablet ? popularTracks.slice(0, 5) : 
            isLg ? popularTracks.slice(0, 3) : 
            popularTracks
          ).map((track, i) => (
            <TrackCard key={i} {...track} />
          ))}
        </div>
      </section>

      {/* کالکشن‌های پرطرفدار */}
      <section className="flex flex-col gap-4 w-full mt-10 px-5">
        <div className="flex items-center justify-between">
          <Typography variant="h5" className="font-bold text-white" sx={{ fontFamily: 'IRANSansWeb' }}>
            کالکشن‌های پرطرفدار
          </Typography>
          <TextLink href="#" className="text-sm text-white inline-flex items-center gap-1" sx={{ color: "#fff", fontFamily: 'IRANSansWeb' }}>
            مشاهده همه
            <ArrowBackIosNewOutlinedIcon fontSize="inherit" />
          </TextLink>
        </div>
        <PurchaseGrid
          gridClassName="md:!grid-cols-3 lg:!grid-cols-4 !grid-rows-1 xl:!grid-cols-5"
          purchases={
            isMobile ? popularCollections.slice(0, 6) : 
            isTablet ? popularCollections.slice(0, 6) : 
            isLg ? popularCollections.slice(0, 4) :
            isXl ? popularCollections.slice(0, 10) :
            popularCollections
          }
        />
      </section>

      {/* هنرمندان پرطرفدار */}
      <section className="flex flex-col gap-4 w-full mt-10 mb-16 px-5">
        <div className="flex items-center justify-between">
          <Typography variant="h5" className="font-bold text-white" sx={{ fontFamily: 'IRANSansWeb' }}>
            هنرمندان پرطرفدار
          </Typography>
          <TextLink href="#" className="text-sm text-white inline-flex items-center gap-1" sx={{ color: "#fff", fontFamily: 'IRANSansWeb' }}>
            مشاهده همه
            <ArrowBackIosNewOutlinedIcon fontSize="inherit" />
          </TextLink>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-8 w-full">
          {(isMobile ? popularArtists.slice(0, 4) : 
            isTablet ? popularArtists.slice(0, 3) : 
            popularArtists
          ).map((artist) => (
            <ArtistCard key={artist.id} artist={artist as any} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductsPage;
