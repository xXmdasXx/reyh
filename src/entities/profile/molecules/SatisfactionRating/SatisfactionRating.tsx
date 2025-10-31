"use client"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt"

interface SatisfactionRatingProps {
  percentage: number
}

const SatisfactionRating: React.FC<SatisfactionRatingProps> = ({ percentage }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < percentage) setProgress(progress + 1)
    }, 15)
    return () => clearTimeout(timer)
  }, [progress, percentage])

  const radius = 60
  const circumference = Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="flex  flex-col items-center justify-center text-white">
      {/* SVG نیم‌دایره */}
      <div className="relative w-[160px] h-[90px]">
        <svg
          width="160"
          height="90"
          viewBox="0 0 160 90"
          className="transform"
        >
          {/* مسیر پس‌زمینه */}
          <path
            d="M 150 80 A 70 70 0 0 0 10 80"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
          />

          {/* مسیر درصد */}
          <motion.path
            d="M 150 80 A 70 70 0 0 0 10 80"
            stroke="url(#gradient)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          {/* گرادینت رنگ */}
          <defs>
            <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#4d88ff" />
              <stop offset="100%" stopColor="#00bfff" />
            </linearGradient>
          </defs>
        </svg>

        {/* ایموجی وسط نیم‌دایره */}
        <div className="absolute top-[25px] h-10  w-10 flex flex-row items-center justify-center  mt-7 rounded-full bg-[#0075ff] left-1/2 -translate-x-1/2">
          <SentimentSatisfiedAltIcon className="  " sx={{ fontSize: 40, color: "#ffffff" }} />
        </div>
      </div>

      {/* کادر درصد پایین */}
      <div className="mt-3 font-IRANSansWeb bg-[#0B0F29]/80 border border-[#1e274f] rounded-2xl px-6 py-2 flex justify-between items-center h-[100px] w-[190px] shadow-md">
        <span className="text-xs opacity-40">٪0</span>
        <span className="text-lg font-bold">{progress}٪</span>
        <span className="text-xs opacity-40">٪100</span>
      </div>
    </div>
  )
}

export default SatisfactionRating
