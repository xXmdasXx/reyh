'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FeaturesHeadTypographyMolecule from '../molecules/FeaturesHeadTypographyMolecule'
import FeaturesCardMolecules from '../molecules/FeaturesCardMolecule'
import ConcertIcon from '../atoms/ConcertIcon/ConcertIcon'
import MixerIcon from '../atoms/MixerIcon/MixerIcon'
import MixManIcon from '../atoms/MixManIcon/MixManIcon'

function Features() {
  // ========== CARD DATA WITH SIDE POSITION CONFIGURATIONS ==========
  // Each card now has its own marginScale for side positions
  // Adjust these values per card to fix text/content positioning issues
  const cardsData = [
    {
      id: 'mixer',
      icon: <MixerIcon className='!absolute !bottom-18 left-0 
      md:!bottom-18 md:left-10' width={450}></MixerIcon>,

      sideIcon: <MixerIcon className='!absolute !bottom-14 left-8' width={320}></MixerIcon>,
      
      typographyMt: 30,
      typographyMtSm: 25, // used < md
      sideMarginScale: 0.6, // Custom margin scale for this card in side positions
      sideMarginScaleSm: 0.55, // used < md
      textHead: 'سیستم لایسنس حرفه‌ای',
      textHeadClassName:'!mt-20 md:!mt-35',
      descriptionClassName: '!text-[0.7rem] md:!text-[1rem]',
      textHeadCenterClassName:'!mt-30 md:!mt-60',
      descriptionCenterClassName:'',
      discription: <>چند مدل فروش با قرارداد خودکار و دانلود فوری</>
    },
    {
      id: 'concert',
      icon: <ConcertIcon className='!absolute !bottom-25 left-10 right-10
      md:!bottom-30 md:right-23' width={320}></ConcertIcon>,

      sideIcon: <ConcertIcon className='!absolute !bottom-24 right-10 left-10
      md:!bottom-24 md:right-19' width={250}></ConcertIcon>,
      
      typographyMt: 28,
      typographyMtSm:25,
      sideMarginScale: 0.6, // Custom margin scale for this card in side positions
      sideMarginScaleSm: 0.55,
      textHeadClassName:'!mt-13 md:!mt-31',
      descriptionClassName: '',
      textHeadCenterClassName:'!mt-28 md:!mt-58',
      descriptionCenterClassName:'',
      textHead: 'بازاری بزرگ از بیت و سمپل و ساند افکت',
      discription: (
        <>
          دسترسی مستقیم به جامعه‌ی وسیع آرتیست‌ها و خریدارها برای
          فروش راحت‌تر
        </>
      )
    },
    {
      id: 'mixman',
      icon: <MixManIcon className='!absolute !bottom-16 right-8
      md:!bottom-16 md:right-14' width={450}></MixManIcon>,

      sideIcon: <MixManIcon className='!absolute !bottom-17 right-8
      md:!bottom-17 md:right-18' width={330}></MixManIcon>,
       
      typographyMt: 30,
      typographyMtSm: 25,
      sideMarginScale: 0.55, // Custom margin scale for this card in side positions
      sideMarginScaleSm: 0.10,
      textHeadClassName:'!mt-18 md:!mt-32',
      descriptionClassName: '!text-[0.7rem]',
      textHeadCenterClassName:'!mt-30 md:!mt-60',
      descriptionCenterClassName:'',
      textHead: 'شبکه اجتماعی موزیسین‌ها',
      discription: (
        <>
          پروفایل اختصاصی مثل لینکدین موسیقی؛ دنبال‌کردن،
          همکاری، پیام و نمایش پورتفولیو.
        </>
      )
    }
  ]
  // ========== END CARD DATA CONFIGURATIONS ==========

  const [cardOrder, setCardOrder] = useState([0, 1, 2])
  const [isAnimating, setIsAnimating] = useState(false)

  const handleCardClick = (index) => {
    if (isAnimating || index === 1) return
    
    setIsAnimating(true)
    
    if (index === 0) {
      setCardOrder(prev => [prev[2], prev[0], prev[1]])
    } else if (index === 2) {
      setCardOrder(prev => [prev[1], prev[2], prev[0]])
    }
    
    setTimeout(() => setIsAnimating(false), 600)
  }

  const getCardStyles = (position) => {
    const styles = [
      { 
        className: '!relative right-28 bottom-15 !rotate-20',
        cardClassName: '!w-[15rem] !h-[10rem] md:!w-[25rem] md:!h-[15rem]',
        zIndex: 20
      },
      { 
        className: '',
        cardClassName: '!w-[18rem] !h-[13rem] md:!w-[32rem] md:!h-[22rem]',
        zIndex: 30
      },
      { 
        className: '!relative left-31 top-10 !rotate-[-10deg]',
        cardClassName: '!w-[15rem] !h-[10rem] md:!w-[25rem] md:!h-[15rem]',
        zIndex: 20
      }
    ]
    return styles[position]
  }

  // ========== CONTENT POSITIONING FIX START ==========
  // This function returns the appropriate icon based on card position
  // Position 1 (center) uses original icon
  // Positions 0 and 2 (sides) use sideIcon with adjusted positioning
  const getAdjustedIcon = (cardIndex, position) => {
    const card = cardsData[cardIndex]
    
    // If card is in center position, use original icon
    if (position === 1) {
      return card.icon
    }
    
    // For side cards, use the pre-configured sideIcon
    return card.sideIcon
  }

  // This function adjusts typography margin based on card position
  // Center card uses original typographyMt values
  // Side cards use the card's specific sideMarginScale value
  const getAdjustedTypographyMt = (cardIndex, position) => {
    const card = cardsData[cardIndex]
    const isMd = typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : true
    const baseMt = isMd ? (card.typographyMt ?? 30) : (card.typographyMtSm ?? card.typographyMt ?? 30)
    if (position === 1) {
      return baseMt
    }
    const scale = isMd ? (card.sideMarginScale ?? 0.6) : (card.sideMarginScaleSm ?? card.sideMarginScale ?? 0.6)
    return Math.round(baseMt * scale)
  }
  // ========== CONTENT POSITIONING FIX END ==========

  return (
    <div className='w-full h-[45rem] flex flex-col'>
      <div className='w-full h-[20%]'>
        <FeaturesHeadTypographyMolecule className='!text-sm'></FeaturesHeadTypographyMolecule>
      </div>
      <div className='w-full h-[80%] flex flex-row justify-center items-center relative'>
        {cardOrder.map((cardIndex, position) => {
          const card = cardsData[cardIndex]
          const isClickable = position === 0 || position === 2
          const styles = getCardStyles(position)
          
          // ========== APPLYING CONTENT ADJUSTMENTS ==========
          // Use adjusted icon and typography values based on card position
          const adjustedIcon = getAdjustedIcon(cardIndex, position)
          const adjustedTypographyMt = getAdjustedTypographyMt(cardIndex, position)
          // ========== END APPLYING ADJUSTMENTS ==========
          
          return (
            <motion.div
              key={card.id}
              layout
              transition={{
                layout: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
              }}
              onClick={() => handleCardClick(position)}
              className={isClickable ? 'cursor-pointer' : ''}
              style={{ zIndex: styles.zIndex }}
            >
              <FeaturesCardMolecules
                className={styles.className}
                cardClassName={styles.cardClassName}
                icon={adjustedIcon} // Using adjusted icon position
                textHead={card.textHead}
                discription={card.discription}
                textHeadClassName={position === 1 ? (card.textHeadCenterClassName ?? card.textHeadClassName) : card.textHeadClassName}
                descriptionClassName={position === 1 ? (card.descriptionCenterClassName ?? card.descriptionClassName) : card.descriptionClassName}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Features