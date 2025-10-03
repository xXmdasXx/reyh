import React from 'react'
import Image from 'next/image'
import musicCassette from '../../../../../public/musicCassette.png'

function MusicCassetteIcon({...props}) {
  return (
    <div {...props}>
        <Image
        src={musicCassette}
        alt='Music Note'
        width={616}
        height={655}
        >
        </Image>
    </div>
  )
}

export default MusicCassetteIcon