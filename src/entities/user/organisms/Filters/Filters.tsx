'use client'

import React from 'react'
import TagsButton from '../../atoms/TagsButton/TagsButton'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import PriceFilterAtom from '../../atoms/PriceFilter/PriceFilter';
import GenreFilterAtom from '../../atoms/GenreFilter/GenreFilter';
import LicenseFilterAtom from '../../atoms/LicenceFilter/LicenceFilter';
import DateFilterAtom from '../../atoms/DateFilter/DateFilter'
import Search from '../../atoms/Search/Search'


function Filters() {
  return (
    
    <div className='w-full h-auto mt-3 px-6 flex flex-col items-center
    xl:!flex xl:!flex-row xl:!items-center'>
      <div className='flex flex-row items-center h-auto w-[100%] mb-3
      2xl:!w-[30%]
      xl:!w-[32%] xl:mb-0'>
        <TypographyAtom className='!ml-5 w-[30%]
        xl:w-auto
        md:w-[50%]'>تگ ها</TypographyAtom>

        <div className='w-[70%] h-full flex flex-row justify-end
        xl:justify-start xl:w-[70%]'>
            <TagsButton 
          className=' !text-white !text-[0.85rem] !pl-6 !pr-4' 
          activeGradient='linear-gradient(to right, #4D88FF73, #8C6A2673)'
          inactiveGradient='linear-gradient(to right, #4D88FF73, #8C6A2673)'>
            <VolumeDownOutlinedIcon className='ml-1 !text-[#4D88FF73] !text-[1.5rem]'></VolumeDownOutlinedIcon> سمپل
          </TagsButton>

          <TagsButton 
          className='!mr-4 !text-white !text-[0.85rem] !pl-6 !pr-4'
          activeGradient='linear-gradient(to right, #18165B, #B020D5)'
          inactiveGradient='linear-gradient(to right, #18165B, #B020D5)'>
            <MusicNoteOutlinedIcon className='ml-1 !text-[#B020D5] !text-[1.5rem]'></MusicNoteOutlinedIcon>
            بیت
            </TagsButton>
        </div>
        
      </div>

      <div className='w-full h-full flex flex-col
      md:!flex md:!flex-row md:items-center'>
        
        <div className='
        md:hidden'>
          <Search></Search>
        </div>
        
        <div className='h-full w-full flex flex-col mt-3
        2xl:!w-[70%] 2xl:pr-5
        md:w-[85%] md:mt-0 md:flex md:flex-row md:items-center'>
          
          <div className='hidden 
          md:flex md:pl-3'>
            <PriceFilterAtom></PriceFilterAtom>
          </div>

          <div className='flex flex-row'>

            <div className='w-[30%] pl-3
            md:mr-0 md:w-auto md:pr-0'>
              <GenreFilterAtom></GenreFilterAtom>
            </div>

            <div className='w-[35%]
            md:w-auto md:pl-3'>
              <LicenseFilterAtom></LicenseFilterAtom>
            </div>

            <div className='w-[35%] pr-3
            md:w-auto md:pr-0'>
              <DateFilterAtom></DateFilterAtom>
            </div>

          </div>

          <div className='mt-3
          md:hidden'>
            <PriceFilterAtom></PriceFilterAtom>
          </div>
          
        </div>

        <div className='h-full items-center hidden
        md:!flex md:w-[28%]'> 
          <Search></Search>
        </div>
      </div>
    
    </div>
  )
}

export default Filters