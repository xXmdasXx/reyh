import React from 'react'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'

function EchoraFooterMolecule() {
  return (
    <div className='flex flex-col px-10 pt-20
    lg:px-20'>
        
        <TypographyAtom className='!text-3xl'>اکورا</TypographyAtom>
        
        <TypographyAtom className='!mt-5'>لورم ایپسوم متن ساختگی با تولید سادگی 
        نامفهوم از صنعت چاپ و با استفاده از
        طراحان گرافیک است. چاپگرها لازم است.با 
        استفاده از طراحان گرافیک است</TypographyAtom>

        <TypographyAtom className='!mt-10'>© کپی رایت 1404</TypographyAtom>
    </div>
  )
}

export default EchoraFooterMolecule