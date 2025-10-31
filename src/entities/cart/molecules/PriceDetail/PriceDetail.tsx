import React from 'react'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'

function PriceDetail({ total, finalTotal, discount, cartCount }: { total: number, finalTotal: number, discount: number, cartCount: number }) {
  return (
    <div className='bg-[#0F0D39]/70 rounded-2xl p-6 mt-6'>
        <TypographyAtom className='!text-[0.9rem] text-white'>جزئیات قیمت ({cartCount} محصول)</TypographyAtom>
        
        <div className='flex flex-row justify-between items-center mt-5'>
            <TypographyAtom className='!text-[0.9rem] text-white/70'>مجموع قیمت</TypographyAtom>
            <TypographyAtom className='!text-[0.9rem] text-white/70'>{total.toLocaleString()} تومان</TypographyAtom>
        </div>

        <div className='flex flex-row justify-between items-center mt-5'>
            <TypographyAtom className='!text-[0.9rem] text-white/70'>تخفیف</TypographyAtom>
            <TypographyAtom className='!text-[0.9rem] text-white/70'>{discount.toLocaleString()} تومان</TypographyAtom>
        </div>

        <div className='flex flex-row justify-between items-center mt-5'>
            <TypographyAtom className='!text-[0.9rem] text-white/70'>قیمت کل</TypographyAtom>
            <TypographyAtom className='!text-[0.9rem] text-white/70'>{finalTotal.toLocaleString()} تومان</TypographyAtom>
        </div>
    </div>
  )
}

export default PriceDetail