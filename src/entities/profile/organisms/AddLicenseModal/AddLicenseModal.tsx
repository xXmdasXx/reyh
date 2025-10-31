//AddLicenseModal
'use client'
import React, { useState, useRef } from 'react';
import Modal from '../../atoms/Modal/Modal';
import ModalInput from '../../atoms/ModalInput/ModalInput';
import ModalSelect from '../../atoms/ModalSelect/ModalSelect';
import ModalToggle from '../../atoms/ModalToggle/ModalToggle';
import ModalButton from '../../atoms/ModalButton/ModalButton';
import FileUploadSection from '../../molecules/FileUploadSection/FileUploadSection';
import { createLicense, LicenseFormData } from '@/services/licenses';

interface AddLicenseModalProps {
  isOpen: boolean;
  onClose: () => void;
  trackTitle?: string;
  productId: string; // Required for creating license
  onSave?: (licenseData: LicenseData) => void;
}

interface LicenseData {
  title: string;
  description: string;
  fileType: string;
  price: string;
  isExclusive: boolean;
}

const AddLicenseModal: React.FC<AddLicenseModalProps> = ({
  isOpen,
  onClose,
  trackTitle = "",
  productId,
  onSave
}) => {
  const [formData, setFormData] = useState<LicenseData>({
    title: trackTitle,
    description: "",
    fileType: "",
    price: "",
    isExclusive: false
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fileTypeOptions = [
    { value: "mp3", label: "MP3" },
    { value: "wav", label: "WAV" },
    { value: "flac", label: "FLAC" },
    { value: "aac", label: "AAC" },
    { value: "m4a", label: "M4A" }
  ];

  const handleInputChange = (field: keyof LicenseData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async () => {
    if (!selectedFile) {
      setError('لطفاً فایل را انتخاب کنید');
      return;
    }

    if (!formData.title || !formData.description || !formData.price || !formData.fileType) {
      setError('لطفاً تمام فیلدهای الزامی را پر کنید');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const licenseData: LicenseFormData = {
        file: selectedFile,
        title: formData.title,
        description: formData.description,
        price: parseFloat(formData.price),
        exclusive: formData.isExclusive,
        formats: formData.fileType,
        type: formData.fileType, // Using fileType as type
        offer: null // You can add offer field to the form if needed
      };

      const response = await createLicense(productId, licenseData);
      
      if (onSave) {
        onSave(formData);
      }
      
      onClose();
      // Reset form
      setFormData({
        title: "",
        description: "",
        fileType: "",
        price: "",
        isExclusive: false
      });
      setSelectedFile(null);
    } catch (err: any) {
      console.error('Error creating license:', err);
      setError(err.response?.data?.detail || 'خطا در ایجاد لایسنس');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    onClose();
    // Reset form
    setFormData({
      title: "",
      description: "",
      fileType: "",
      price: "",
      isExclusive: false
    });
    setSelectedFile(null);
    setError(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setError(null);
    }
  };

  return (
    <Modal
      
      
      isOpen={isOpen}
      onClose={onClose}
      
      title="اضافه کردن لایسنس جدید"
      className="font-IRANSansWeb w-[1000px] h-auto max-w-[1000px]"
    >
      <div  className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Section - File Upload */}
        <div className="space-y-6">
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              آپلود فایل لایسنس
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept="audio/*"
              className="hidden"
              onChange={handleFileChange}
            />
            <div
              onClick={() => fileInputRef.current?.click()}
              className="w-full h-32 bg-gray-800/50 border border-gray-600/50 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-700/50 transition-colors"
            >
              {selectedFile ? (
                <div className="text-center">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white text-sm">{selectedFile.name}</span>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <span className="text-white text-sm">فایل را انتخاب کنید</span>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Right Section - Form Fields */}
        <div  className="font-IRANSansWeb space-y-6">
          <ModalInput
            label="عنوان کالکشن"
            className='mt-5'
            value={formData.title}
            onChange={(value) => handleInputChange('title', value)}
            placeholder="عنوان کالکشن خود را وارد کنید"
            required
          />

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              توضیحات
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="توضیحات کالکشن خود را وارد کنید"
              rows={4}
              className="
              w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg
            text-white placeholder-gray-400 focus:outline-none focus:ring-2 
            focus:ring-blue-500/50 focus:border-blue-500/50 transition-all
              backdrop-blur-sm resize-none"
            />
          </div>
          <div className='flex flex-row gap-5 '>
            <ModalInput
              label="قیمت (به تومان)"
              value={formData.price}
              onChange={(value) => handleInputChange('price', value)}
              placeholder="قیمت را به تومان وارد کنید"
              type="number"
              required
            />

            <ModalSelect
              label="نوع فایل"
              value={formData.fileType}
              onChange={(value) => handleInputChange('fileType', value)}
              options={fileTypeOptions}
              placeholder="نوع فایل را انتخاب کنید"
              required
            />

          </div>

          

          <ModalToggle
            label="اکسکلوسیو"
            checked={formData.isExclusive}
            onChange={(checked) => handleInputChange('isExclusive', checked)}
            description="با فعال کردن این گزینه، این لایسنس به صورت انحصاری فروخته خواهد شد و دیگران قادر به خرید آن نخواهند بود. این گزینه قیمت بالاتری دارد و درآمد بیشتری برای شما به همراه خواهد داشت."
          />
        </div>
        
      </div>

      {/* Error Display */}
      {error && (
        <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-700/30">
        <ModalButton
          variant="outline"
          onClick={handleCancel}
          disabled={isLoading}
        >
          انصراف
        </ModalButton>
        
        <ModalButton
          variant="primary"
          onClick={handleSave}
          disabled={isLoading}
        >
          {isLoading ? 'در حال ذخیره...' : 'ذخیره لایسنس'}
        </ModalButton>
      </div>
    </Modal>
  );
};

export default AddLicenseModal;

