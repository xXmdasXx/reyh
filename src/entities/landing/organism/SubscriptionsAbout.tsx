import React from 'react'
import BandAvatar from '../atoms/BandAvatar/BandAvatar'
import SubscriptionsTypography from '../molecules/SubscriptionsTypography'

function subscriptions() {
  return (
    <div className='w-full h-[35rem] flex flex-row'>
        <div className='w-[45%] h-full flex justify-center items-center'>
          <BandAvatar></BandAvatar>
        </div>
        <div className='w-[55%] h-full flex p-15 pt-35'>
          <SubscriptionsTypography></SubscriptionsTypography>
        </div>
    </div>
  )
}

export default subscriptions