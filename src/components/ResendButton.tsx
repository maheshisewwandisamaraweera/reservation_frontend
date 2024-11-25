import React from 'react';
import { Button } from '@mui/material';

interface ResendButtonProps {
  onClick: () => void;
}

const ResendButton: React.FC<ResendButtonProps> = ({ onClick }) => {
  return (
    <Button
      fullWidth
      variant="contained"
      onClick={onClick}
      sx={{ backgroundColor: '#b3e5fc', color: '#000', fontWeight: 'bold' }}
    >
      Resend OTP
    </Button>
  );
};

export default ResendButton;
