import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface AtomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
  activeGradient?: string; // گرادیانت زمانی که فعال است
  inactiveGradient?: string; // گرادیانت زمانی که غیر فعال است
}

const GradientButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isActive' && prop !== 'activeGradient' && prop !== 'inactiveGradient',
})<{ 
  isActive?: boolean; 
  activeGradient?: string;
  inactiveGradient?: string;
}>(({ isActive, activeGradient, inactiveGradient }) => ({
  position: 'relative',
  height: '48px',
  padding: '10px 24px',
  fontWeight: 500,
  fontSize: '1rem',
  borderRadius: '42px',
  transition: 'all 0.3s ease-in-out',
  transform: 'scale(1)',
  ...(isActive
    ? {
        background: activeGradient || 'linear-gradient(to right, #6366f1, #a855f7, #ec4899)',
        color: '#fff',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        '&:hover': {
          transform: 'scale(1.05)',
        },
        '&:active': {
          transform: 'scale(0.95)',
        },
      }
    : {
        background: 'transparent',
        color: '#4f46e5',
        border: '2px solid transparent',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: '42px',
          padding: '2px',
          background: inactiveGradient || 'linear-gradient(to right, #6366f1, #a855f7, #ec4899)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          zIndex: 0,
        },
        '&:hover': {
          transform: 'scale(1.05)',
        },
        '&:active': {
          transform: 'scale(0.95)',
        },
      }),
}));

const AtomButton: React.FC<AtomButtonProps> = ({
  children,
  onClick,
  isActive: controlledIsActive,
  className = '',
  activeGradient,
  inactiveGradient,
}) => {
  const [internalIsActive, setInternalIsActive] = useState(false);

  const isActive = controlledIsActive !== undefined ? controlledIsActive : internalIsActive;

  const handleClick = () => {
    if (controlledIsActive === undefined) {
      setInternalIsActive(!internalIsActive);
    }
    onClick?.();
  };

  return (
    <GradientButton
      onClick={handleClick}
      isActive={isActive}
      className={className}
      activeGradient={activeGradient}
      inactiveGradient={inactiveGradient}
    >
      {children}
    </GradientButton>
  );
};

export default AtomButton;
