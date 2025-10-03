'use client'

import React from 'react'
import { Typography, useTheme } from '@mui/material'

function Logo() {

    const theme = useTheme()

  return (
    <div>
        <Typography
        className='!text-[1.2rem]'
        sx={{
            filter: `drop-shadow(0 0 10px #BC75CB)`
        }}>اکورا</Typography>
    </div>
  )
}

export default Logo