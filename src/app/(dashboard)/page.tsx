// src/app/(dashboard)/profile/page.tsx
'use client'
import React, { useEffect } from 'react'
import ProtectedRoute from '@/entities/global/molecules/ProtectedRoute/ProtectedRoute'
import Typography from '@/entities/global/atoms/Typography/TypographyAtom'
import Link from '@/entities/global/atoms/Link/TextLink'

function ProfilePage() {
  useEffect(() => {
    document.title = "پروفایل اکورا"
  }, [])

  // کامپوننت Fallback
  const NoSubscriptionFallback = () => (
    <div className="flex-1 flex items-center justify-center h-full">
      <div className="text-center">
        <Typography 
          sx={{ fontFamily: 'IRANSansWeb'}} 
          variant="body" 
          className="mb-4"
        >
          لطفا برای دسترسی به پروفایل اکورا ابتدا اشتراک تهیه کنید.
        </Typography>
        <Link href="/subscription" className="text-blue-400">
          « خرید اشتراک »
        </Link>
      </div>
    </div>
  )

  return (
    <ProtectedRoute 
      requireSubscription={true}
      fallbackComponent={<NoSubscriptionFallback />}
    >
      <div className="p-12">
        <Typography variant="h4" className="font-bold text-white mb-8">
          پروفایل اکورا
        </Typography>
        {/* محتوای پروفایل شما اینجا قرار می‌گیرد */}
        <Typography variant="body1" className="text-gray-300">
          این صفحه در حال توسعه است...
        </Typography>
      </div>
    </ProtectedRoute>
  )
}

export default ProfilePage