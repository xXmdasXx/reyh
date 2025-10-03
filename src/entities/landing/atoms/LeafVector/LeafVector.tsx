import React from 'react'
import Image from 'next/image'
import leaf from '../../../../../public/leafVector.svg'

function leafVector() {
  return (
    <div>
        <Image
        src={leaf}
        alt={'leaf'}
        width={36}
        height={100}></Image>
    </div>
  )
}

export default leafVector