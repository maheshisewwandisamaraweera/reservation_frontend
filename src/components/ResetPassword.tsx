import React, { useState } from 'react';
import { Box, Button, TextField, IconButton, Typography, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ResetPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate(); // Initialize the navigate function

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    if (newPassword === confirmPassword) {
      alert('Password reset successfully!');
      // Redirect to OTP Success Page
      navigate('/otp-success'); // Navigate to OTPSuccessPage
    } else {
      alert('Passwords do not match.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
        width: '100vw',
      }}
    >
      <Box
        sx={{
          width: 500,
          padding: 10,
          borderRadius: 3,
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
          backgroundColor: '#fff',
          border: '1px solid #ccc',
        }}
      >
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: '#333', textAlign: 'center' }}>
          Reset Password
        </Typography>
        <TextField
          label="New password"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handlePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Confirm new password"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
          sx={{ mb: 3 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handlePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
          sx={{
            backgroundColor: '#000',
            color: '#fff',
            padding: '10px 20px',
            '&:hover': { backgroundColor: '#333' },
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ResetPassword;
