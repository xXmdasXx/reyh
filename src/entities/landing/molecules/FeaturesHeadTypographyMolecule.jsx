import React from 'react'
import TypographyAtom from '../../global/atoms/Typography/TypographyAtom'

function FeaturesHeadTypographyMolecule() {
  return (
    <div className='w-full flex flex-col items-center'>
        <TypographyAtom
        className='!text-5xl pt-5' 
        sx={{
            filter: `drop-shadow(0 0 10px #BC75CB)`
        }}>اکورا متفاوته!
        </TypographyAtom>

        <TypographyAtom
        className='!text-lg !mt-5 !mb-5 !text-white/60'
        sx={{
            filter: `drop-shadow(0 0 10px #BC75CB)`
        }}>
            همه چیز برای فروش راحت تر موسیقی شما
        </TypographyAtom>
    </div>
  )
}

export default FeaturesHeadTypographyMolecule