"use client"
import React from 'react'

export type ArtistAvatarProps = {
  imageUrl: string
  alt: string
  size?: number
}

export default function ArtistAvatar({ imageUrl, alt, size = 144 }: ArtistAvatarProps) {
  const dimension = `${size}px`
  return (
    <div className="w-full min-w-[60px]">
      <img
        src={imageUrl}
        alt={alt}
        width={size}
        height={size}
        className="rounded-full w-full object-cover min-w-[60px]"
      />
    </div>
  )
}


