import React from 'react'
import GradientGlassCard from '../atoms/GradientGlassCard/GradientGlassCard'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'

function FeaturesCardMolecule({textHead,discription,icon,typographyMt,width = "32rem",height = "22rem",...props}) {
  return (
    <div {...props}>
        <GradientGlassCard style={{ width, height }}>
            
            <div>{icon}</div>
            
            <TypographyAtom 
            className='!text-[1.5rem] text-center'
            sx={{
            filter: `drop-shadow(0 0 10px #4D88FF)`,
            mt: typographyMt
            }}>
                {textHead}
            </TypographyAtom>

            <TypographyAtom
            className='!text-sm !mt-2 !mb-5 !text-white/60 text-center'
            sx={{
            filter: `drop-shadow(0 0 10px #BC75CB)`
            }}>
                {discription}
            </TypographyAtom>

        </GradientGlassCard>
    </div>
  )
}

export default FeaturesCardMolecule