'use client'

import React from 'react'
import EchoraFooterMolecule from '../molecules/EchoraFooterMolecule'
import QuickAccessFooterMolecule from '../molecules/QuickAccessFooterMolecule'
import ContactUsFooterMolecule from '../molecules/ContactUsFooterMolecule'
import TrustFooterMolecule from '../molecules/TrustFooterMolecule'


function Footer() {
  return (
    <div className='w-full pb-10 max-w-[1536px] h-full flex flex-col
    lg:flex-row'>
        
        <div className='w-[100%] h-full 
        lg:w-[45%]'>
            <EchoraFooterMolecule></EchoraFooterMolecule>
        </div>
        
        <div className='flex flex-col w-[100%]
        sm:flex-row'>
            <div className='w-full h-full 
            sm:w-1/3
            lg:w-[30%]'>
                <QuickAccessFooterMolecule></QuickAccessFooterMolecule>
            </div>

            <div className='w-full h-full 
            sm:w-1/3
            lg:w-[35%]'>
                <ContactUsFooterMolecule></ContactUsFooterMolecule>
            </div>

            <div className='w-full h-full 
            sm:w-1/3
            lg:w-[35%]'>
                <TrustFooterMolecule></TrustFooterMolecule>
            </div>
        </div>
        
    </div>
  )
}

export default Footer