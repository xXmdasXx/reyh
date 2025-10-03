import React from 'react'
import Image from 'next/image'
import star from '../../../../../public/starVector.svg'

function StarVector() {
  return (
    <div>
        <Image
        src={star}
        alt={'Star'}
        width={40}
        height={100}></Image>
    </div>
  )
}

export default StarVector