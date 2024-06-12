import React from 'react';
import { Box } from '@mui/material';

const Logo: React.FC = () => {
  return (
    <Box
      component="img"
      sx={{
        height: '7rem',
        width: '7rem',
        left: '6rem',
        position: 'absolute',
        zIndex: 1,
      }}
      alt="Logo"
      src="/Chimpanzee_Logo.png"
    />
  );
};

export default Logo;
