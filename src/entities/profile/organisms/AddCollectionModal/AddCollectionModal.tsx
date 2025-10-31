'use client'
import React, { useRef, useState } from 'react'
import Modal from '../../atoms/Modal/Modal'
import ModalInput from '../../atoms/ModalInput/ModalInput'
import ModalButton from '../../atoms/ModalButton/ModalButton'
import ModalToggle from '../../atoms/ModalToggle/ModalToggle'
import FileUploadSection from '../../molecules/FileUploadSection/FileUploadSection'
import { createCollection, CollectionFormData as ApiCollectionFormData } from '@/services/collections'

interface AddCollectionModalProps {
  isOpen: boolean
  onClose: () => void
  onSave?: (data: ApiCollectionFormData) => void
}

const AddCollectionModal: React.FC<AddCollectionModalProps> = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState<ApiCollectionFormData>({
    name: '',
    description: '',
    cover: null,
    isVisible: true  // 👈 این خط جدید اضافه شود
  })
  const [coverPreviewUrl, setCoverPreviewUrl] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (field: keyof ApiCollectionFormData, value: string | boolean | File | null) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSave = async () => {
    if (!formData.name || !formData.description) {
      setError('لطفاً تمام فیلدهای الزامی را پر کنید')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await createCollection(formData)
      
      if (onSave) onSave(formData)
      onClose()
      setFormData({ name: '', description: '', cover: null })
      setCoverPreviewUrl('')
    } catch (err: any) {
      console.error('Error creating collection:', err)
      setError(err.message || 'خطا در ایجاد کالکشن')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancel = () => {
    onClose()
    setFormData({ name: '', description: '', cover: null })
    setCoverPreviewUrl('')
    setError(null)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData(prev => ({ ...prev, cover: file }))
      const url = URL.createObjectURL(file)
      setCoverPreviewUrl(url)
      setError(null)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="اضافه کردن کالکشن جدید" className="font-IRANSansWeb w-[1150px] h-auto max-w-[1150px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-white text-sm font-medium mb-2">آپلود کاور کالکشن</label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            <div
              onClick={() => fileInputRef.current?.click()}
              className="w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-[#FF7344] to-[#35115F] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-opacity overflow-hidden"
              style={coverPreviewUrl ? { backgroundImage: `url(${coverPreviewUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
            >
              {!coverPreviewUrl && (
                <>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-white text-lg font-medium">آپلود کاور کالکشن</span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="font-IRANSansWeb space-y-6">
          <ModalInput
            label="عنوان کالکشن"
            value={formData.name}
            onChange={(v) => handleChange('name', v)}
            placeholder="عنوان را وارد کنید..."
            required
          />

          <div>
            <label className="block text-white text-sm font-medium mb-2">توضیحات</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="توضیحات کالکشن را وارد کنید..."
              rows={6}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm resize-none"
            />
          </div>
           <ModalToggle
            label="نمایش دادن کالکشن"
            checked={formData.isVisible ?? false}
            onChange={(checked) => handleChange('isVisible', checked)}
            description="ترک‌های پنهان یا بدون لایسنس در کالکشن نمایش داده نمی‌شوند."
          />

        </div>
        

        
      </div>

      {/* Error Display */}
      {error && (
        <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-700/30">
        <ModalButton variant="outline" onClick={handleCancel} disabled={isLoading}>انصراف</ModalButton>
        <ModalButton variant="primary" onClick={handleSave} disabled={isLoading}>
          {isLoading ? 'در حال ذخیره...' : 'ذخیره کالکشن'}
        </ModalButton>
      </div>
    </Modal>
  )
}

export default AddCollectionModal


