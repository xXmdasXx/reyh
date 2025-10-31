import React from 'react'
import HeroPicsMolecule from '../molecules/HeroPicsMolecule'
import HeroTypographyMolecule from '../molecules/HeroTypographyMolecule'
import ButtonCenterGradient from '@/entities/global/atoms/ButtonCenterGradient/ButtonCenterGradient'
import ButtonOutlined from '@/entities/global/atoms/ButtonOutlined/ButtonOutlined'

function Hero() {
  return (
    <div className='h-auto w-full flex flex-col
    md:flex-row'>
        
        <div className='w-full flex flex-col items-start justify-center px-5 pt-10
        xl:w-[35%]
        2xl:w-[40%]
        lg:w-[40%]
        md:pt-0 md:w-[47%]'>
            <div className='w-full h-auto pb-10'>
                <HeroTypographyMolecule></HeroTypographyMolecule>
            </div>

            <div className='w-full flex flex-row mb-10
            md:mb-30'>
                <ButtonCenterGradient 
                label={'شروع کنید'}
                className='!px-5 !py-4 !text-sm !rounded-[0.5rem]
                lg:!px-8 lg:!py-4 lg:!text-sm'>
                </ButtonCenterGradient>

                <ButtonOutlined 
                className='!text-[0.9rem] !px-6 !rounded-[0.5rem] !mx-5
                lg:!text-sm lg:!px-8 lg:!py-3 lg:!mx-5'
                label={'مشاهده ترک ها'}>
                </ButtonOutlined>
            </div>
        </div>
        
        <div className='w-full flex items-center justify-center
        xl:w-[65%]
        2xl:w-[60%]
        lg:w-[60%]
        md:w-[53%] md:place-items-end
        sm:items-end sm:justify-end'>
            <HeroPicsMolecule></HeroPicsMolecule>
        </div>
        
        
    </div>
  )
}

export default Hero