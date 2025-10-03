import React from 'react'
import Image from 'next/image'
import checkCircle from '../../../../../public/checkCircle.svg'

function CheckCircle() {
  return (
    <div>
        <Image
        src={checkCircle}
        alt={'Check Circle'}
        width={29}
        height={100}></Image>

    </div>
  )
}

export default CheckCircle