import React from 'react'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'
import InstagramVector from '../atoms/InstagramVector.tsx/InstagramVector'
import MailVector from '../atoms/MailVector/MailVector'
import PhoneVector from '../atoms/PhoneVector/PhoneVector'

function ContactUsFooterMolecule() {
  return (
    <div className='flex flex-col pt-20 pr-20'>
        <TypographyAtom className='!text-xl'>ارتباط با ما</TypographyAtom>

        <div className='flex flex-row mt-4'>
            <InstagramVector></InstagramVector>
            <TypographyAtom className='!mr-2 !text-sm'>Echora_PNS</TypographyAtom>
        </div>
        
        <div className='flex flex-row mt-4'>
            <MailVector></MailVector>
            <TypographyAtom className='!mr-2 !text-sm'>sample@gmail.com</TypographyAtom>
        </div>
        
        <div className='flex flex-row mt-4'>
            <PhoneVector></PhoneVector>
            <TypographyAtom className='!mr-2 !text-sm'>01333333333</TypographyAtom>
        </div>

    </div>
  )
}

export default ContactUsFooterMolecule