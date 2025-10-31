'use client'

import React from 'react'
import { Button } from '@mui/material'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import IconButton from '@mui/material/IconButton';
import { useCartStore, CartItem } from '@/stores/cartStore';

interface SampleCardProps {
  sample?: CartItem;
}

function SampleCard({ sample }: SampleCardProps) {
  const { removeItem } = useCartStore();
  
  // If no sample is provided, don't render anything
  if (!sample) {
    return null;
  }
  return (
    <div>
      <div
        onClick={() => {
          console.log('Main button clicked');
        }}
        className='relative !w-full !h-[170px] !bg-gradient-to-r !mt-7 
        !from-[#4D88FF21] !to-[#887755]/50 !rounded-2xl 
        !flex !flex-row !justify-start z-10 overflow-hidden hover:opacity-80 transition-all duration-300'
      >

        <div className='!hidden !items-center
        lg:!flex'>
          <div className='bg-white/20 rounded-xl mx-6 w-[120px] h-[120px]' />
        </div>
        
        <div className='w-full h-full flex flex-row justify-between'>
          <div className='w-auto h-full flex flex-col items-start py-7 pr-3
          sm:py-7 sm:pr-7
          lg:!w-auto lg:pr-0'>
            <TypographyAtom className='!text-[0.8rem] text-white/60'>
              {sample.type === 'sample' ? 'سمپل' : sample.type === 'beat' ? 'بیت' : 'آلبوم'}
            </TypographyAtom>

            <div className='flex flex-row w-full z-20'>
              <TypographyAtom className='!text-[1rem] text-white !mt-2
              lg:!text-[1.2rem]'>
                {sample.title}
              </TypographyAtom>

              <IconButton
                  onClick={(e) => {
                      e.stopPropagation();
                      removeItem(sample.id);
                  }}
                  className='!relative !z-50 hover:!bg-[#FF6767]/10 !mr-2'
              >
              <DeleteOutlinedIcon className='!text-[1.3rem] text-[#FF6767]' />
              </IconButton>
            </div>

            <div className='flex flex-row items-center mt-3'>
              <InsertDriveFileOutlinedIcon className='!text-[1rem] mr-0.5 text-white/60' />
              <TypographyAtom className='!text-[0.8rem] text-white/60 !mr-1 relative top-0.5'>
                {sample.format}
              </TypographyAtom>
            </div>

            <div className='flex flex-row items-center mt-2'>
              <StarBorderPurple500OutlinedIcon className='!text-[1.2rem] text-white/60 relative' />
              <TypographyAtom className='!text-[0.8rem] text-white/60 !mr-1 relative top-0.5'>
                {sample.license}
              </TypographyAtom>
            </div>
          </div>

          <div className='w-auto h-full flex justify-center items-center pl-3
          sm:pl-5
          lg:pl-10'>
              <TypographyAtom className='!text-[0.9rem] text-white
              sm:!text-[1.1rem]
              2xl:!text-[1.2rem]'>
                  {sample.price.toLocaleString('fa-IR')} تومان
              </TypographyAtom>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SampleCard