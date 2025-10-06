// src/entities/global/atoms/Snackbar/SnackbarAtom.tsx
import React from 'react';
import { Snackbar, Alert, AlertColor } from '@mui/material';

interface SnackbarAtomProps {
  open: boolean;
  message: string;
  severity: AlertColor;
  onClose: () => void;
  autoHideDuration?: number;
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
}

function SnackbarAtom({
  open,
  message,
  severity,
  onClose,
  autoHideDuration = 4000,
  anchorOrigin = { vertical: 'top', horizontal: 'center' }
}: SnackbarAtomProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{
          width: '100%',
          borderRadius: '12px',
          backgroundColor: severity === 'error' 
            ? 'rgba(211, 47, 47, 0.9)' 
            : 'rgba(46, 125, 50, 0.9)',
          color: '#fff',
          fontFamily: 'IRANSansWeb',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          '& .MuiAlert-icon': {
            color: '#fff'
          }
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default SnackbarAtom;