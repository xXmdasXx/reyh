import React from 'react'
import MusicCassetteIcon from '@/entities/landing/atoms/MusicCassetteIcon/MusicCassetteIcon'
import MusicNoteIcon from '@/entities/landing/atoms/MusicNoteIcon/MusicNoteIcon'

function HeroPicsMolecule() {
  return (
    <div className='h-[50rem]'>
        <MusicCassetteIcon className='relative right-[16rem] top-[5rem]'></MusicCassetteIcon>
        <MusicNoteIcon className='relative bottom-[32rem] right-[5.5rem]'></MusicNoteIcon>
    </div>
  )
}

export default HeroPicsMolecule