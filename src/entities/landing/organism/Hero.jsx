import React from 'react'
import HeroPicsMolecule from '../molecules/HeroPicsMolecule'
import HeroTypographyMolecule from '../molecules/HeroTypographyMolecule'
import ButtonCenterGradient from '@/entities/global/atoms/ButtonCenterGradient/ButtonCenterGradient'
import ButtonOutlined from '@/entities/global/atoms/ButtonOutlined/ButtonOutlined'

function Hero() {
  return (
    <div className=' h-[50rem] w-full flex flex-row'>
        
        <div className='w-[40%] flex flex-col items-start justify-center px-5'>
            <div className='w-full h-auto pb-10'>
                <HeroTypographyMolecule></HeroTypographyMolecule>
            </div>

            <div className='w-full flex flex-row mb-30'>
                <ButtonCenterGradient 
                label={'شروع کنید'}
                className='!px-8 !py-4 !text-sm !rounded-[0.5rem]'>
                </ButtonCenterGradient>

                <ButtonOutlined 
                className='!text-sm !px-8 !py-3 !rounded-[0.5rem] !mx-5'
                label={'مشاهده ترک ها'}>
                </ButtonOutlined>
            </div>
        </div>
        
        <div className=' w-[60%]'>
            <HeroPicsMolecule></HeroPicsMolecule>
        </div>
        
        
    </div>
  )
}

export default Hero