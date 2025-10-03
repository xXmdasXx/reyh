import React from 'react'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'

function PlansTypographyMolecule() {
  return (
    <div className='!text-center'>
        <TypographyAtom 
        className='!text-[2.5rem]'
        sx={{
            filter: `drop-shadow(0 0 10px rgba(188, 117, 203, 0.3))`
        }}
        >به دنیای بیت ها وارد شو!
        </TypographyAtom>
        
        <TypographyAtom 
        className='!mt-3 !text-[1.2rem] !text-white/60'
        sx={{
            filter: `drop-shadow(0 0 10px #BC75CB)`
        }}
        >پلتفرمی برای تولید و فروش بیت‌های حرفه‌ای؛ جایی که هنرمندها
        </TypographyAtom>
    </div>
  )
}

export default PlansTypographyMolecule