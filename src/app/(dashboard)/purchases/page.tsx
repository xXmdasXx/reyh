import React from 'react'
import Purchases from '@/entities/profile/organisms/purchases/Purchases'

export const metadata = {
  title: "خرید ها",
};

function page() {
  return (
    <div>
      <Purchases />
    </div>
  )
}

export default page