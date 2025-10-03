import React from 'react'
import instagramIcon from '../../../../../public/instagramIcon.svg'
import Image from 'next/image'

function InstagramVector() {
  return (
    <div>
        <Image
        src={instagramIcon}
        alt={'instagram'}
        width={18}
        height={100}></Image>
    </div>
  )
}

export default InstagramVector