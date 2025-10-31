'use client'
import React from 'react'
import AddIcon from '@mui/icons-material/Add'

interface SimpleTrackCardProps {
  id: string
  title: string
  onAddLicense?: (id: string) => void
  gradient?: string
}

const SimpleTrackCard: React.FC<SimpleTrackCardProps> = ({
  id,
  title,
  onAddLicense,
  gradient = "from-blue-500 to-purple-600"
}) => {
  return (
    <div className="bg-[#1a1a2e] rounded-lg p-4 flex items-center justify-between hover:bg-[#2a2a3e] transition-colors">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradient}`}></div>
        <h3 className="text-white font-medium text-sm">{title}</h3>
      </div>

      <button
        onClick={() => onAddLicense?.(id)}
        className="bg-blue-600 text-white text-xs px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-1"
      >
        <AddIcon className="text-xs" />
        افزودن لایسنس
      </button>
    </div>
  )
}

export default SimpleTrackCard
