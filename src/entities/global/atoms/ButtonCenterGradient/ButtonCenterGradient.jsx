'use client'

import React from 'react'
import { Button, useTheme } from '@mui/material'
import { useRouter } from 'next/navigation'

function ButtonCenterGradient({ label, redirectTo, ...props }) {
  const theme = useTheme()
  const router = useRouter()

  const handleClick = () => {
    if (redirectTo) {
      router.push(redirectTo) // انتقال به مسیر جدید
    }
    if (props.onClick) {
      props.onClick() // اگه بخوای یه فانکشن دیگه هم اضافه کنی
    }
  }

  return (
    <div>
      <Button
        variant='contained'
        className='!px-7 !py-2 !pt-3 !rounded-[1rem]'
        sx={{
          background: `${theme.palette.secondary.light}`,
          filter: `drop-shadow(0 0 1px ${theme.palette.primary.light}) drop-shadow(0 0 10px ${theme.palette.secondary.light})`,
          transition: 'all 0.3s ease',
          '&:hover': {
            filter: `drop-shadow(0 0 1px ${theme.palette.secondary.light}) drop-shadow(0 0 12px ${theme.palette.secondary.light})`,
          },
        }}
        onClick={handleClick}
        {...props}
      >
        {label}
      </Button>
    </div>
  )
}

export default ButtonCenterGradient
