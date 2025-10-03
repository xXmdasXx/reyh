import React from 'react'
import TextLink from '@/entities/global/atoms/Link/TextLink'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'

function QuickAccessFooterMolecule() {
  return (
    <div className='flex flex-col p-20'>
        
        <TypographyAtom className='!text-xl'>دسترسی سریع</TypographyAtom>

        <TextLink href='#' className='!text-white !mt-4'>محصولات</TextLink>
        <TextLink href='#' className='!text-white !mt-4'>اشتراک ها</TextLink>
        <TextLink href='#' className='!text-white !mt-4'>قوانین و مقررات</TextLink>
        <TextLink href='#' className='!text-white !mt-4'>حریم شخصی</TextLink>
    </div>
  )
}

export default QuickAccessFooterMolecule