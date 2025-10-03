import React from 'react'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'

function AboutTypographyMolecule() {
  return (
    <div>
        <TypographyAtom 
        className='!text-5xl w-full py-5'
        sx={{
        filter: `drop-shadow(0 0 10px #FFFFFF)`
        }}>
            درباره <span className='!text-[#4D88FF]'>اکورا </span> چه
            
        </TypographyAtom>

        <TypographyAtom 
        className='!text-5xl w-full py-2'
        sx={{
        filter: `drop-shadow(0 0 10px #FFFFFF)`
        }}>
            میگویند؟!
            
        </TypographyAtom>
        
        <TypographyAtom 
        className='!text-xl !text-white/60 !mt-4'
        sx={{
        filter: `drop-shadow(0 0 10px #BC75CB)`
        }}>
            پلتفرمی برای تولید و فروش بیت‌های حرفه‌ای؛ <br />
            جایی که هنرمندها می‌تونن سریع، ساده و <br />
            مطمئن به ریتم و صدای اختصاصی خودشون <br />
            دست پیدا کنند پلتفرمی برای تولید و فروش <br />
            بیت‌های حرفه‌ای
        </TypographyAtom>
    </div>
  )
}

export default AboutTypographyMolecule