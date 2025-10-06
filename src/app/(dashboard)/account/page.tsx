'use client'
import React, { useEffect, useState } from 'react'
import Account from '@/entities/profile/organisms/Account/Account'
import { useRouter } from 'next/navigation'

function AccountPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    
    if (!token) {
      router.push('/noplan')
    } else {
      setIsAuthenticated(true)
    }
    
    setIsLoading(false)
  }, [router])

  // تغییر title
  useEffect(() => {
    if (isAuthenticated) {
      document.title = "حساب کاربری"
    }
  }, [isAuthenticated])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-white">در حال بارگذاری...</p>
      </div>
    )
  }

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
