"use client"
import React from 'react'
import Typography from '../../../global/atoms/Typography/TypographyAtom'
import Image from 'next/image'
import AddIcon from '@mui/icons-material/Add'

export type MyTrack = {
  id: string
  title: string
  licenseCount: number
  hasLicense: boolean
  isPremium?: boolean
}

type MyTrackCardProps = {
  track: MyTrack
  onEdit?: (track: MyTrack) => void
  onAttach?: (track: MyTrack) => void
  onDelete?: (track: MyTrack) => void
  onAddLicense?: (track: MyTrack) => void
}

export default function MyTrackCard({
  track,
  onEdit,
  onAttach,
  onDelete,
  onAddLicense,
}: MyTrackCardProps) {
  const backgroundClass = track.isPremium
    ? "bg-gradient-to-br from-[#B020D5]/20 to-[#B020D5]/10"
    : "bg-gradient-to-br from-[#4D88FF]/40 to-[#887755]/50"

  return (
    <div
      className={`rounded-2xl h-auto w-full ${backgroundClass} flex flex-col sm:flex-row px-4 py-4 gap-4  sm:w-auto`}
    >
      {/* بخش اصلی بالا (در موبایل بالا، در دسکتاپ راست) */}
      <div className="flex items-center justify-between w-full gap-3 sm:flex-1">
        {/* مربع سفید */}
        <div className="w-10 h-10 bg-white rounded-lg flex-shrink-0"></div>

        {/* محتوا */}
        <div className="flex-1 text-right">
          <div className="flex pb-1">
            <span className="inline-flex items-center justify-center pl-2">
              <img
                src={track.isPremium ? "/musicnote.svg" : "/volume-11.svg"}
                alt="track"
                className="w-5 h-5"
              />
            </span>
            <Typography
              variant="body2"
              className="text-white font-medium text-sm"
              sx={{ fontFamily: 'IRANSansWeb' }}
            >
              {track.title}
            </Typography>
          </div>
          
          <div className="flex gap-1">
            <Typography
              variant="caption"
              className="text-white/70 text-xs"
              sx={{ fontFamily: 'IRANSansWeb' }}
            >
              {track.hasLicense ? `${track.licenseCount} لایسنس` : 'فاقد لایسنس'}
            </Typography>
          </div>
        </div>

        {/* آیکون‌ها */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <button
            onClick={() => onDelete?.(track)}
            className="p-1 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Image src="/bin.svg" width={14} height={14} alt="delete" />
          </button>
          <button
            onClick={() => onEdit?.(track)}
            className="p-1 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Image src="/pen.svg" width={14} height={14} alt="edit" />
          </button>
          <button
            onClick={() => onAttach?.(track)}
            className="p-1 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Image src="/eye.svg" width={14} height={14} alt="attach" />
          </button>

          {/* دکمه افزودن لایسنس - فقط در دسکتاپ */}
          <button
            onClick={() => onAddLicense?.(track)}
            className="hidden sm:flex px-3 py-2 text-xs rounded-lg text-white font-medium items-center justify-center gap-1 bg-gradient-to-r from-[#13E5D5]/50 to-[#13E5D5]"
            style={{ fontFamily: 'IRANSansWeb' }}
          >
            <AddIcon sx={{ fontSize: 16 }} />
            افزودن لایسنس
          </button>
        </div>
      </div>

      {/* دکمه افزودن لایسنس - فقط در موبایل */}
      <button
        onClick={() => onAddLicense?.(track)}
        className="flex sm:hidden w-full px-3 py-3 text-xs rounded-lg text-white font-medium items-center justify-center gap-1 bg-gradient-to-r from-[#13E5D5]/50 to-[#13E5D5]"
        style={{ fontFamily: 'IRANSansWeb' }}
      >
        <AddIcon sx={{ fontSize: 16 }} />
        افزودن لایسنس
      </button>
    </div>
  )
}
