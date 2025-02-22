import React from 'react';
import { Box, SvgIcon } from '@mui/material';

const Logo = ({ size = 40 }) => {
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
      <SvgIcon sx={{ fontSize: size, color: 'primary.main' }}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1 3.5v2h-2v-2h2zm-2.5 3.5l-1.41 1.41L10.5 14l1.41-1.41L10.5 11zm5 0L13.09 12.5 14.5 14l1.41-1.41L15.5 11zM12 15c-1.66 0-3 1.34-3 3h6c0-1.66-1.34-3-3-3z"/>
        </svg>
      </SvgIcon>
      <Box
        component="span"
        sx={{
          ml: 1,
          fontSize: size * 0.5,
          fontWeight: 700,
          color: 'primary.main',
          letterSpacing: '0.5px',
        }}
      >
        EcoParts
      </Box>
    </Box>
  );
};

export default Logo;