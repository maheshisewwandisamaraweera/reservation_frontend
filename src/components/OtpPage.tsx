import React, { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import OtpInput from '../components/OtpInput';
import ResendButton from '../components/ResendButton';
import SubmitButton from '../components/SubmitButton';

const OtpPage: React.FC = () => {
  const [otp, setOtp] = useState<string>('');

  const handleOtpChange = (value: string) => setOtp(value);

  const handleSubmit = () => {
    console.log('OTP Submitted:', otp);
  };

  const handleResend = () => {
    console.log('Resend OTP clicked');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f7f7f7',
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
        <Typography variant="h4" sx={{ mb: 3 }}>
          Enter OTP
        </Typography>
        <Typography variant="body1" sx={{ mb: 5 }}>
          Please enter the 4-digit verification code sent to your registered Email address
        </Typography>
        <OtpInput value={otp} onChange={handleOtpChange} />
        <Grid container spacing={3} sx={{ mt: 5 }}>
          <Grid item xs={6}>
            <ResendButton onClick={handleResend} />
          </Grid>
          <Grid item xs={6}>
            <SubmitButton onClick={handleSubmit} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default OtpPage;
