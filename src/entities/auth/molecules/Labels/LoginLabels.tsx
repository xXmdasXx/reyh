import React from 'react'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'

function LoginLabels() {
  return (
    <div>
        <TypographyAtom 
        sx={{
          fontSize: '22px',
          fontWeight: '700'
        }}
        >ورود</TypographyAtom>
        
        <TypographyAtom 
        
        sx={{
          mt : 2
        }}
        >به دنیای بیت ها خوش اومدی</TypographyAtom>

    </div>
  )
}

export default LoginLabels