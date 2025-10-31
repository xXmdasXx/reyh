'use client'

import React from 'react'
import PriceDetail from '../PriceDetail/PriceDetail'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'
import OffCodeInput from '../../atoms/OffCodeInput/OffCodeInput'
import ConfirmButton from '../../atoms/ConfirmButton/ConfirmButton'
import { useCartStore } from '@/stores/cartStore'

function TotalCard() {
  const { getFinalTotal,getTotal, getDiscount, getCartCount } = useCartStore()
  return (
    <div className='w-full h-auto bg-linear-to-l bg-blue-950
    rounded-t-2xl md:rounded-2xl px-5 py-6 md:py-10
    lg:p-10 shadow-lg md:shadow-none
    md:from-[#4D88FF]/10 md:to-[#4D88FF]/10'>
        <TypographyAtom className='!text-[1.2rem] text-white'>کد تخفیف</TypographyAtom>
        <OffCodeInput />
        <PriceDetail total={getTotal()} finalTotal={getFinalTotal()} discount={getDiscount()} cartCount={getCartCount()} />
        <ConfirmButton />
    </div>
  )
}

export default TotalCard