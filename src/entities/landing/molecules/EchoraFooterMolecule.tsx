import React from 'react'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'

function EchoraFooterMolecule() {
  return (
    <div className='flex flex-col p-20'>
        
        <TypographyAtom className='!text-3xl'>اکورا</TypographyAtom>
        
        <TypographyAtom className='!mt-5'>لورم ایپسوم متن ساختگی با تولید سادگی <br />
        نامفهوم از صنعت چاپ و با استفاده از<br />
        طراحان گرافیک است. چاپگرها لازم است.با <br />
        استفاده از طراحان گرافیک است</TypographyAtom>

        <TypographyAtom className='!mt-10'>© کپی رایت 1404</TypographyAtom>
    </div>
  )
}

export default EchoraFooterMolecule