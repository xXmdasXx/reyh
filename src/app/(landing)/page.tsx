import React from 'react'
import Landing from '../../entities/landing/template/Landing'

export const metadata = {
  title: "اکورا",
};

function page() {
  return (
    <div className='w-full '>
      <div className='w-full h-auto'>
          <Landing></Landing>
      </div>
    </div>
    
  )
}

export default page