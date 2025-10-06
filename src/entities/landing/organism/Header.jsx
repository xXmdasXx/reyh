import React from 'react'
import HeaderIconsMolecule from '../molecules/HeaderIconsMolecule'
import HeaderLinkMolecule from '../molecules/HeaderLinkMolecule'
import ButtonCenterGradient from '../../global/atoms/ButtonCenterGradient/ButtonCenterGradient'
import Logo from '../../global/atoms/Logo/Logo'

function HeaderOrganism() {
  return (
    <div className='w-full h-full flex justify-center'>
      <header className=' !flex !flex-row items-center h-24 px-5 2xl:max-w-[1536px] 2xl:w-full w-full '>
        
        <div className='h-full flex flex-row items-center xl:w-[7%] lg:w-[7%] w-[17%]'>
          <Logo></Logo>
        </div>
        
        <div className='h-full lg:flex lg:flex-row lg:items-center lg:justify-start xl:w-[65%] lg:w-[63%] hidden'>
          <HeaderLinkMolecule></HeaderLinkMolecule>
        </div>

        <div className='h-full flex flex-row items-center justify-end xl:w-[28%] lg:w-[30%] w-[83%]'>
          <HeaderIconsMolecule className='flex flex-row mx-3'></HeaderIconsMolecule>
          <ButtonCenterGradient label={'ورود / ثبت نام'} redirectTo={'/login'}></ButtonCenterGradient>
        </div>

      </header>
    </div>
  )
}

export default HeaderOrganism