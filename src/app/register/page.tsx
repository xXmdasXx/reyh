// pages/signup.tsx
'use client'
import React from 'react'
import SignUpFrameOrganism from '@/entities/auth/organisms/SignUpFrameOrganism'
import BgLoginRegister from '@/entities/global/molecules/Background/BgLoginRegister'

function SignUpPage() {
  // ✅ Define handleSubmit function here
  const handleSubmit = (formData: { username: string; email: string; password: string; acceptTerms: boolean }) => {
    console.log("Form submitted:", formData)
    // You can add API calls, validation, navigation, etc. here
  }

  return (
    <div className="flex flex-row justify-center items-center w-screen h-screen">
      <BgLoginRegister>
        {/* ✅ Pass handleSubmit into your Organism */}
        <SignUpFrameOrganism />
        <br />
      </BgLoginRegister>
    </div>
  )
}

export default SignUpPage
