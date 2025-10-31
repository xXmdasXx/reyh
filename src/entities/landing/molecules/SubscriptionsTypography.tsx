import React from 'react'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'

function SubscriptionsTypography() {
  return (
    <div>
        <TypographyAtom className='!text-[2rem]
        lg:!text-[2.5rem]'>
            اشتراک های <span className='text-[#4D88FF]'> اکورا</span>
        </TypographyAtom>
        
        <TypographyAtom className='!text-[2rem]
        lg:!text-[2.5rem]'>
             به درد کی میخوره؟؟
        </TypographyAtom>

        <TypographyAtom
        className='!text-[0.9rem] !mt-7 !text-white/60
        lg:!text-[1rem]'
        sx={{
            filter: `drop-shadow(0 0 10px #BC75CB)`
        }}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
            از طراحان گرافیک است. چاپگرها متن مصنوعی لازم می باشد ایپسوم متن
            ساختگی با تولید سادگی نامفهوم است
        </TypographyAtom>
    </div>
  )
}

export default SubscriptionsTypography