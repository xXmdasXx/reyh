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
      icon: <MixerIcon className='!absolute !bottom-18 left-10' width={450}></MixerIcon>,
      sideIcon: <MixerIcon className='!absolute !bottom-14 left-8' width={320}></MixerIcon>, // Icon for side positions
      typographyMt: 30,
      sideMarginScale: 0.6, // Custom margin scale for this card in side positions
      textHead: 'سیستم لایسنس حرفه‌ای',
      discription: <>چند مدل فروش با قرارداد خودکار و دانلود فوری</>
    },
    {
      id: 'concert',
      icon: <ConcertIcon className='!absolute !bottom-30 right-23' width={320}></ConcertIcon>,
      sideIcon: <ConcertIcon className='!absolute !bottom-24 right-19' width={250}></ConcertIcon>, // Icon for side positions
      typographyMt: 28,
      sideMarginScale: 0.6, // Custom margin scale for this card in side positions
      textHead: 'بازاری بزرگ از بیت و سمپل و ساند افکت',
      discription: (
        <>
          دسترسی مستقیم به جامعه‌ی وسیع آرتیست‌ها و خریدارها برای <br />
          فروش راحت‌تر
        </>
      )
    },
    {
      id: 'mixman',
      icon: <MixManIcon className='!absolute !bottom-16 right-14' width={450}></MixManIcon>,
      sideIcon: <MixManIcon className='!absolute !bottom-17 right-18' width={330}></MixManIcon>, // Icon for side positions
      typographyMt: 30,
      sideMarginScale: 0.55, // Custom margin scale for this card in side positions
      textHead: 'شبکه اجتماعی موزیسین‌ها',
      discription: (
        <>
          پروفایل اختصاصی مثل لینکدین موسیقی؛ دنبال‌کردن، <br />
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
        width: '25rem',
        height: '15rem',
        zIndex: 20
      },
      { 
        className: '',
        width: undefined,
        height: undefined,
        zIndex: 30
      },
      { 
        className: '!relative left-31 top-10 !rotate-[-10deg]',
        width: '25rem',
        height: '15rem',
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
    
    // If card is in center position, use original typography margin
    if (position === 1) {
      return card.typographyMt
    }
    
    // For side cards, use the card's custom marginScale
    // Each card can have its own marginScale value for perfect positioning
    return Math.round(card.typographyMt * card.sideMarginScale)
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
                width={styles.width}
                height={styles.height}
                icon={adjustedIcon} // Using adjusted icon position
                typographyMt={adjustedTypographyMt} // Using adjusted typography margin with card-specific scale
                textHead={card.textHead}
                discription={card.discription}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Features