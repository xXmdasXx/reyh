import React, { useState, useEffect } from 'react'
import { InputAdornment, TextField } from '@mui/material'
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import { useCartStore } from '@/stores/cartStore';

function OffCodeInput() {
  const [inputValue, setInputValue] = useState('');
  
  const { applyDiscountCode, removeDiscount } = useCartStore();

  // Auto-validate discount code as user types
  useEffect(() => {
    if (inputValue.trim()) {
      applyDiscountCode(inputValue.trim());
    } else {
      removeDiscount();
    }

  }, [inputValue, applyDiscountCode, removeDiscount]);

  return (
    <div>
        <TextField 
            placeholder='کد تخفیف خود را وارد کنید' 
            variant='outlined' 
            className='!w-full !mt-4 !h-[45px] !text-center !text-sm shadow-white/10 shadow-lg' 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position='start'>
                        <LocalOfferOutlinedIcon className='!text-[1.2rem] text-white' />
                    </InputAdornment>
                ),
            }}  
            sx={{
                background: 'linear-gradient(to right, #B020D580, #4D88FF80)',
                borderRadius: '10px',
                color: 'white',
                height: '100%',
                
                '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    background: 'transparent',
                    height: '100%',
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                },
                '& .MuiInputBase-input': {
                    color: 'white',
                },
            }}
        />
    </div>
  )
}

export default OffCodeInput