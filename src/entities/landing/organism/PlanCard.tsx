import React from 'react'
import BuySubscriptionButton from '@/entities/global/atoms/BuySubscriptionButton/BuySubscriptionButton'
import BuySubscriptionCard from '@/entities/global/atoms/BuySubscriptionCard/BuySubscriptionCard'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'
import PlanFeaturesMolecule from '../molecules/PlanFeaturesMolecule'


function PlanCard({bgGradient,icon,planName,price,feat1,feat2,feat3,feat4,buttonStyle,buttonDropShadow,...props}:any) {
  return (
    <div {...props}>
        <BuySubscriptionCard gradient={bgGradient}>
            <div>{icon}</div>
            
            <TypographyAtom className='!mt-6 !text-[2rem]
            lg:!text-[2rem]
            md:!text-[1.5rem]'>{planName}</TypographyAtom>
            
            <div className='w-full flex flex-row'>
                <TypographyAtom className='!mt-6 !text-[3rem]
                xl:!text-[4rem]
                lg:!text-[3rem]
                md:!text-[2rem]'>{price}</TypographyAtom>
                <TypographyAtom className='!mt-6 !text-[1.3rem] relative top-6
                2xl:!text-[2rem] 2xl:top-8
                xl:top-10
                lg:!text-[1.3rem] lg:top-6
                md:!text-[0.9rem] md:top-5'
                > / در ماه</TypographyAtom>
            </div>
            
            <div className='w-full py-5 pb-12'>
                <PlanFeaturesMolecule feat={feat1}></PlanFeaturesMolecule>
                <PlanFeaturesMolecule feat={feat2} mt='mt-5'></PlanFeaturesMolecule>
                <PlanFeaturesMolecule feat={feat3} mt='mt-5'></PlanFeaturesMolecule>
                <PlanFeaturesMolecule feat={feat4} mt='mt-5'></PlanFeaturesMolecule>
            </div>

            <BuySubscriptionButton className={buttonStyle} dropShadow={buttonDropShadow}></BuySubscriptionButton>
        </BuySubscriptionCard>
    </div>
  )
}

export default PlanCard