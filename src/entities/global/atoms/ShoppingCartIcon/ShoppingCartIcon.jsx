import React from 'react'
import { useRouter } from 'next/navigation'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { IconButton } from '@mui/material';

function ShoppingCartIcon(sx = {}, ...props) {

  const router = useRouter();

  return (
    <div>
        <IconButton
        sx={{
            backgroundColor: "transparent",
            color: "text.primary",
            "&:hover": {
            backgroundColor: "rgba(30,144,255,0.1)",
        },
        p: 1.5,
        ...sx,
      }}
      onClick={() => {
        router.push('/cart')
      }}
      {...props}>
            <ShoppingBagOutlinedIcon className='!text-3xl'></ShoppingBagOutlinedIcon>
        </IconButton>
    </div>
  )
}

export default ShoppingCartIcon