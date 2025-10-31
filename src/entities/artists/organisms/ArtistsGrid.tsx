"use client"
import React from 'react'
import ArtistCard, { Artist } from "@/entities/artists/molecules/ArtistCard"

type ArtistsGridProps = {
  artists: Artist[]
}

export default function ArtistsGrid({ artists }: ArtistsGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-8 gap-x-8 w-full">
      {artists.map((artist) => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </div>
  )
}


