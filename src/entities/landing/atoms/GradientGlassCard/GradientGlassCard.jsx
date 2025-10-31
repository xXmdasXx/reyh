import React from 'react'

function GradientGlassCard({children, className = '', ...props}) {
  return (
    <div className="flex flex-row">
      <div
        className={`bg-gradient-to-tl from-[#B020D5]/30 to-[#B020D5]/9 backdrop-blur-xl 
                    rounded-[2rem] shadow-white/20 shadow-2xl flex flex-col items-center ${className}`} {...props}>
        {children}
      </div>
    </div>
  )
}

export default GradientGlassCard
