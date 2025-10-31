import React from 'react'
import { Button } from '@mui/material'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

function BeatCard({name,date}:any) {
  return (
    <div>
        <Button className='!w-full !h-[95px] !bg-gradient-to-br !mt-6 !from-[#B020D50A] !to-[#35115F]/50 !rounded-2xl !flex !flex-row'>
            
            <div className='!h-full !flex !items-center'>
                <div className='bg-white/20 w-17 h-17 rounded-2xl mr-1
                md:mr-0 md:w-18 md:h-18'> 
                    {/*  */}
                </div>
            </div>
            
            <div className='!h-full !w-[83%] !flex !flex-col items-start'>
                <TypographyAtom className='!mt-4'>
                    <MusicNoteOutlinedIcon className='ml-1 mr-1 !text-[#B020D5] !text-[1.3rem]
                    sm:!text-[1.7rem]'></MusicNoteOutlinedIcon>
                    <span className='text-white !text-[0.9rem]
                    sm:!text-[1rem]'>{name}</span>
                </TypographyAtom>   

                <TypographyAtom className='!mt-1.5 !text-[0.75rem] !mr-2 text-white/60'>
                    <FileDownloadOutlinedIcon className='!text-[1rem] ml-1.5'></FileDownloadOutlinedIcon>
                    1.2 هزار دانلود
                </TypographyAtom>
            </div>
            <div className='h-full w-[10%] flex justify-end pl-5 items-center'>
                <TypographyAtom className='text-white !text-[0.8rem]
                sm:!text-[1rem]'>{date}</TypographyAtom>
            </div>
        </Button>
    </div>
  )
}

export default BeatCard