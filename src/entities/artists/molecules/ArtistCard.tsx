"use client"
import React from 'react'
import ArtistAvatar from "@/entities/artists/atoms/ArtistAvatar"

export type Artist = {
  id: string
  name: string
  role?: string
  imageUrl: string
}

type ArtistCardProps = {
  artist: Artist
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <div
      className="flex flex-col items-center gap-2 w-full min-w-0 cursor-pointer"
      style={{ direction: 'rtl' }}
    >
      <ArtistAvatar imageUrl={artist.imageUrl} alt={artist.name} size={140} />
      <div className="w-full text-right pr-1">
        <div className="text-white/95 text-sm sm:text-base font-medium" style={{ fontFamily: 'IRANSansWeb' }}>
          {artist.name}
        </div>
        {artist.role ? (
          <div className="text-white/60 text-xs sm:text-sm" style={{ fontFamily: 'IRANSansWeb' }}>{artist.role}</div>
        ) : null}
      </div>
    </div>
  )
}


