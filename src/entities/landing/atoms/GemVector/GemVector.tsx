import React from 'react'
import Image from 'next/image'
import gem from '../../../../../public/gemVector.svg'

function GemVector() {
  return (
    <div>
        <Image
        src={gem}
        alt={'Gem'}
        width={40}
        height={100}></Image>
    </div>
  )
}

export default GemVector