import React from 'react'
import TrustIcon from '../atoms/TrustIcon/TrustIcon'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'
import Link from 'next/link'

function TrustFooterMolecule() {
  return (
    <div className='w-full h-auto !flex !flex-col !items-start pt-10 pr-10
    sm:pr-0
    lg:!items-center lg:pt-20'>
        <TypographyAtom className='!text-xl
        lg:text-2xl'>نماد اعتماد الکترونیکی</TypographyAtom>
        <Link href={'#'} className='mt-5'><TrustIcon width={200}></TrustIcon></Link>
    </div>
  )
}

export default TrustFooterMolecule