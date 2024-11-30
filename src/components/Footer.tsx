import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'black',
        color: 'white',
        padding: '20px 0',
      }}
    >
      <Grid container sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Left Column - Contact Details */}
        <Grid item xs={12} sm={6} md={6} sx={{ paddingLeft: '20px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '5px' }}>
            169/2 John Rodrigo Mawatha, Katubedda
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '5px' }}>
            Moratuwa, Sri Lanka
          </Typography>
        </Grid>

        {/* Right Column - Phone Numbers */}
        <Grid item xs={12} sm={6} md={6} sx={{ paddingRight: '20px', textAlign: 'right' }}>
          <Typography variant="body2" sx={{ marginBottom: '5px' }}>
            077 56 34 278
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '5px' }}>
            011 67 23 098
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="body2" sx={{ fontSize: '14px' }}>
          All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
