import React from 'react'
import Image from 'next/image'
import profile from '../../../../../public/deafultProfile.svg'

function DeafultProfile({...props}) {
  return (
    <div {...props}>
        <Image
        src={profile}
        alt='profile'
        width={166}>

        </Image>
    </div>
  )
}

export default DeafultProfile