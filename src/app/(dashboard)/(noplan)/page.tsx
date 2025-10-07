// src/app/(dashboard)/dashboard/page.tsx
'use client'
import React, { useEffect, useState } from 'react'
import Dashboard from '@/entities/profile/organisms/dashboard/Dashboard'
import Typography from '@/entities/global/atoms/Typography/TypographyAtom'
import Link from '@/entities/global/atoms/Link/TextLink'
import { isAuthenticated } from '@/lib/Axios'
import { useRouter } from 'next/navigation'

function DashboardPage() {
  const router = useRouter()
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [hasSubscription, setHasSubscription] = useState(false)

  useEffect(() => {
    // چک کردن احراز هویت
    const checkAuth = () => {
      const authenticated = isAuthenticated()
      setIsAuth(authenticated)
      
      if (!authenticated) {
        router.push('/login')
        return
      }

      // چک کردن اشتراک کاربر
      const user = localStorage.getItem('user')
      if (user) {
        try {
          const userData = JSON.parse(user)
          // اگر کاربر اشتراک دارد و تاریخ انقضا معتبر است
          if (userData.subscription && userData.subscription !== 'Free') {
            const expiryDate = new Date(userData.subscription_expires_at)
            const today = new Date()
            setHasSubscription(expiryDate > today)
          } else {
            setHasSubscription(false)
          }
        } catch (error) {
          console.error('Error parsing user data:', error)
          setHasSubscription(false)
        }
      }
      
      setIsLoading(false)
    }

    checkAuth()
  }, [router])

  // تغییر title
  useEffect(() => {
    document.title = "داشبورد"
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-white">در حال بارگذاری...</p>
      </div>
    )
  }

  if (!isAuth) {
    return null
  }

  // اگر کاربر اشتراک ندارد، صفحه Noplan را نمایش بده
  if (!hasSubscription) {
    return (
      <div className="flex-1 flex items-center justify-center h-full">
        <div className="text-center">
          <Typography 
            sx={{ fontFamily: 'IRANSansWeb'}} 
            variant="body" 
            className="mb-4"
          >
            لطفا برای دسترسی به این بخش ابتدا اشتراک تهیه کنید.
          </Typography>
          <Link href="/subscription" className="text-blue-400">
            « خرید اشتراک »
          </Link>
        </div>
      </div>
    )
  }

  // اگر همه چیز OK است، Dashboard را نمایش بده
  return (
    <div>
      <Dashboard />
    </div>
  )
}

export default DashboardPage