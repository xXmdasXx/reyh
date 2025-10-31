'use client'

import React, { useState, useEffect } from 'react'
import { SwipeableDrawer, IconButton, Box, Typography } from '@mui/material'
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material'
import TotalCard from '../../molecules/TotalCard/TotalCard'

function Total() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }
    setIsOpen(open)
  }

  // Desktop version - fixed positioning
  if (!isMobile) {
    return (
      <div className='fixed bottom-0 left-0 right-0 w-full z-50
      md:relative md:w-[42%]
      lg:w-[35%]
      xl:w-[30%] md:bottom-auto md:left-auto md:right-0 md:top-0'>
        <div className='md:flex md:items-end md:pb-4'>
          <div className='w-full'>
            <TotalCard />
          </div>
        </div>
      </div>
    )
  }

  // Mobile version - SwipeableDrawer
  return (
    <>
      {/* View Total Button - with smooth transitions */}
      <div 
        className='fixed bottom-0 left-0 right-0 z-50 md:hidden'
        style={{
          transform: isOpen ? 'translateY(100%)' : 'translateY(0)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#1e3a8a', // blue-950 equivalent
            borderRadius: '16px 16px 0 0',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.15)',
            cursor: 'pointer',
          }}
          onClick={toggleDrawer(true)}
        >
          <IconButton
            sx={{
              color: 'white',
              padding: '4px',
            }}
          >
            <KeyboardArrowUp />
          </IconButton>
          <Typography
            sx={{
              color: 'white',
              fontWeight: 500,
              fontSize: '16px',
              marginLeft: '8px',
            }}
          >
            مشاهده جمع کل
          </Typography>
        </Box>
      </div>

      {/* SwipeableDrawer */}
      <SwipeableDrawer
        anchor="bottom"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableSwipeToOpen={false}
        swipeAreaWidth={56}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            borderRadius: '20px 20px 0 0',
            maxHeight: '80vh',
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: 'transparent',
            padding: '8px 0',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* Drag handle */}
          <Box
            sx={{
              width: '40px',
              height: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              borderRadius: '2px',
              cursor: 'grab',
              '&:active': {
                cursor: 'grabbing',
              },
            }}
          />
        </Box>
        
        {/* Close button */}
        <Box
          sx={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            zIndex: 1,
          }}
        >
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <KeyboardArrowDown />
          </IconButton>
        </Box>

        {/* TotalCard content */}
        <TotalCard />
      </SwipeableDrawer>
    </>
  )
}

export default Total