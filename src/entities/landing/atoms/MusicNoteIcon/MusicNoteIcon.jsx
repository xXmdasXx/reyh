import React from 'react'
import Image from 'next/image'
import musicNote from '../../../../../public/musicNote.png'

function MusicNoteIcon({className='',...props}) {
  return (
    <div className={`relative ${className}`} {...props}>
      <Image
        src={musicNote}
        alt='Music Cassette'
        fill
        className="object-contain"
      />
    </div>
  )
}

export default MusicNoteIcon