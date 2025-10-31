import React from 'react'
import Cart from '@/entities/cart/template/Cart/Cart'
import { Metadata } from 'next';

export const metadata:  Metadata = {
  title: "سبد خرید",
};

function page() {
  return (
    <div>
        <Cart></Cart>
    </div>
  )
}

export default page