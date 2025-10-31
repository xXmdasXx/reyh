import React from 'react'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'
import { Button } from '@mui/material'


function AlbumCard({name,className}:any) {
  return (
    <div className={`px-3 flex flex-col  justify-center ${className}`}>
        <Button className='!w-[150px] !h-[150px] !bg-gradient-to-tr !from-[#35115F] !to-[#FF7344] !rounded-[15px]
        sm:!w-[180px] sm:!h-[180px]
        md:!w-[200px] md:!h-[200px]
        lg:!w-[210px] lg:!h-[210px]
        2xl:!w-[230px] 2xl:!h-[230px]'></Button>
        <TypographyAtom className='!mt-4 !text-[1rem] w-full
        sm:!text-[1.2rem]'>{name}</TypographyAtom>
    </div>
  )
}

export default AlbumCard