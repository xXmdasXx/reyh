"use client"
import React, { useMemo, useState } from 'react'

type FilterBarProps = {
  onSearch: (query: string) => void
  onSortChange?: (value: string) => void
  onGenreChange?: (value: string) => void
  onLicenseChange?: (value: string) => void
  mobileMode?: boolean
  tabletMode?: boolean
}

export default function FilterBar({ onSearch, onSortChange, onGenreChange, onLicenseChange, mobileMode, tabletMode }: FilterBarProps) {
  const [query, setQuery] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
  }

  useMemo(() => {
    const id = setTimeout(() => onSearch(query.trim()), 250)
    return () => clearTimeout(id)
  }, [query, onSearch])

  if (mobileMode) {
    // Mobile: search input below title, filters below search
    return (
      <div className="flex flex-col gap-3 w-full max-w-[400px] mx-auto">
        <div className="relative w-full max-w-[360px] mx-auto">
          <input
            type="search"
            value={query}
            onChange={handleChange}
            placeholder="جستجو کنید ..."
            className="h-11 w-full rounded-xl bg-gradient-to-br from-[#B020D5]/40 to-[#4D88FF]/40 border border-[#2a1f44] pl-10 pr-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-white/20"
            style={{ fontFamily: 'IRANSansWeb' }}
          />
          <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="grid grid-cols-3 gap-2 w-full mt-1">
          <div className="bg-transparent border border-white/15 rounded-xl px-2 py-2 min-w-[70px] w-full">
            <select
              onChange={(e) => onSortChange?.(e.target.value)}
              className="bg-transparent outline-none text-white text-sm w-full"
              defaultValue=""
              style={{ fontFamily: 'IRANSansWeb' }}
            >
              <option className="bg-black" value="">مرتب سازی</option>
              <option className="bg-black" value="popular">پرطرفدار</option>
              <option className="bg-black" value="newest">جدیدترین</option>
              <option className="bg-black" value="alpha">الفبا</option>
            </select>
          </div>
          <div className="bg-transparent border border-white/15 rounded-xl px-2 py-2 min-w-[70px] w-full">
            <select
              onChange={(e) => onGenreChange?.(e.target.value)}
              className="bg-transparent outline-none text-white text-sm w-full"
              defaultValue=""
              style={{ fontFamily: 'IRANSansWeb' }}
            >
              <option className="bg-black" value="">فیلتر سبک</option>
              <option className="bg-black" value="pop">پاپ</option>
              <option className="bg-black" value="rock">راک</option>
              <option className="bg-black" value="jazz">جز</option>
            </select>
          </div>
          <div className="bg-transparent border border-white/15 rounded-xl px-2 py-2 min-w-[70px] w-full">
            <select
              onChange={(e) => onLicenseChange?.(e.target.value)}
              className="bg-transparent outline-none text-white text-sm w-full"
              defaultValue=""
              style={{ fontFamily: 'IRANSansWeb' }}
            >
              <option className="bg-black" value="">فیلتر لایسنس</option>
              <option className="bg-black" value="free">رایگان</option>
              <option className="bg-black" value="paid">غیر رایگان</option>
            </select>
          </div>
        </div>
      </div>
    )
  }

  if (tabletMode) {
    // Tablet: 4-column grid, original layout
    return (
      <>
        {/* Only show on md screens */}
        <div className="hidden md:block lg:hidden w-full">
          <div className="grid grid-cols-5 gap-4 w-full" dir="rtl">
            <div className="col-span-1">
              <div className="bg-transparent border border-white/15 rounded-xl px-3 py-2 w-full">
                <select
                  onChange={(e) => onSortChange?.(e.target.value)}
                  className="bg-transparent outline-none text-white text-sm w-full"
                  defaultValue=""
                  style={{ fontFamily: 'IRANSansWeb' }}
                >
                  <option className="bg-black" value="">مرتب سازی</option>
                  <option className="bg-black" value="popular">پرطرفدار</option>
                  <option className="bg-black" value="newest">جدیدترین</option>
                  <option className="bg-black" value="alpha">الفبا</option>
                </select>
              </div>
            </div>
            <div className="col-span-1">
              <div className="bg-transparent border border-white/15 rounded-xl px-3 py-2 w-full">
                <select
                  onChange={(e) => onGenreChange?.(e.target.value)}
                  className="bg-transparent outline-none text-white text-sm w-full"
                  defaultValue=""
                  style={{ fontFamily: 'IRANSansWeb' }}
                >
                  <option className="bg-black" value="">فیلتر سبک</option>
                  <option className="bg-black" value="pop">پاپ</option>
                  <option className="bg-black" value="rock">راک</option>
                  <option className="bg-black" value="jazz">جز</option>
                </select>
              </div>
            </div>
            <div className="col-span-1">
              <div className="bg-transparent border border-white/15 rounded-xl px-3 py-2 w-full">
                <select
                  onChange={(e) => onLicenseChange?.(e.target.value)}
                  className="bg-transparent outline-none text-white text-sm w-full"
                  defaultValue=""
                  style={{ fontFamily: 'IRANSansWeb' }}
                >
                  <option className="bg-black" value="">فیلتر لایسنس</option>
                  <option className="bg-black" value="free">رایگان</option>
                  <option className="bg-black" value="paid">غیر رایگان</option>
                </select>
              </div>
            </div>
            <div className="col-span-2">
              <div className="relative w-full">
                <input
                  type="search"
                  value={query}
                  onChange={handleChange}
                  placeholder="جستجو کنید ..."
                  className="h-11 w-full rounded-xl bg-gradient-to-br from-[#B020D5]/40 to-[#4D88FF]/40 border border-[#2a1f44] pl-10 pr-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-white/20"
                  style={{ fontFamily: 'IRANSansWeb' }}
                />
                <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* حذف چیدمان lg مشابه xl؛ فقط حالت md فعال است */}
      </>
    )
  }

  // Desktop: search and filters inline
  return (
    <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap no-scrollbar justify-end">
      <div className="flex items-center gap-2">
        <div className="bg-transparent border border-white/15 rounded-xl px-3 py-2">
          <select
            onChange={(e) => onSortChange?.(e.target.value)}
            className="bg-transparent outline-none text-white text-sm"
            defaultValue=""
            style={{ fontFamily: 'IRANSansWeb' }}
          >
            <option className="bg-black" value="">مرتب سازی</option>
            <option className="bg-black" value="popular">پرطرفدار</option>
            <option className="bg-black" value="newest">جدیدترین</option>
            <option className="bg-black" value="alpha">الفبا</option>
          </select>
        </div>
        <div className="bg-transparent border border-white/15 rounded-xl px-3 py-2">
          <select
            onChange={(e) => onGenreChange?.(e.target.value)}
            className="bg-transparent outline-none text-white text-sm"
            defaultValue=""
            style={{ fontFamily: 'IRANSansWeb' }}
          >
            <option className="bg-black" value="">فیلتر سبک</option>
            <option className="bg-black" value="pop">پاپ</option>
            <option className="bg-black" value="rock">راک</option>
            <option className="bg-black" value="jazz">جز</option>
          </select>
        </div>
        <div className="bg-transparent border border-white/15 rounded-xl px-3 py-2">
          <select
            onChange={(e) => onLicenseChange?.(e.target.value)}
            className="bg-transparent outline-none text-white text-sm"
            defaultValue=""
            style={{ fontFamily: 'IRANSansWeb' }}
          >
            <option className="bg-black" value="">فیلتر لایسنس</option>
            <option className="bg-black" value="free">رایگان</option>
            <option className="bg-black" value="paid">غیر رایگان</option>
          </select>
        </div>
      </div>
      <div className="relative w-56 md:w-64">
        <input
          type="search"
          value={query}
          onChange={handleChange}
          placeholder="جستجو کنید ..."
          className="h-11 w-full rounded-xl bg-gradient-to-br from-[#B020D5]/40 to-[#4D88FF]/40 border border-[#2a1f44] pl-10 pr-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-white/20"
          style={{ fontFamily: 'IRANSansWeb' }}
        />
        <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  )
}


