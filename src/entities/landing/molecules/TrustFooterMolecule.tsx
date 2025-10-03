import React from 'react'
import TrustIcon from '../atoms/TrustIcon/TrustIcon'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'
import Link from 'next/link'

function TrustFooterMolecule() {
  return (
    <div className='w-full h-full !flex !flex-col !items-center pt-20'>
        <TypographyAtom className='!text-2xl'>نماد اعتماد الکترونیکی</TypographyAtom>
        <Link href={'#'} className='mt-5'><TrustIcon></TrustIcon></Link>
    </div>
  )
}

export default TrustFooterMolecule