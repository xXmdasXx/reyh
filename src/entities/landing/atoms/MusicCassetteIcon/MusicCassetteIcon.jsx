import React from 'react'
import Image from 'next/image'
import musicCassette from '../../../../../public/musicCassette.png'

function MusicCassetteIcon({ className = '', ...props }) {
  return (
    <div className={`relative ${className}`} {...props}>
      <Image
        src={musicCassette}
        alt='Music Cassette'
        fill
        className="object-contain"
      />
    </div>
  )
}


export default MusicCassetteIcon