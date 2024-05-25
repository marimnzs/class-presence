import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Logo: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '20px',
      }}
    >
      <Typography
        sx={{
          fontSize: '34px',
          color: '#595959',
        }}
      >
        Class
      </Typography>
      <Typography
        sx={{
          fontSize: '34px',
          color: '#8D3E64',
          fontWeight: 'bold',
        }}
      >
        Presence
      </Typography>
    </Box>
  );
};

export default Logo;
