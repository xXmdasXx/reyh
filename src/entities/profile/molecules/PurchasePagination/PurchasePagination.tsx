// entities/profile/molecules/PurchasePagination/PurchasePagination.tsx
'use client'
import React from "react";

interface PurchasePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const PurchasePagination: React.FC<PurchasePaginationProps> = ({ 
  currentPage, 
  totalPages,
  onPageChange,
  className
}) => {
  return (
    <div className={`flex justify-center gap-2 ${className ?? ''}`}>
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="w-8 h-8 rounded bg-[#110F48] hover:bg-[#2a1f44] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
        const pageNumber = i + 1;
        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`w-8 h-8 rounded ${
              currentPage === pageNumber ? 'bg-gradient-to-r from-[#FF7344] to-[#35115F]' : 'bg-[#110F48] hover:bg-[#2a1f44]'
            }`}
          >
            {pageNumber}
          </button>
        );
      })}
      
      {totalPages > 5 && (
        <>
          <span className="w-8 h-8 flex items-center justify-center text-white/50">...</span>
          <button
            onClick={() => onPageChange(totalPages)}
            className={`w-8 h-8 rounded ${
              currentPage === totalPages ? 'bg-gradient-to-r from-[#FF7344] to-[#35115F]' : 'bg-[#110F48] hover:bg-[#2a1f44]'
            }`}
          >
            {totalPages}
          </button>
        </>
      )}
      
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="w-8 h-8 rounded bg-[#110F48] hover:bg-[#2a1f44] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    </div>
  );
};

export default PurchasePagination;
