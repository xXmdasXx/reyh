"use client"
import React from 'react'
import MyCollectionCard, { MyCollection } from '../MyCollectionCard/MyCollectionCard'

export type { MyCollection }

interface MyCollectionsGridProps {
  collections: MyCollection[]
  onCollectionClick?: (collection: MyCollection) => void
  onNewCollection?: () => void
}

const MyCollectionsGrid: React.FC<MyCollectionsGridProps> = ({
  collections,
  onCollectionClick,
  onNewCollection
}) => {
  // اضافه کردن کالکشن جدید به انتهای لیست
  const collectionsWithNew = [
    ...collections,
    { id: 'new', title: 'کالکشن جدید', trackCount: 0, isNew: true }
  ]

  return (
    <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {collectionsWithNew.map((collection) => (
        <MyCollectionCard
          key={collection.id}
          collection={collection}
          onClick={collection.isNew ? onNewCollection : onCollectionClick}
        />
      ))}
    </div>
  )
}

export default MyCollectionsGrid
