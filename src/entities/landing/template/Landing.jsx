import React from 'react'
import Hero from '../organism/Hero'
import About from '../organism/About'
import Features from '../organism/Features'
import Plans from '../organism/Plans'


function landing() {
  return (
    <div className='flex flex-col justify-center'>
        <Hero></Hero>
        <About></About>
        <Features></Features>
        <Plans></Plans>

    </div>
  )
}

export default landing