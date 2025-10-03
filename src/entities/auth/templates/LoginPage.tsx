// pages/signup.tsx
'use client'
import React, { useState, useEffect } from 'react'
import LoginFrameOrganism from '../organisms/LoginFrameOrganism'
import BgLoginRegister from '@/entities/global/molecules/Background/BgLoginRegister'


function SignUpPage() {

  return (
    <div>
        <BgLoginRegister>
          <LoginFrameOrganism>
            
          </LoginFrameOrganism>
        </BgLoginRegister>
    </div>
  )
}

export default SignUpPage