'use client'
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

interface FileUploadSectionProps {
  className?: string;
}

const FileUploadSection: React.FC<FileUploadSectionProps> = ({
  className = ""
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileNames = Array.from(files).map(file => file.name);
      setUploadedFiles(prev => [...prev, ...fileNames]);
    }
  };

  return (
    <div dir="rtl" className={`space-y-4 font-IRANSansWeb ${className}`}>
      <h3 className="text-white text-lg font-semibold">فایل‌های آپلود شده</h3>
      
      {/* لیست فایل‌ها */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-2">
          {uploadedFiles.map((fileName, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-600/30"
            >
              <span className="text-gray-300 text-sm">{fileName}</span>
              <button
                onClick={() => setUploadedFiles(prev => prev.filter((_, i) => i !== index))}
                className="text-red-400 hover:text-red-300 text-sm"
              >
                حذف
              </button>
            </div>
          ))}
        </div>
      )}

      {/* بخش آپلود فایل شبیه تصویر */}
      <label className="relative w-full cursor-pointer">
        <input
          type="file"
          multiple
          onChange={handleFileUpload}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          accept="audio/*,.mp3,.wav,.flac,.aac"
        />
        
        {/* کادر اصلی */}
        <div className="flex items-center justify-start border border-gray-600/40 bg-[#13203B] rounded-xl h-14 px-4 hover:border-blue-400 transition-all">
          {/* مربع با علامت + */}
          <div className="w-10 h-10 flex items-center justify-center bg-[#FFFFFF]/20 rounded-md text-white mr-2">
            <AddIcon fontSize="small" />
          </div>
          {/* عنوان آپلود فایل */}
          <span className="text-gray-300 text-sm font-IRANSansWeb px-3 font-medium"> افزودن فایل جدید</span>
        </div>
      </label>
    </div>
  );
};

export default FileUploadSection;

