import React from 'react'
import MusicCassetteIcon from '@/entities/landing/atoms/MusicCassetteIcon/MusicCassetteIcon'
import MusicNoteIcon from '@/entities/landing/atoms/MusicNoteIcon/MusicNoteIcon'

function HeroPicsMolecule() {
  return (
    <div className='relative h-[30rem] w-[20rem]
    md:h-[40rem]
    xl:h-[50rem]
    sm:w-full'>
      {/* Cassette زیرتر */}
      <div className="absolute  top-[3rem] z-10
      2xl:right-[16rem] 2xl:top-[5rem]
      xl:left-10 xl:top-[5rem]
      lg:top-[4rem]
      md:left-3 md:top-[8rem]
      sm:top-[3rem] sm:left-[12rem]">
        <MusicCassetteIcon className='w-[20rem] h-[20rem]
        2xl:w-[38rem] 2xl:h-[38rem]
        xl:w-[35rem] xl:h-[35rem]
        lg:w-[29rem] lg:h-[29rem]' />
      </div>

      {/* Note بالاتر */}
      <div className="absolute left-[10rem] top-[2rem] z-50 
      xl:left-[23rem] xl:top-[4rem]
      2xl:bottom-[32rem] 2xl:right-[5.5rem]
      lg:left-[18rem] lg:top-[2rem]
      md:left-[13rem] md:top-[7rem]
      sm:left-[24rem] sm:top-[2rem]">
        <MusicNoteIcon className='w-[11rem] h-[11rem]
        2xl:w-[25rem] 2xl:h-[25rem]
        xl:w-[22rem] xl:h-[22rem]
        lg:w-[17rem] lg:h-[17rem]'/>
      </div>
    </div>
  )
}

export default HeroPicsMolecule
