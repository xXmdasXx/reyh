"use client"
import React from 'react'
import Typography from '../../../global/atoms/Typography/TypographyAtom'
import Image from 'next/image'
import AddIcon from '@mui/icons-material/Add'
import FolderIcon from '@mui/icons-material/Folder'
import BlockIcon from '@mui/icons-material/Block'
import { div } from 'framer-motion/client'

export type MyCollection = {
  id: string
  title: string
  trackCount: number
  isNew?: boolean
}

type MyCollectionCardProps = {
  collection: MyCollection
  onClick?: (collection: MyCollection) => void
}

export default function MyCollectionCard({ collection, onClick }: MyCollectionCardProps) {
  if (collection.isNew) {
    return (
     <div>
       <div 
        className="rounded-2xl bg-black/20 border border-white/10 p-6 flex flex-col items-center justify-center aspect-square cursor-pointer hover:bg-black/30 transition-colors"
        onClick={() => onClick?.(collection)}
      >
        <AddIcon sx={{ fontSize: 48, color: 'white'}} />
        
      </div>
      <Typography 
      variant="body2" 
      className="text-white font-medium pt-4" 
      sx={{ fontFamily: 'IRANSansWeb' }}
    >
      کالکشن جدید
    </Typography>
     </div>
    
    )
  }

  return (
    <div 
      className="w-full cursor-pointer hover:opacity-90 transition-opacity"
      onClick={() => onClick?.(collection)}
    >
      {/* باکس مربعی بالا */}
      <div className="relative w-full aspect-square bg-gradient-to-tr from-[#FF7344] to-[#35115F] rounded-xl mb-3">
        {/* آیکون چشم در گوشه بالا راست */}
        <div className="absolute top-2 right-2 bg-gray-700 rounded-full p-1" >
          <Image 
            src="/eyeoff.svg"
            width={18}
            height={18}
            alt="attach"
          />
        </div>
      </div>
      
      {/* محتوای پایین */}
      <div className="flex items-center gap-2 mb-2">
      <Typography 
        variant="body2" 
        className="text-white font-medium" 
        sx={{ fontFamily: 'IRANSansWeb' }}
      >
        {collection.title}
      </Typography>
      <div className='flex items-center'>
      <button
            onClick={() => ""}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Image 
              src="/pen.svg"
              width={14}
              height={14}
              alt="edit"
            />
          </button>
          <button
            onClick={() => ""}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Image 
              src="/bin.svg"
              width={14}
              height={14}
              alt="edit"
            />
          </button>
      </div>
        
      </div>
      
    </div>
  )
}
