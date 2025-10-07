// src/components/ProtectedRoute.tsx
'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { isAuthenticated } from '@/lib/Axios'

interface ProtectedRouteProps {
  children: React.ReactNode
  requireSubscription?: boolean
  fallbackComponent?: React.ReactNode
}

export default function ProtectedRoute({ 
  children, 
  requireSubscription = false,
  fallbackComponent 
}: ProtectedRouteProps) {
  const router = useRouter()
  const [isAuth, setIsAuth] = useState(false)
  const [hasSubscription, setHasSubscription] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAccess = () => {
      // چک کردن احراز هویت
      const authenticated = isAuthenticated()
      
      if (!authenticated) {
        router.push('/login')
        return
      }

      setIsAuth(true)

      // اگر نیاز به اشتراک هست، چک کن
      if (requireSubscription) {
        const user = localStorage.getItem('user')
        if (user) {
          try {
            const userData = JSON.parse(user)
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
      } else {
        // اگر نیاز به اشتراک نیست، مستقیم true کن
        setHasSubscription(true)
      }

      setIsLoading(false)
    }

    checkAccess()
  }, [router, requireSubscription])

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

  // اگر نیاز به اشتراک است و کاربر اشتراک ندارد
  if (requireSubscription && !hasSubscription) {
    if (fallbackComponent) {
      return <>{fallbackComponent}</>
    }
    return (
      <div className="flex-1 flex items-center justify-center h-full">
        <div className="text-center">
          <p className="text-white mb-4">
            لطفا برای دسترسی به این بخش ابتدا اشتراک تهیه کنید.
          </p>
          <a href="/subscription" className="text-blue-400">
            « خرید اشتراک »
          </a>
        </div>
      </div>
    )
  }

  return <>{children}</>
}