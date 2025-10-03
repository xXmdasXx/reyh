import React from 'react'
import mixManIcon from '../../../../../public/mixMan.png'
import Image from 'next/image'

function MixManIcon({width,...props}) {
  return (
    <div {...props}>
        <Image
        src={mixManIcon}
        alt='Concert'
        width={width}
        height={100}>
            
        </Image>
    </div>
  )
}

export default MixManIcon