import React from 'react'
import band from '../../../../../public/bandAvatar.svg'
import Image from 'next/image'

function BandAvatar() {
  return (
    <div>
        <Image
        src={band}
        alt='band'
        width={500}>
        </Image>
    </div>
  )
}

export default BandAvatar