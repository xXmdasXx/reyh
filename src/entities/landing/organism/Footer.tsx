'use client'

import React from 'react'
import EchoraFooterMolecule from '../molecules/EchoraFooterMolecule'
import QuickAccessFooterMolecule from '../molecules/QuickAccessFooterMolecule'
import ContactUsFooterMolecule from '../molecules/ContactUsFooterMolecule'
import TrustFooterMolecule from '../molecules/TrustFooterMolecule'


function Footer() {
  return (
    <div className='w-full pb-10 px-10 max-w-[1536px] h-full flex flex-row'>
        
        <div className='w-[30%] h-full'>
            <EchoraFooterMolecule></EchoraFooterMolecule>
        </div>

        <div className='w-[20%] h-full'>
            <QuickAccessFooterMolecule></QuickAccessFooterMolecule>
        </div>

        <div className='w-[20%] h-full'>
            <ContactUsFooterMolecule></ContactUsFooterMolecule>
        </div>

        <div className='w-[30%] h-full'>
            <TrustFooterMolecule></TrustFooterMolecule>
        </div>
    </div>
  )
}

export default Footer