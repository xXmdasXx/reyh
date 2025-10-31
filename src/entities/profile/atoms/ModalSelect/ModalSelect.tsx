'use client'
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface ModalSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
  required?: boolean;
}

const ModalSelect: React.FC<ModalSelectProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  className = "",
  required = false
}) => {
  return (
    <div className={`space-y-2  ${className}`}>
      <label className="block text-white text-sm font-small ">
        {label}
        {required && <span className="text-red-400 mr-1">*</span>}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className="w-full text-right px-7 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg
                     text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 
                     focus:border-blue-500/50 transition-all backdrop-blur-sm appearance-none
                     cursor-pointer"
        >
          <option value="" disabled>
            {placeholder || 'انتخاب کنید...'}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value} className="bg-gray-800">
              {option.label}
            </option>
          ))}
        </select>
        <KeyboardArrowDownIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
};

export default ModalSelect;

