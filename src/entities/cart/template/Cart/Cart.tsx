
import React from 'react'
import Products from '../../organisms/Products/Products'
import Total from '../../organisms/Total/Total'

function Cart() {
  return (
    <div className='w-full h-full flex flex-col md:flex-row md:h-[50rem] px-5 pb-0 md:pb-5'>
        <Products></Products>
        <Total></Total>
    </div>
  )
}

export default Cart