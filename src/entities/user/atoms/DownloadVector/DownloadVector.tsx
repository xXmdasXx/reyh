import React from 'react'
import Image from 'next/image'
import download from '../../../../../public/downloadVector.svg'


function DownloadVector({...props}) {
  return (
    <div {...props}>
        <Image
        src={download}
        alt='download'
        width={11}></Image>
    </div>
  )
}

export default DownloadVector