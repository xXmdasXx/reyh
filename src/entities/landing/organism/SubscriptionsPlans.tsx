import React from 'react'
import AmazingOffers from '../molecules/AmazingOffers'
import PlanCard from './PlanCard'
import LeafVector from '../atoms/LeafVector/LeafVector'
import GemVector from '../atoms/GemVector/GemVector'
import StarVector from '../atoms/StarVector/StarVector'

function SubscriptionsPlans() {
  return (
    <div className='w-full h-[55rem]'>
        <div className='w-full h-[20%]'>
            <AmazingOffers></AmazingOffers>
        </div>
        <div className='w-full px-5 flex flex-row'>
            
            <PlanCard 
            className='w-[35%] flex items-center justify-center'
            bgGradient='from-[#887755]/10 to-[#5F2511]/30'
            icon={<LeafVector></LeafVector>}
            planName={'پلن عادی'}
            price={'389,000'}
            feat1='لورم ایپسوم متن ساختگی'
            feat2='لورم ایپسوم متن ساختگی'
            feat3='لورم ایپسوم متن ساختگی'
            feat4='لورم ایپسوم متن ساختگی'
            buttonStyle='!bg-linear-40 from-10% from-[#FFF500]/20 to-[#E11B54]/30 !duration-200 hover:!opacity-90'
            buttonDropShadow='#D34646'>
              
            </PlanCard>

            <PlanCard
            className='w-[35%] flex items-center justify-center' 
            bgGradient='from-[#B020D5]/70 to-[#B020D5]/10'
            icon={<StarVector></StarVector>}
            planName={'پلن پریمیوم'}
            price={'875,000'}
            feat1='لورم ایپسوم متن ساختگی'
            feat2='لورم ایپسوم متن ساختگی'
            feat3='لورم ایپسوم متن ساختگی'
            feat4='لورم ایپسوم متن ساختگی'
            buttonStyle='!bg-linear-40 from-10% from-[#ffffff]/40 to-[#B020D5]/80 !duration-200 hover:!opacity-90'
            buttonDropShadow='#7D14D0'>
              
            </PlanCard>

            <PlanCard 
            className='w-[35%] flex items-center justify-center'
            bgGradient='from-[#887755]/15 to-[#4D88FF]/20'
            icon={<GemVector></GemVector>}
            planName={'پلن اکسکلوسیو'}
            price={'999,000'}
            feat1='لورم ایپسوم متن ساختگی'
            feat2='لورم ایپسوم متن ساختگی'
            feat3='لورم ایپسوم متن ساختگی'
            feat4='لورم ایپسوم متن ساختگی'
            buttonStyle='!bg-linear-40 from-10% from-[#6681E2]/90 to-[#13E5D5]/70 !duration-200 hover:!opacity-90'
            buttonDropShadow='#298EAE'></PlanCard>

        </div>
    </div>
  )
}

export default SubscriptionsPlans