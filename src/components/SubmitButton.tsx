import React from 'react';
import { Button } from '@mui/material';

interface SubmitButtonProps {
  onClick: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
  return (
    <Button
      fullWidth
      variant="contained"
      onClick={onClick}
      sx={{ backgroundColor: '#000', color: '#fff', fontWeight: 'bold' }}
    >
      Submit
    </Button>
  );
};

export default SubmitButton;
