import React from 'react'
import band from '../../../../../public/bandAvatar.svg'
import Image from 'next/image'

function BandAvatar({className = '', ...props}:any) {
  return (
    <div className={`relative ${className}`} {...props}>
        <Image
        src={band}
        alt='band'
        fill
        className="object-contain"
        >
        </Image>
    </div>
  )
}

export default BandAvatar