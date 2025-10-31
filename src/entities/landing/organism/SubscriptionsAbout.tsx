import React from 'react'
import BandAvatar from '../atoms/BandAvatar/BandAvatar'
import SubscriptionsTypography from '../molecules/SubscriptionsTypography'

function subscriptions() {
  return (
    <div className='w-full h-auto py-10 flex flex-col-reverse
    md:flex-row'>
        <div className='w-full h-full flex justify-center items-center
        md:w-[45%]'>
          <BandAvatar className='w-[20rem] h-[20rem]
          md:w-[24rem] md:h-[24rem]
          lg:w-[27rem] lg:h-[27rem]
          xl:w-[32rem] xl:h-[32rem]'></BandAvatar>
        </div>
        <div className='w-full h-full flex p-10 pt-1
        md:w-[55%] md:p-15 md:pt-19
        lg:pt-35
        xl:pl-[10rem]'>
          <SubscriptionsTypography></SubscriptionsTypography>
        </div>
    </div>
  )
}

export default subscriptions