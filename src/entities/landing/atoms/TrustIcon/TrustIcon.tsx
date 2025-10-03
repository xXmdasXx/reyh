import React from 'react'
import Image from 'next/image'
import trust from '../../../../../public/trustIcon.svg'

function TrustIcon({className}:any) {
  return (
    <div className={className}>
        <Image
        src={trust}
        alt={'Trust'}
        width={200}
        height={100}></Image>
    </div>
  )
}

export default TrustIcon