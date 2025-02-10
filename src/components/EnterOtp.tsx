import React, { useState } from 'react';
import { Box, Typography, Grid, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const OtpPage: React.FC = () => {
  const [otp, setOtp] = useState<string>('');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleOtpChange = (value: string) => setOtp(value);

  const handleSubmit = () => {
    console.log('OTP Submitted:', otp);
    navigate('/reset-password'); // Redirect to reset password page
  };

  const handleResend = () => {
    console.log('Resend OTP clicked');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f7f7f7',
        padding: '20px', // Optional padding for better spacing
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '600px',
          padding: '40px',
          textAlign: 'center',
          borderRadius: '12px',
          backgroundColor: '#fff',
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
        }}
      >
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: '#333' }}>
          Enter OTP
        </Typography>
        <Typography variant="body1" sx={{ mb: 5 }}>
          Please enter the 6-digit verification code sent to your registered Email address.
        </Typography>
        <TextField
          label="Enter OTP"
          variant="outlined"
          fullWidth
          value={otp}
          onChange={(e) => handleOtpChange(e.target.value)}
          sx={{ mb: 3 }}
          inputProps={{ maxLength: 6 }}
        />
        <Grid container spacing={3} sx={{ mt: 5 }}>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              onClick={handleResend}
              sx={{
                width: '100%',
                backgroundColor: '#f5f5f5',
                borderColor: '#ddd',
                color: '#333',
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                },
              }}
            >
              Resend OTP
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                width: '100%',
                backgroundColor: '#000',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#333',
                },
              }}
            >
              Submit OTP
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default OtpPage;
