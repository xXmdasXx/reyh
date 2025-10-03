import React from 'react'
import TypographyAtom from '../../global/atoms/Typography/TypographyAtom'

function HeroTypographyMolecule({...props}) {
  return (
    <div {...props}>
        <TypographyAtom 
        className='!text-5xl' 
        sx={{
            filter: `drop-shadow(0 0 10px #BC75CB)`
        }}>
            از ایده تا <span className='!text-[#B020D5]'>ترک</span> بعدی‌ات
        </TypographyAtom>

        <TypographyAtom 
        className='!text-xl !mt-7 !text-white/60'
        sx={{
            filter: `drop-shadow(0 0 10px #BC75CB)`
        }}>
                پلتفرمی برای تولید و فروش بیت‌های حرفه‌ای؛ جایی که <br />
                هنرمندها می‌تونن سریع، ساده و مطمئن به ریتم و صدای <br />
                اختصاصی خودشون دست پیدا کنن
        </TypographyAtom>
    </div>
  )
}

export default HeroTypographyMolecule