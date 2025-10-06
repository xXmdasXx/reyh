import React from 'react'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'

function SubscriptionsTypography() {
  return (
    <div>
        <TypographyAtom className='!text-[2.5rem]'>
            اشتراک های <span className='text-[#4D88FF]'> اکورا</span>
        </TypographyAtom>
        
        <TypographyAtom className='!text-[2.5rem]'>
             به درد کی میخوره؟؟
        </TypographyAtom>

        <TypographyAtom
        className='!text-[1rem] !mt-7 !text-white/60'
        sx={{
            filter: `drop-shadow(0 0 10px #BC75CB)`
        }}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده <br />
            از طراحان گرافیک است. چاپگرها متن مصنوعی لازم می باشد ایپسوم متن <br/>
            ساختگی با تولید سادگی نامفهوم است
        </TypographyAtom>
    </div>
  )
}

export default SubscriptionsTypography