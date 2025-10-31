import React from 'react'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom';
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Button } from '@mui/material';

function SampleCard({name,date}:any) {
  return (
    <div>
        <Button className='!w-full !h-[95px] !bg-gradient-to-br !mt-6 !from-[#4D88FF0A] !to-[#887755]/50 !rounded-2xl !flex !flex-row'>
            
            <div className='!h-full !flex !items-center'>
                <div className='bg-white/20 w-17 h-17 rounded-2xl mr-1
                md:mr-0 md:w-18 md:h-18'>
                    
                </div>
            </div>
            
            <div className='!h-full !w-[83%] !flex !flex-col items-start'>
                <TypographyAtom className='!mt-4'>
                    <VolumeDownOutlinedIcon className='ml-1 mr-1 !text-[#4D88FF73] !text-[1.4rem]
                    sm:!text-[1.7rem]'></VolumeDownOutlinedIcon>
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

export default SampleCard