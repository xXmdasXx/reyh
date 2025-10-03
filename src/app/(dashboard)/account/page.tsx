// src/app/(dashboard)/account/page.tsx
'use client'
import React, { useEffect, useState } from 'react'
import Account from '@/entities/profile/organisms/Account/Account'
import { useRouter } from 'next/navigation'

function AccountPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // چک کردن توکن
    const token = localStorage.getItem('token')
    
    if (!token) {
      // اگر توکن نبود به صفحه noplan برو
      router.push('/noplan')
    } else {
      // اگر توکن بود صفحه را نمایش بده
      setIsAuthenticated(true)
    }
    
    setIsLoading(false)
  }, [router])

  // در حین بررسی توکن چیزی نمایش نده
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-white">در حال بارگذاری...</p>
      </div>
    )
  }

  // اگر authenticated نبود چیزی نمایش نده (چون redirect شده)
  if (!isAuthenticated) {
    return null
  }

  return (
    <div>
      <Account />
    </div>
  )
}

export default AccountPage