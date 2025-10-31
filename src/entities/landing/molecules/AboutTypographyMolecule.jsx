import React from 'react'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'

function AboutTypographyMolecule() {
  return (
    <div>
        <TypographyAtom 
        className='!text-4xl w-full py-5
        md:!text-5xl'
        sx={{
        filter: `drop-shadow(0 0 10px #FFFFFF)`
        }}>
            درباره <span className='!text-[#4D88FF]'>اکورا </span> چه
            
        </TypographyAtom>

        <TypographyAtom 
        className='!text-4xl w-full py-0
        md:!text-5xl md:py-2'
        sx={{
        filter: `drop-shadow(0 0 10px #FFFFFF)`
        }}>
            میگویند؟!
            
        </TypographyAtom>
        
        <TypographyAtom 
        className='!text-lg !text-white/60 !mt-7
        md:!text-xl
        xl:!mt-4'
        sx={{
        filter: `drop-shadow(0 0 10px #BC75CB)`
        }}>
            پلتفرمی برای تولید و فروش بیت‌های حرفه‌ای؛ 
            جایی که هنرمندها می‌تونن سریع، ساده و 
            مطمئن به ریتم و صدای اختصاصی خودشون 
            دست پیدا کنند پلتفرمی برای تولید و فروش
            بیت‌های حرفه‌ای
        </TypographyAtom>
    </div>
  )
}

export default AboutTypographyMolecule