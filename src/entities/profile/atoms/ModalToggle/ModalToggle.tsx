'use client'
import React from 'react';

interface ModalToggleProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  description?: string;
  className?: string;
}

const ModalToggle: React.FC<ModalToggleProps> = ({
  label,
  checked,
  onChange,
  description,
  className = ""
}) => {
  return (
    <div className={`space-y-3 ${className}`} dir="rtl">
      <div className="flex items-center justify-between">
        <label className="text-white text-sm font-medium">
          {label}
        </label>

        <button
          type="button"
          onClick={() => onChange(!checked)}
          className={`
            relative inline-flex h-6 w-12 items-center rounded-full transition-colors
            focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2
            focus:ring-offset-gray-800
            ${checked ? 'bg-blue-600' : 'bg-gray-600'}
          `}
        >
          <span
            className={`
              absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform
              ${checked ? 'translate-x-6' : 'translate-x-0'}
            `}
          />
        </button>
      </div>

      {description && (
        <p className="text-gray-400 text-xs leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default ModalToggle;

