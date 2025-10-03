import React from 'react'
import phoneIcon from '../../../../../public/phoneIcon.svg'
import Image from 'next/image'

function PhoneVector() {
  return (
    <div>
        <Image
        src={phoneIcon}
        alt={'Phone'}
        width={18}
        height={100}></Image>
    </div>
  )
}

export default PhoneVector