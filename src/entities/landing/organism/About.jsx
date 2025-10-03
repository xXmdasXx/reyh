'use client'

import React from 'react'
import { motion } from 'framer-motion'
import AboutTypographyMolecule from '../molecules/AboutTypographyMolecule'
import TestimonialCard from './TestimonialCard'

function About() {
  return (
    <motion.div
      className='w-full h-[50rem] flex flex-row'
      initial={{ opacity: 0, y: 100 }}      
      whileInView={{ opacity: 1, y: 0 }}    
      transition={{ duration: 0.8, ease: "easeOut" }} 
      viewport={{ once: true }}             
    >
      <div className=' w-[45%] flex flex-col justify-center items-start px-5'>
        <AboutTypographyMolecule />
      </div>
      
      <div className='w-[55%] grid grid-cols-2 gap-4 pt-20 pl-5'>
        <div className='flex justify-center items-center relative h-[18rem] right-1 '>
          <TestimonialCard />
        </div>
        
        <div className='flex justify-end items-center relative h-[18rem] top-14'>
          <TestimonialCard />
        </div>

        <div className='flex justify-center items-center relative h-[18rem] bottom-20 right-1 '>
          <TestimonialCard />
        </div>
        
        <div className='flex justify-end items-center relative h-[18rem] bottom-6'>
          <TestimonialCard />
        </div>
      </div>
    </motion.div>
  )
}

export default About
