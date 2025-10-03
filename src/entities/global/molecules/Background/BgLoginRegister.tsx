// molecules/BgLoginRegister.tsx
import React from 'react'
import BackGroundBubble from '../../atoms/BackGround/BackGroundBubble'


interface BgLoginRegisterProps {
  children?: React.ReactNode;
}


function BgLoginRegister({ children }: any) { // اضافه کردن prop children
  return (
    <div className='relative w-screen h-screen overflow-hidden'>
        <div className='w-full h-full bg-[#030234] flex flex-col items-center justify-center'>
            <BackGroundBubble 
            className='
            !bg-linear-to-l 
            absolute top-[-3rem] 
            right-[-5rem] 
            md:right-[-8rem]
            animate-rotate-medium-reverse'>
            </BackGroundBubble>
            
            <BackGroundBubble 
            className='
            invisible 
            md:visible 
            !bg-linear-to-t 
            absolute 
            top-[-8rem] 
            right-[6rem]
            animate-rotate-slow'>
            </BackGroundBubble>
            
            <BackGroundBubble 
            className='
            invisible 
            !bg-linear-to-tr 
            absolute 
            bottom-[3rem] 
            left-[3rem] 
            translate-y-1/2 
            md:visible
            animate-rotate-medium-reverse'>
            </BackGroundBubble>
            
            <BackGroundBubble 
            className='
            !bg-linear-to-bl 
            absolute 
            bottom-[8rem] 
            left-[-6rem] 
            md:left-[-11rem] 
            translate-y-1/2
            animate-rotate-slow'>
            </BackGroundBubble>



            {/* اضافه کردن children */}
            <div className="
            absolute 
            inset-0 
            flex 
            items-center 
            justify-center">

              {children}
            </div>
        </div>
    </div>
  )
}

export default BgLoginRegister