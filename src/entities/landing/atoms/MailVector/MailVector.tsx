import React from 'react'
import mailIcon from '../../../../../public/mailIcon.svg'
import Image from 'next/image'

function MailVector() {
  return (
    <div>
        <Image
        src={mailIcon}
        alt={'email'}
        width={18}
        height={100}></Image>
    </div>
  )
}

export default MailVector