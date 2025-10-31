'use client'
import React from 'react';

interface ModalInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'number' | 'email' | 'password';
  className?: string;
  required?: boolean;
}

const ModalInput: React.FC<ModalInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  className = "",
  required = false
}) => {
  return (
    <div className={`space-y-2   ${className}`}>
      <label className="block text-white text-sm font-medium">
        {label}
        {required && <span className="text-red-400 mr-1">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg
                   text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                   focus:ring-blue-500/50 focus:border-blue-500/50 transition-all
                   backdrop-blur-sm"
      />
    </div>
  );
};

export default ModalInput;

