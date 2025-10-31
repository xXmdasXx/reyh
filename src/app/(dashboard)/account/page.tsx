// src/app/(dashboard)/account/page.tsx
'use client'

import React, { useEffect } from 'react'
import Account from '@/entities/profile/organisms/Account/Account'
import ProtectedRoute from '@/entities/global/molecules/ProtectedRoute/ProtectedRoute'
import MegaBlob from '@/entities/profile/molecules/dashBG/dashboardBG' // مسیر فایل bg



export default function AccountPage() {
  useEffect(() => {
    document.title = "حساب کاربری"
  }, [])

  return (
    <div className="relative">
      
      

      {/* محتوای اصلی */}
      <div className="relative z-10">
        <ProtectedRoute requireSubscription={false}>
          <Account />
        </ProtectedRoute>
      </div>
    </div>
  )
}
