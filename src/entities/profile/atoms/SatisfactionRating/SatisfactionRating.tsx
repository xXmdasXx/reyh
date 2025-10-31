import React from 'react';
import { Box, Typography } from '@mui/material';

interface SatisfactionRatingProps {
  percentage?: number;
  size?: number;
}

const SatisfactionRating: React.FC<SatisfactionRatingProps> = ({ 
  percentage = 95, 
  size = 80 
}) => {
  const normalizedPercentage = Math.min(Math.max(percentage, 0), 100);
  
  // Calculate the end angle for the arc (180 degrees for semi-circle)
  const endAngle = (normalizedPercentage / 100) * 180;
  
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative',
        width: size,
        height: size * 0.6,
      }}
    >
      {/* Semi-circular progress indicator */}
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        {/* Background arc (unfilled portion) */}
        <svg
          width={size}
          height={size * 0.6}
          style={{ position: 'absolute' }}
        >
          <path
            d={`M ${size * 0.15} ${size * 0.85} A ${size * 0.35} ${size * 0.35} 0 0 1 ${size * 0.85} ${size * 0.85}`}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
        
        {/* Filled progress arc */}
        <svg
          width={size}
          height={size * 0.6}
          style={{ position: 'absolute' }}
        >
          <path
            d={`M ${size * 0.15} ${size * 0.85} A ${size * 0.35} ${size * 0.35} 0 0 1 ${size * 0.5 + size * 0.35 * Math.cos((180 - endAngle) * Math.PI / 180)} ${size * 0.5 - size * 0.35 * Math.sin((180 - endAngle) * Math.PI / 180)}`}
            fill="none"
            stroke="#4D88FF"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
        
        {/* Central emoji container */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: size * 0.2,
            height: size * 0.2,
            borderRadius: '50%',
            backgroundColor: '#4D88FF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: size * 0.12,
          }}
        >
          😊
        </Box>
      </Box>
      
      {/* Bottom percentage display */}
      <Box
        sx={{
          mt: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(6, 11, 40, 0.8)',
          borderRadius: 2,
          px: 2,
          py: 1,
          minWidth: 100,
          position: 'relative',
        }}
      >
        {/* Min/Max labels */}
        <Typography
          sx={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.6rem',
            position: 'absolute',
            left: 4,
            fontFamily: 'IRANSansWeb',
          }}
        >
          ۱۰۰%
        </Typography>
        
        <Typography
          sx={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.6rem',
            position: 'absolute',
            right: 4,
            fontFamily: 'IRANSansWeb',
          }}
        >
          ۰%
        </Typography>
        
        {/* Main percentage */}
        <Typography
          sx={{
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            fontFamily: 'IRANSansWeb',
            zIndex: 1,
          }}
        >
          {normalizedPercentage}%
        </Typography>
      </Box>
    </Box>
  );
};

export default SatisfactionRating;
