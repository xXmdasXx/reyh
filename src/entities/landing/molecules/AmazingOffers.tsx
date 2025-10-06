import React from 'react'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'

function AmazingOffers() {
  return (
    <div>
        <TypographyAtom
        className='!text-[2.5rem] flex justify-center pt-10 !text-white'
        sx={{
            filter: `drop-shadow(0 0 10px #BC75CB)`}}
        >
            پیشنهاد هایی شگفت آور
        </TypographyAtom>

        <TypographyAtom 
        className='!text-[1rem] flex !mt-2 justify-center !text-white/60'
        sx={{
            filter: `drop-shadow(0 0 10px #BC75CB)`
        }}>
            پلتفرمی برای تولید و فروش بیت‌های حرفه‌ای؛ جایی که هنرمندها
        </TypographyAtom>
    </div>
  )
}

export default AmazingOffers