'use client'

import React from 'react'
import { motion } from 'framer-motion'
import AboutTypographyMolecule from '../molecules/AboutTypographyMolecule'
import TestimonialCard from './TestimonialCard'

function About() {
  return (
    <motion.div
      className='w-full h-auto flex flex-col
      xl:flex-row'
      initial={{ opacity: 0, y: 100 }}      
      whileInView={{ opacity: 1, y: 0 }}    
      transition={{ duration: 0.8, ease: "easeOut" }} 
      viewport={{ once: true }}             
    >
      <div className='w-full flex flex-col justify-center items-start px-5 
      xl:w-[35%]
      2xl:w-[40%]'>
        <AboutTypographyMolecule />
      </div>
      
      <div className='w-full grid grid-cols-1 gap-4 pt-5 pl-5 h-auto place-items-center px-5 pb-30 mt-5
      sm:grid-cols-2 sm:h-[50rem] sm:place-items-stretch sm:pb-0
      xl:w-[85%] xl:pt-20
      2xl:w-[60%]'>
        <div className='flex justify-center items-center relative h-auto w-full
        sm:right-3 sm:justify-end sm:items-center sm:w-auto sm:ml-1
        xl:right-3 xl:w-auto xl:justify-center 
        md:h-[18rem]'>
          <TestimonialCard />
        </div>
        
        <div className='flex justify-center items-center relative h-auto mt-2 w-full
        sm:top-14 sm:justify-start sm:items-center sm:mt-0 sm:w-auto sm:mr-1
        xl:top-14 xl:w-auto xl:justify-end 
        md:h-[18rem] md:mr-0'>
          <TestimonialCard />
        </div>

        <div className='flex justify-center items-center relative h-auto mt-2 w-full 
        sm:bottom-20 sm:right-3 sm:justify-end sm:items-center sm:w-auto sm:mt-5 sm:ml-1
        xl:bottom-20 xl:right-3 xl:w-auto xl:justify-center 
        md:h-[18rem] md:mt-0'>
          <TestimonialCard />
        </div>
        
        <div className='flex justify-center items-center relative h-auto mt-2 w-full
        sm:bottom-6 sm:justify-start sm:items-center sm:w-auto sm:mt-5 sm:mr-1
        xl:bottom-6 xl:w-auto xl:justify-end 
        md:h-[18rem] md:mt-0 md:mr-0'>
          <TestimonialCard />
        </div>
      </div>
    </motion.div>
  )
}

export default About
