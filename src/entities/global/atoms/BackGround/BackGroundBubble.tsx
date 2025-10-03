import React from 'react'

interface bgBubbleProps {
    className?: string
}

function BackGroundBubble({className}:bgBubbleProps) {
  return (
    <div className={`w-[328px] 
    h-[328px] 
    bg-linear-to-r 
    from-[#1529E3]/80
    to-[#BB19DF] 
    rounded-full

    ${className || ''}`}></div>
    
  )
}

export default BackGroundBubble;