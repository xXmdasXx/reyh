import React from 'react'
import HeaderTypographyLink from '../../global/atoms/HeaderTypographyLink/HeaderTypographyLink'

function HeaderLinkMolecule() {
  return (
    <div className='h-full flex flex-row'>
        
        <div className='w-auto h-full flex flex-row items-center'>
            <HeaderTypographyLink className='!w-auto !px-3 ' text='صفحه اصلی'></HeaderTypographyLink>
        </div>
        
        <div className='w-auto h-full flex flex-row items-center xl:mr-11 mr-4'>
            <HeaderTypographyLink className='!w-auto !px-3 ' text='محصولات'></HeaderTypographyLink>
        </div>   
        
        <div className='w-auto h-full flex flex-row items-center xl:mr-11 mr-4'>
            <HeaderTypographyLink className='!w-auto !px-3 ' text='هنرمندان'></HeaderTypographyLink>
        </div>   
        
        <div className='w-auto h-full flex flex-row items-center xl:mr-11 mr-4'>
            <HeaderTypographyLink className='!w-auto !px-3 ' text='اشتراک ها'></HeaderTypographyLink>
        </div>   
        
        <div className='w-auto h-full flex flex-row items-center xl:mr-11 mr-4'>
            <HeaderTypographyLink className='!w-auto !px-3 ' text='داشبورد'></HeaderTypographyLink>
        </div>   
        
        <div className='w-auto h-full flex flex-row items-center xl:mr-11 mr-4'>
            <HeaderTypographyLink className='!w-auto !px-3 ' text='درباره ما'></HeaderTypographyLink>
        </div>   
        
        
    </div>
  )
}

export default HeaderLinkMolecule