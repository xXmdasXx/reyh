'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Header from '../../entities/landing/organism/Header'
import Footer from '@/entities/landing/organism/Footer'
import MegaBlob from '@/entities/global/molecules/MegaBlobBg/MegaBlobBg'

function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isCartPage = pathname === '/cart'

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-[#030216]">
      
      <div className="fixed inset-0 z-0 w-full h-full overflow-hidden">
        <div className="relative inset-0 w-full h-full scale-150 md:scale-100">
          <MegaBlob />
        </div>
      </div>

      {/* Header */}
      <div className="w-full max-w-[1536px] mx-auto z-10
      md:px-10">
        <Header />
      </div>

      {/* Children */}
      <main className="w-full max-w-[1536px] mx-auto z-10
      md:px-10 ">
        {children}
      </main>

      {/* Footer */}
      <div className={`w-full bg-gradient-to-tl from-[#030216]/50 to-[#04032A]/50 mx-auto flex justify-center z-10 ${isCartPage ? 'hidden md:flex' : ''}`}>
        <Footer></Footer>
      </div>

    </div>
  )
}

export default Layout