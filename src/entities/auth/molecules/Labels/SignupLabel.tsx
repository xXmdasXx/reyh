import React from 'react'
import { Box } from '@mui/material'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'

function SignupLabel() {
  return (
    <div>
      <Box
        sx={{
          // فاصله از بالا به صورت واکنش‌گرا
          mb: { xs: 5, sm: 0 }, 
        }}
      >
        <Box sx={{ textAlign: 'start', mb: 1 }}>
          <TypographyAtom
            variant="h5"
            sx={{ color: "#E4E4E4", fontWeight: "bold" }}
          >
            ثبت‌ نام
          </TypographyAtom>
        </Box>

        <Box sx={{ textAlign: 'start', mb: 1 }}>
          <TypographyAtom
            variant="label"
            sx={{ fontFamily: 'IRANSansWeb', color: "#E4E4E4" }}
          >
            اینجا صدای تو اهمیت داره
          </TypographyAtom>
        </Box>
      </Box>
    </div>
  )
}

export default SignupLabel
