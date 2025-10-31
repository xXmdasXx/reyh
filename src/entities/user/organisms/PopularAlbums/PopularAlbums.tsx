'use client'

import React from 'react'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'
import TextLink from '@/entities/global/atoms/Link/TextLink'
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import AlbumCard from '../../molecules/AlbumCard/AlbumCard';

function PopularAlbums() {
  return (
    <div className='w-full h-auto px-5 !mb-30'>
        <div className='w-full h-[15%] flex flex-row items-center'>
            
            <TypographyAtom className='!text-[1.2rem] !text-white/95 !w-[50%]
            sm:!text-[1.5rem]
            md:!text-[1.8rem]'>کالکشن های پرطرفدار</TypographyAtom>
            
            <TextLink href='#' className='!text-[0.8rem] !text-white/70 !flex !justify-end !w-[50%]
            sm:!text-[1rem]'>
                مشاهده همه <KeyboardDoubleArrowLeftOutlinedIcon className='mt-[1px] !text-[0.9rem] !text-white/50
            sm:!text-[1.3rem]'></KeyboardDoubleArrowLeftOutlinedIcon>
            </TextLink>

        </div>

        <div className='w-full h-[85%] grid grid-cols-2 gap-y-6
        sm:grid-cols-3
        lg:grid-cols-4
        2xl:grid-cols-5 mt-5'>
            <AlbumCard name='لورم اپیسوم' className=''></AlbumCard>
            <AlbumCard name='لورم اپیسوم' className=''></AlbumCard>
            <AlbumCard name='لورم اپیسوم' className=''></AlbumCard>
            <AlbumCard name='لورم اپیسوم' className=''></AlbumCard>
            <AlbumCard name='لورم اپیسوم' className='lg:hidden'></AlbumCard>
            <AlbumCard name='لورم اپیسوم' className='lg:hidden'></AlbumCard>
            <AlbumCard name='لورم اپیسوم' className='!hidden
            2xl:!flex'></AlbumCard>
        </div>
    </div>
  )
}

export default PopularAlbums