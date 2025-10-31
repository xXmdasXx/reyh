'use client'
import React, { useState, useEffect } from 'react'
import HeaderIconsMolecule from '../molecules/HeaderIconsMolecule'
import HeaderLinkMolecule, { headerLinks } from '../molecules/HeaderLinkMolecule'
import ButtonCenterGradient from '../../global/atoms/ButtonCenterGradient/ButtonCenterGradient'
import Logo from '../../global/atoms/Logo/Logo'
import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material'
import { IconButton, Menu, MenuItem } from '@mui/material'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function HeaderOrganism() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const router = useRouter()
  
  const open = Boolean(anchorEl)

  useEffect(() => {
    setMounted(true)
    const checkAuth = () => {
      const token = localStorage.getItem('token')
      setIsAuthenticated(!!token)
    }
    
    checkAuth()
    const handleStorageChange = (e) => {
      if (e.key === 'token') checkAuth()
    }
    window.addEventListener('storage', handleStorageChange)

    const handleAuthChange = () => checkAuth()
    window.addEventListener('authStateChanged', handleAuthChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('authStateChanged', handleAuthChange)
    }
  }, [])

  const handleProfileClick = () => router.push('/account')
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget)
  const handleMenuClose = () => setAnchorEl(null)

  if (!mounted) return null

  return (
    <div className='w-full h-full flex justify-center'>
      <header className='flex flex-row items-center h-24 px-5 2xl:max-w-[1536px] w-full bg-transparent'>

        {/* Hamburger Menu Icon - Mobile Only */}
        <div className='h-full flex flex-row items-center justify-start lg:hidden w-9'>
          <IconButton
            className='relative left-3 bottom-0.5' 
            onClick={handleMenuOpen}
            aria-controls={open ? 'mobile-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            sx={{ 
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            <MenuIcon sx={{ fontSize: 28 }} />
          </IconButton>

          <Menu
            id="mobile-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            MenuListProps={{ 'aria-labelledby': 'mobile-menu-button' }}
            sx={{
              '& .MuiPaper-root': {
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                color: 'white',
                minWidth: '200px',
              },
            }}
          >
            {headerLinks.map((link, index) => (
              <MenuItem 
                key={index} 
                onClick={handleMenuClose}
                sx={{
                  justifyContent: 'center',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <Link href={link.href} className="w-full text-center my-2">
                  {link.text}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </div>

        {/* Logo Section */}
        <div className='h-full flex flex-row items-center xl:w-[7%] lg:w-[7%] w-[10%]'>
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className='h-full lg:flex lg:flex-row lg:items-center lg:justify-start xl:w-[65%] lg:w-[63%] hidden'>
          <HeaderLinkMolecule />
        </div>

        {/* Icons + Auth Button */}
        <div className='h-full flex flex-row items-center justify-end xl:w-[28%] lg:w-[34%] md:w-[90%] w-[90%]'>
          <HeaderIconsMolecule className='flex flex-row mx-3' />
          
          {isAuthenticated ? (
            <ButtonCenterGradient 
              label={'حساب کاربری'} 
              redirectTo={'/account'}
              className='!px-7 !py-2 !pt-3 !rounded-[1rem]'
            ></ButtonCenterGradient>
          ) : (
            <ButtonCenterGradient label={'ورود / ثبت نام'} redirectTo={'/login'} />
          )}
        </div>

      </header>
    </div>
  )
}

export default HeaderOrganism
