"use client"
import React, { useState } from 'react'
import Typography from '../../../global/atoms/Typography/TypographyAtom'
import SearchHeader from '../../molecules/SearchHeader/SearchHeader'
import MyTracksGrid, { MyTrack } from '../../molecules/MyTracksGrid/MyTracksGrid'
import MyCollectionsGrid, { MyCollection } from '../../molecules/MyCollectionsGrid/MyCollectionsGrid'
import TextLink from '../../../global/atoms/Link/TextLink'
import AddIcon from '@mui/icons-material/Add'
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined'
import Image from 'next/image'
import AddTrackModal from '../AddTrackModal/AddTrackModal'
import AddLicenseModal from '../AddLicenseModal/AddLicenseModal'
import AddCollectionModal from '../AddCollectionModal/AddCollectionModal'

const MyTracks: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [addTrackModalOpen, setAddTrackModalOpen] = useState(false)
  const [addLicenseModalOpen, setAddLicenseModalOpen] = useState(false)
  const [addCollectionModalOpen, setAddCollectionModalOpen] = useState(false)
  const [selectedTrack, setSelectedTrack] = useState<MyTrack | null>(null)

  // داده‌های نمونه
  const tracks: MyTrack[] = [
    { id: '1', title: 'لورم ایپسوم متن ساختار', licenseCount: 12, hasLicense: true, isPremium: true },
    { id: '2', title: 'لورم ایپسوم متن ساختار', licenseCount: 0, hasLicense: false, isPremium: false },
    { id: '3', title: 'لورم ایپسوم متن ساختار', licenseCount: 10, hasLicense: true, isPremium: true },
  ]

  const collections: MyCollection[] = [
    { id: '1', title: 'لورم ایپسوم', trackCount: 0 },
    { id: '2', title: 'لورم ایپسوم', trackCount: 0 },
    { id: '3', title: 'لورم ایپسوم', trackCount: 0 },
    { id: '4', title: 'لورم ایپسوم', trackCount: 0 },
  ]

  const handleTrackEdit = (track: MyTrack) => {
    console.log('Edit track:', track)
  }

  const handleTrackAttach = (track: MyTrack) => {
    console.log('Attach track:', track)
  }

  const handleTrackDelete = (track: MyTrack) => {
    console.log('Delete track:', track)
  }

  const handleAddLicense = (track: MyTrack) => {
    console.log('Add license to track:', track)
    setSelectedTrack(track)
    setAddLicenseModalOpen(true)
  }

  const handleAddNewTrack = () => {
    console.log('Add new track')
    setAddTrackModalOpen(true)
  }

  const handleCollectionClick = (collection: MyCollection) => {
    console.log('Collection clicked:', collection)
  }

  const handleNewCollection = () => {
    console.log('Create new collection')
    setAddCollectionModalOpen(true)
  }

  const handleTrackSave = (data: any) => {
    console.log('Track saved:', data)
    setAddTrackModalOpen(false)
  }

  const handleLicenseSave = (data: any) => {
    console.log('License saved:', data)
    setAddLicenseModalOpen(false)
  }

  const handleCollectionSave = (data: any) => {
    console.log('Collection saved:', data)
    setAddCollectionModalOpen(false)
  }

  return (
    <div className="w-full h-full p-4 !sm:p-0 lg:p-12 flex flex-col gap-5">
      <div className="grid w-full grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-4 md:gap-0 lg:gap-0 xl:gap-0">
        <Typography 
          variant="h5" 
          className="font-bold text-white" 
          sx={{ fontFamily: 'IRANSansWeb' }}
        >
          ترک‌های من
        </Typography>
        <div className="w-full flex justify-end md:justify-end lg:justify-end xl:justify-end">
          <div className="w-full sm:w-full md:w-auto lg:w-auto xl:w-auto">
            <SearchHeader 
              title="" 
              placeholder="جستجو کنید..." 
              fullWidth={true}
            />
          </div>
        </div>
      </div>

      {/* بخش ترک‌های من */}
      <div className="space-y-4 bg-gradient-to-br from-[#4D88FF]/10 to-[#4D88FF]/5 rounded-2xl p-4 sm:p-0 sm:w-full md:p-4 lg:p-4 xl:p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Typography 
              variant="h5" 
              className="font-bold text-white" 
              sx={{ fontFamily: 'IRANSansWeb' }}
            >
              ترک‌های من
            </Typography>
            <button
              onClick={handleAddNewTrack}
              className="cursor-pointer hover:opacity-80 transition-opacity"
              title="اضافه کردن ترک جدید"
            >
              <Image
                src="/blueplus.svg"
                alt="plus"
                width={20}
                height={20}
              />
            </button>
          
          </div>
          <TextLink href='#' className='!text-[0.8rem] !text-white/70 !flex !items-center !gap-1'>
            مشاهده همه <KeyboardDoubleArrowLeftOutlinedIcon className='!text-[0.9rem] !text-white/50' />
          </TextLink>
        </div>
        
        <MyTracksGrid
          tracks={tracks}
          onEdit={handleTrackEdit}
          onAttach={handleTrackAttach}
          onDelete={handleTrackDelete}
          onAddLicense={handleAddLicense}
          onAddNewTrack={handleAddNewTrack}
        />
      </div>

      {/* بخش کالکشن‌های من */}
      <div className="space-y-4 bg-gradient-to-br from-[#04032A]/30 to-[#04032A]/10 rounded-2xl p-4 sm:p-0 sm:w-full md:p-4 lg:p-4 xl:p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Typography 
              variant="h5" 
              className="font-bold text-white" 
              sx={{ fontFamily: 'IRANSansWeb' }}
            >
              <span className="hidden xl:inline">کالکشن‌های من</span>
              <span className="xl:hidden">آلبوم‌ها</span>
            </Typography>
            <button
              onClick={handleNewCollection}
              className="cursor-pointer hover:opacity-80 transition-opacity"
              title="اضافه کردن کالکشن جدید"
            >
              <Image
                src="/blueplus.svg"
                alt="plus"
                width={20}
                height={20}
              />
            </button>
          </div>
          <TextLink href='#' className='!text-[0.8rem] !text-white/70 !flex !items-center !gap-1'>
            مشاهده همه <KeyboardDoubleArrowLeftOutlinedIcon className='!text-[0.9rem] !text-white/50' />
          </TextLink>
        </div>
        
        <MyCollectionsGrid
          collections={collections}
          onCollectionClick={handleCollectionClick}
          onNewCollection={handleNewCollection}
        />
      </div>

      {/* Modals */}
      <AddTrackModal
        isOpen={addTrackModalOpen}
        onClose={() => setAddTrackModalOpen(false)}
        onSave={handleTrackSave}
      />

      <AddLicenseModal
        isOpen={addLicenseModalOpen}
        onClose={() => setAddLicenseModalOpen(false)}
        trackTitle={selectedTrack?.title}
        productId={selectedTrack?.id || ''}
        onSave={handleLicenseSave}
      />

      <AddCollectionModal
        isOpen={addCollectionModalOpen}
        onClose={() => setAddCollectionModalOpen(false)}
        onSave={handleCollectionSave}
      />
    </div>
  )
}

export default MyTracks
