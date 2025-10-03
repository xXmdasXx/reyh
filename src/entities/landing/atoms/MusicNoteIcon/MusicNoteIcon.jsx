import React from 'react'
import Image from 'next/image'
import musicNote from '../../../../../public/musicNote.png'

function MusicNoteIcon({...props}) {
  return (
    <div {...props}>
        <Image
        src={musicNote}
        alt='Music Note'
        width={407}
        height={458}
        >
        </Image>
    </div>
  )
}

export default MusicNoteIcon