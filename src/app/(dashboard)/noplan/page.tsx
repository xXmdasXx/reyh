'use client'  // ✅ اگر قراره رفتار client داشته باشه
import Noplanpage from '../../../entities/profile/organisms/Noplanpage/Noplanpage'
import React, { useEffect } from 'react'

function Noplan() {

  useEffect(() => {
    document.title = "بدون اشتراک"
  }, [])

  return (
    <div>
      <Noplanpage />
    </div>
  )
}

export default Noplan
