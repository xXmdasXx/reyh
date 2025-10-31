"use client"
import React, { useMemo, useState } from 'react'
import FilterBar from '@/entities/artists/molecules/FilterBar'
import ArtistsGrid from '@/entities/artists/organisms/ArtistsGrid'
import { useArtists } from '@/hooks/useArtists'

export default function ArtistsPageClient() {
  const [search, setSearch] = useState("")
  const { artists, loading, error } = useArtists()

  const filtered = useMemo(() => {
    if (!search) return artists
    const q = search.toLowerCase()
    return artists.filter((a) => a.name.toLowerCase().includes(q))
  }, [search, artists])

  return (
    <section className="w-full text-white py-8">
      <div className=" w-full mx-auto px-2 sm:px-4 xl:px-5">
        <header className="mb-8">
          {/* Mobile: search below title, filters below search */}
          <div className="block md:hidden w-full">
            <h1 className="text-2xl sm:text-3xl font-semibold shrink-0 mb-4" style={{ fontFamily: 'IRANSansWeb' }}>هنرمندان</h1>
            <FilterBar onSearch={setSearch} mobileMode />
          </div>
          {/* Tablet: title above filter/search grid */}
          <div className="hidden md:block  lg:hidden w-full">
            <h1 className="text-2xl sm:text-3xl font-semibold shrink-0 mb-6" style={{ fontFamily: 'IRANSansWeb' }}>هنرمندان</h1>
            <FilterBar onSearch={setSearch} tabletMode />
          </div>
          {/* Desktop: title and filter/search in a row */}
          <div className="hidden lg:flex items-center gap-6 w-full">
            <h1 className="text-2xl sm:text-3xl font-semibold shrink-0 mb-0" style={{ fontFamily: 'IRANSansWeb' }}>هنرمندان</h1>
            <div className="flex-1 flex justify-end">
              <FilterBar onSearch={setSearch} />
            </div>
          </div>
        </header>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-16">
            <div className="text-white/70 text-lg" style={{ fontFamily: 'IRANSansWeb' }}>در حال بارگذاری...</div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="flex justify-center items-center py-16">
            <div className="text-red-400 text-lg" style={{ fontFamily: 'IRANSansWeb' }}>خطا در بارگذاری هنرمندان</div>
          </div>
        )}

        {/* Artists Grid */}
        {!loading && !error && filtered.length > 0 && (
          <ArtistsGrid artists={filtered} />
        )}

        {/* Empty State */}
        {!loading && !error && filtered.length === 0 && (
          <div className="flex justify-center items-center py-16">
            <div className="text-white/70 text-lg" style={{ fontFamily: 'IRANSansWeb' }}>
              {search ? 'هنرمندی با این نام پیدا نشد' : ''}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}


