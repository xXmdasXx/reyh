"use client"
import React from "react"
import Typography from "@/entities/global/atoms/Typography/TypographyAtom"
import StarIcon from "@mui/icons-material/Star"
import HeadphonesIcon from "@mui/icons-material/Headphones"

type TrackCardProps = {
  image?: string
  title: string
  
  downloadCount: string
  duration: string
  isPremium?: boolean
}

export default function TrackCard({ 
  image, 
  title, 
  
  downloadCount, 
  duration,
  isPremium = false
}: TrackCardProps) {
  const backgroundClass = isPremium 
    ? "bg-gradient-to-br from-[#B020D5]/20 to-[#B020D5]/10"
    : "bg-gradient-to-br from-[#4D88FF]/40 to-[#887755]/50"

  return (
    <div className={`rounded-2xl h-18 w-full ${backgroundClass} flex items-center justify-between px-4 cursor-pointer`}>
      {/* Image placeholder (white square) */}
      <div className="w-10 h-10 bg-white rounded-lg flex-shrink-0"></div>
      
      {/* Content */}
      <div className="flex-1 mx-3 text-right ">
        <div className="flex  pb-0.5">
        <span className="inline-flex items-center justify-center pl-2">
            <img src={isPremium?"/musicnote.svg":"/volume-11.svg"}
          
            />
          </span>
         
        <Typography variant="body2" className="text-white font-medium  text-sm" sx={{ fontFamily: 'IRANSansWeb' }}>
          {title}
        </Typography>
        </div>
        <div className="flex gap-1">
        <span className="inline-flex items-center justify-center">
            <img src="/downloadVector.svg"
            />
          </span>
          
        <Typography variant="caption" className="text-white/70 text-xs" sx={{ fontFamily: 'IRANSansWeb' }}>
          {downloadCount}
        </Typography>
        </div>
      </div>
      
      {/* Duration (left side) */}
      <div className="text-white/80 text-xs font-mono" style={{ fontFamily: 'IRANSansWeb' }}>
        {duration}
      </div>
    </div>
  )
}
