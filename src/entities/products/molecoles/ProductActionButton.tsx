"use client"
import React from "react"

type ProductActionButtonProps = {
  text: string
  icon?: React.ReactNode
  backgroundClassName?: string
  className?: string
  onClick?: () => void
}

export default function ProductActionButton({
  text,
  icon,
  backgroundClassName = "bg-[#4D88FF]",
  className = "",
  onClick,
}: ProductActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-white w-auto ${backgroundClassName} ${className}`}
      style={{ fontFamily: 'IRANSansWeb' }}
    >
      {icon && <span className="inline-flex items-center justify-center">{icon}</span>}
      <span>{text}</span>
    </button>
  )
}


