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
            
            <TypographyAtom className='!mt-6 !text-[2rem]'>{planName}</TypographyAtom>
            
            <div className='w-full flex flex-row'>
                <TypographyAtom className='!mt-6 !text-[4rem]'>{price}</TypographyAtom>
                <TypographyAtom className='!mt-6 !text-[2rem] relative top-8'> / در ماه</TypographyAtom>
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