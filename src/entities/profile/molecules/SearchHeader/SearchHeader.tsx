// entities/profile/molecules/SearchHeader/SearchHeader.tsx
'use client'
import React from "react";
import Typography from "../../../global/atoms/Typography/TypographyAtom";

interface SearchHeaderProps {
  title: string;
  placeholder?: string;
  fullWidth?: boolean;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({ 
  title, 
  placeholder = "جستجو کنید ...",
  fullWidth = false,
}) => {
  const showTitle = Boolean(title && title.trim().length > 0)
  return (
    <div className={fullWidth ? "flex flex-col items-stretch mb-6 gap-4" : "flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4"}>
      {showTitle && (
        <Typography variant="h5" className="font-bold text-white" sx={{ fontFamily: 'IRANSansWeb' }}>
          {title}
        </Typography>
      )}
      <div className={`relative w-full ${fullWidth ? 'md:w-full' : 'md:w-48'}`} >
        <input
          type="search"
          placeholder={placeholder}
          className="h-11 w-full rounded-xl bg-gradient-to-br from-[#B020D5]/40 to-[#4D88FF]/40 border border-[#2a1f44] pl-10 pr-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-white/20"
          style={{ fontFamily: 'IRANSansWeb' }}
        />
        <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default SearchHeader;
