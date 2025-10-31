'use client'
import React from 'react'
import AddIcon from '@mui/icons-material/Add'

interface SimpleAddCollectionButtonProps {
  onClick?: () => void
  className?: string
}

const SimpleAddCollectionButton: React.FC<SimpleAddCollectionButtonProps> = ({ onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#1a1a2e] text-white rounded-lg px-6 py-3 w-full flex items-center justify-between hover:bg-[#2a2a3e] transition-colors ${className}`}
    >
      <span className="font-medium">افزودن کالکشن جدید</span>
      <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center">
        <AddIcon className="text-white text-lg" />
      </div>
    </button>
  )
}

export default SimpleAddCollectionButton



