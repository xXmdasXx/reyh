import React from 'react'
import mixerIcon from '../../../../../public/mixer.png'
import Image from 'next/image'

function MixerIcon({width,...props}) {
  return (
    <div {...props}>
        <Image
        src={mixerIcon}
        alt='Concert'
        width={width}
        height={100}>
            
        </Image>
    </div>
  )
}

export default MixerIcon