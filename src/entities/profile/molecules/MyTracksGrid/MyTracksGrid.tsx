"use client"
import React from 'react'
import MyTrackCard, { MyTrack } from '../MyTrackCard/MyTrackCard'
import ButtonCenterGradient from '../../../global/atoms/ButtonCenterGradient/ButtonCenterGradient'
import AddIcon from '@mui/icons-material/Add'

export type { MyTrack }

interface MyTracksGridProps {
  tracks: MyTrack[]
  onEdit?: (track: MyTrack) => void
  onAttach?: (track: MyTrack) => void
  onDelete?: (track: MyTrack) => void
  onAddLicense?: (track: MyTrack) => void
  onAddNewTrack?: () => void
}

const MyTracksGrid: React.FC<MyTracksGridProps> = ({
  tracks,
  onEdit,
  onAttach,
  onDelete,
  onAddLicense,
  onAddNewTrack
}) => {
  return (
    <div className="space-y-4">
      {/* لیست ترک‌ها */}
      <div className="space-y-3">
        {tracks.map((track) => (
          <MyTrackCard
            key={track.id}
            track={track}
            onEdit={onEdit}
            onAttach={onAttach}
            onDelete={onDelete}
            onAddLicense={onAddLicense}
          />
        ))}
      </div>

      {/* دکمه افزودن ترک جدید */}
      <button
        onClick={onAddNewTrack}
        className="w-full rounded-2xl bg-black/20 border border-white/10 p-4 flex items-center gap-3 hover:bg-black/30 transition-colors"
      >
        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <AddIcon sx={{ fontSize: 24, color: 'white' }} />
        </div>
        <span className="text-white font-medium text-right" style={{ fontFamily: 'IRANSansWeb' }}>
          افزودن ترک جدید
        </span>
      </button>
    </div>
  )
}

export default MyTracksGrid
