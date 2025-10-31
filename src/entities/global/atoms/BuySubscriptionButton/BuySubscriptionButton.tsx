import React from 'react'
import { Button } from '@mui/material'

interface BuySubscriptionButtonProps {
  className?: string;
  onClick?: () => void;
  dropShadow?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
}

function BuySubscriptionButton({className, onClick, dropShadow, children, disabled, style}:BuySubscriptionButtonProps) {
  return (
    <Button 
    className={`!text-white !text-[1.2rem] !shdaow-inner 
      !inset-shadow-white/30 !inset-shadow-sm 
      w-full h-15 !rounded-[1rem] ${className ?? ''}`}
    sx={{
      filter: `drop-shadow(0 0 20px ${dropShadow})`
    }}
    onClick={onClick}
    disabled={disabled}
    style={style}>{children || 'خرید اشتراک'}</Button>
  )
}

export default BuySubscriptionButton