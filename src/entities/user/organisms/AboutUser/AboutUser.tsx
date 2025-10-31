import React from 'react'
import DeafultProfile from '../../atoms/DeafultProfile/DeafultProfile'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'
import DownloadVector from '../../atoms/DownloadVector/DownloadVector'

function AboutUser() {
  return (
    <div className='w-full h-auto px-5 mt-10 mb-10'>
        <div 
        className='bg-linear-to-tl from-[#4E267C]/20 from-30% to-[#FF7344]/40 w-full 
        rounded-[20px] h-auto pb-14 shadow-white/5 shadow-xl'>
            
            <div 
            className='bg-linear-to-br from-[#B020D5]/40 to-[#FF7344]/40 
            rounded-t-[20px] w-full h-[178px]'>
                
            <DeafultProfile className='relative top-16 right-2
            md:top-16 md:right-10'></DeafultProfile>
                
            </div>
        
            <div className='flex flex-row'>
                <TypographyAtom className='!mr-9 !mt-13 !text-[1.2rem]
                sm:!text-[1.5rem] sm:!mr-7
                md:mr-14'>شادی قدمیاری</TypographyAtom>
                <DownloadVector className='mt-15 mr-5 text-[0.9rem]
                sm:!text-[1rem]
                md:!mr-10'></DownloadVector>
                <TypographyAtom className='!mt-15 !text-[0.75rem] !mr-2 text-white/60
                sm:!text-[0.85rem]'>1.2 هزار دانلود</TypographyAtom>
            </div>

            <TypographyAtom className='!mx-7 !mt-10 !text-[0.85rem] text-white/70
            sm:!text-[0.95rem]
            md:mx-14'>“لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها متن <br />
             مصنوعی لازم است متن ساختگی با تولید سادگی نامفهوم می باشد“
            </TypographyAtom>

        </div>
    </div>
  )
}

export default AboutUser