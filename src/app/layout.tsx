'use client'
import './globals.css'
import React from 'react'
import mui_theme from '../lib/MuiTheme'
import cacheRtl from '@/lib/MuiRtlCache'
import { ThemeProvider } from '@emotion/react'
import { CacheProvider } from '@emotion/react'
import useLockZoom from '@/lib/useLockZoom'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // ✅ هوک اینجا صدا زده میشه
  useLockZoom()

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={mui_theme.light}>
        <html lang="en" dir="rtl">
          <body>
                          
              <main className='flex flex-col bg-black'>{children}</main>
              
          </body>
        </html>
      </ThemeProvider>
    </CacheProvider>
  )
}