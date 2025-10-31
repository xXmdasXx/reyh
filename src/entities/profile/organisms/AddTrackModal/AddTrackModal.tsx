'use client'
import React, { useRef, useState } from 'react'
import Modal from '../../atoms/Modal/Modal'
import ModalInput from '../../atoms/ModalInput/ModalInput'
import ModalSelect from '../../atoms/ModalSelect/ModalSelect'
import ModalToggle from '../../atoms/ModalToggle/ModalToggle'
import ModalButton from '../../atoms/ModalButton/ModalButton'
import FileUploadSection from '../../molecules/FileUploadSection/FileUploadSection'

interface AddTrackModalProps {
  isOpen: boolean
  onClose: () => void
  onSave?: (data: TrackFormData) => void
}

interface TrackFormData {
  title: string
  genre: string
  trackType: string
  description: string
  isVisible: boolean
}

const AddTrackModal: React.FC<AddTrackModalProps> = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState<TrackFormData>({
    title: '',
    genre: '',
    trackType: '',
    description: '',
    isVisible: true
  })
  const [coverPreviewUrl, setCoverPreviewUrl] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const genreOptions = [
    { value: 'pop', label: 'پاپ' },
    { value: 'hiphop', label: 'هیپ‌هاپ' },
    { value: 'rock', label: 'راک' },
  ]

  const typeOptions = [
    { value: 'beat', label: 'بیت' },
    { value: 'sample', label: 'سمپل' },
    { value: 'song', label: 'ترک' },
  ]

  const handleChange = (field: keyof TrackFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSave = async () => {
  const formDataToSend = new FormData();

  // اضافه کردن مقادیر الزامی
  formDataToSend.append("title", formData.title);
  formDataToSend.append("type", formData.trackType);

  // مقدار ثابت برای genre
  formDataToSend.append("genre", "default");

  // در صورت وجود کاور، اضافه کن
  if (fileInputRef.current?.files?.[0]) {
    formDataToSend.append("cover", fileInputRef.current.files[0]);
  }

  try {
    const response = await fetch("/products", {
      method: "POST",
      body: formDataToSend,
    });

    if (!response.ok) {
      throw new Error("خطا در ارسال داده به سرور");
    }

    console.log("Track uploaded successfully!");
    if (onSave) onSave(formData);
    onClose();

    // پاکسازی فرم
    setFormData({ title: '', genre: '', trackType: '', description: '', isVisible: true });
    setCoverPreviewUrl('');
  } catch (error) {
    console.error(error);
    alert("ارسال ترک با خطا مواجه شد!");
  }
};


  const handleCancel = () => {
    onClose()
    setFormData({ title: '', genre: '', trackType: '', description: '', isVisible: true })
    setCoverPreviewUrl('')
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="اضافه کردن ترک جدید" className="font-IRANSansWeb w-[1150px] h-auto max-w-[1150px] ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="font-IRANSansWeb space-y-6">
          <ModalInput
            label="عنوان ترک"
            value={formData.title}
            onChange={(v) => handleChange('title', v)}
            placeholder="عنوان را وارد کنید..."
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ModalSelect
              label="ژانر"
              value={formData.genre}
              onChange={(v) => handleChange('genre', v)}
              options={genreOptions}
              placeholder="ژانر را انتخاب کنید..."
            />
            <ModalSelect
              label="نوع ترک"
              value={formData.trackType}
              onChange={(v) => handleChange('trackType', v)}
              options={typeOptions}
              placeholder="نوع ترک را انتخاب کنید..."
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">توضیحات</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="توضیحات را وارد کنید..."
              rows={4}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm resize-none"
            />
          </div>

          <ModalToggle
            label="نمایش دادن ترک"
            checked={formData.isVisible}
            onChange={(checked) => handleChange('isVisible', checked)}
            description="در صورت روشن بودن، ترک در پروفایل نمایش داده می‌شود."
          />
        </div>

        <div className="space-y-6">
          {/* Custom Upload Area */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              آپلود کاور ترک
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (!file) return
                const url = URL.createObjectURL(file)
                setCoverPreviewUrl(url)
              }}
            />
            <div
              onClick={() => fileInputRef.current?.click()}
              className="w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-[#4D88FF] to-[#442E99] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-opacity overflow-hidden"
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
                  <span className="text-white text-lg font-medium">آپلود کاور ترک</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Collection Selection Area */}
      <div className="mt-8 pt-6 border-t border-gray-700/30">
        <h3 className="text-white text-lg font-medium mb-4">افزودن به کالکشن</h3>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-600/50 transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-700/30">
        <ModalButton variant="outline" onClick={handleCancel}>انصراف</ModalButton>
        <ModalButton variant="primary" onClick={handleSave}>ذخیره ترک</ModalButton>
      </div>
    </Modal>
  )
}

export default AddTrackModal


