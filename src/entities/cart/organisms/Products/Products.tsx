'use client'

import React, { useEffect } from 'react'
import BeatCard from '../../molecules/BeatCard/BeatCard'
import SampleCard from '../../molecules/SampleCard/SampleCard'
import { useCartStore } from '@/stores/cartStore'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'

function Products() {
  const { cartItems, syncCartFromServer, loading, error, clearError } = useCartStore();

  // Sync cart from server when component mounts
  useEffect(() => {
    const initializeCart = async () => {
      clearError();
      const token = localStorage.getItem('token');
      
      if (token) {
        const success = await syncCartFromServer();
        if (!success) {
          console.log('Server sync failed, showing local cart items');
          // If server sync fails, we'll show whatever local items exist
        }
      } else {
        console.log('No authentication token found, showing local cart only');
        // If no token, just show local cart items without syncing
      }
    };

    initializeCart();
  }, []);

  return (
    <div className='w-full overflow-y-auto pb-[28rem] md:pb-0 md:w-[58%] pl-0 md:pl-5
    lg:w-[65%] lg:pl-10
    xl:w-[70%]'>
        {/* Loading state */}
        {loading && (
          <div className='text-center text-white/60 mt-8'>
            <TypographyAtom className='!text-[1.2rem] text-white'>
              در حال بارگذاری سبد خرید...
            </TypographyAtom>
          </div>
        )}
        

        {/* Cart items */}
        {!loading && cartItems.map((item) => {
          if (item.type === 'beat') {
            return <BeatCard key={item.id} beat={item} />;
          } else if (item.type === 'sample') {
            return <SampleCard key={item.id} sample={item} />;
          }
          return null;
        })}

        {/* Empty cart state */}
        {!loading && cartItems.length === 0 && (
          <div className='text-center text-white/60 mt-8'>
            <TypographyAtom className='!text-[1.2rem] text-white'>
              سبد خرید شما خالی است
            </TypographyAtom>
          </div>
        )}
    </div>
  )
}

export default Products