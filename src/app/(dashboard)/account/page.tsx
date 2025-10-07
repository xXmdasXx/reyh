// src/app/(dashboard)/account/page.tsx
'use client'
import React, { useEffect } from 'react'
import Account from '@/entities/profile/organisms/Account/Account'
import ProtectedRoute from '@/entities/global/molecules/ProtectedRoute/ProtectedRoute'

function AccountPage() {
  useEffect(() => {
    document.title = "حساب کاربری"
  }, [])

  return (
    <ProtectedRoute requireSubscription={false}>
      <Account />
    </ProtectedRoute>
  )
}

export default AccountPage