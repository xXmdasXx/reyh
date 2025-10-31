'use client'

import React from 'react'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'
import TextLink from '@/entities/global/atoms/Link/TextLink'
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import SampleCard from '../../molecules/SampleCard/SampleCard';
import BeatCard from '../../molecules/BeatCard/BeatCard';

function PopularTracks() {
  return (
    <div className='w-full h-[37rem] mt-6 px-5'>
        <div className='w-full h-[10%] flex flex-row items-center'>
            
            <TypographyAtom className='!text-[1.1rem] !text-white/95 !w-[50%]
            sm:!text-[1.3rem]'>پرطرفدار ترین آثار</TypographyAtom>
            
            <TextLink href='#' className='!text-[0.8rem] !text-white/70 !flex !justify-end !w-[50%]
            sm:!text-[1rem]'>
                مشاهده همه <KeyboardDoubleArrowLeftOutlinedIcon className='mt-[1px] !text-[0.9rem] !text-white/50
                sm:!text-[1.3rem]'></KeyboardDoubleArrowLeftOutlinedIcon>
            </TextLink>

        </div>
        <div className='w-full h-[90%]'>
            <SampleCard name='لورم اپیسوم متن ساختار' date='3:02'></SampleCard>
            <BeatCard name='لورم اپیسوم متن ساختار' date='3:02'></BeatCard>
            <SampleCard name='لورم اپیسوم متن ساختار' date='3:02'></SampleCard>
            <BeatCard name='لورم اپیسوم متن ساختار' date='3:02'></BeatCard>
        </div>
    </div>
  )
}

export default PopularTracks