import React from 'react'
import Header from '../../entities/landing/organism/Header'
import Footer from '@/entities/landing/organism/Footer'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#030216] to-[#35115F]/50 overflow-x-hidden">
      
      {/* Header */}
      <div className="w-full max-w-[1536px] mx-auto">
        <Header />
      </div>

      {/* Children */}
      <main className="w-full max-w-[1536px] mx-auto">
        {children}
      </main>

      {/* Footer */}
      <div className="w-full bg-gradient-to-tl from-[#030216]/50 to-[#04032A]/50 mx-auto flex justify-center">
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Layout
