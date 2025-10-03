import React from 'react'
import concertIcon from '../../../../../public/concert.png'
import Image from 'next/image'

function ConcertIcon({width,...props}) {
  return (
    <div {...props}>
        <Image
        src={concertIcon}
        alt='Concert'
        width={width}
        height={100}>
            
        </Image>
    </div>
  )
}

export default ConcertIcon