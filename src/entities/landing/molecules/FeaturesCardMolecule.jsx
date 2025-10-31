import React from 'react'
import GradientGlassCard from '../atoms/GradientGlassCard/GradientGlassCard'
import TypographyAtom from '@/entities/global/atoms/Typography/TypographyAtom'

function FeaturesCardMolecule({
  textHead,
  discription,
  icon,
  typographyMt,
  width = "32rem",
  height = "22rem",
  cardClassName = '',
  textHeadClassName = '',
  descriptionClassName = '',
  ...props
}) {
  return (
    <div {...props}>
        <GradientGlassCard className={cardClassName} style={{ width, height }}>
            
            <div>{icon}</div>
            
            <TypographyAtom 
            className={`!text-[1rem] md:!text-[1.5rem] text-center mt-6 md:mt-8 lg:mt-10 ${textHeadClassName}`}
            sx={{
            filter: `drop-shadow(0 0 10px #4D88FF)`,
            }}>
                {textHead}
            </TypographyAtom>

            <TypographyAtom
            className={`!text-xs md:!text-sm !text-white/60 text-center mt-2 md:mt-3 mb-4 md:mb-5 px-4 md:px-8 leading-relaxed ${descriptionClassName}`}
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