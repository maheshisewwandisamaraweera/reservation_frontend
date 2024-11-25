import React, { useRef } from 'react';
import { Box, TextField } from '@mui/material';

interface OtpInputProps {
  value: string;
  onChange: (value: string) => void;
  length?: number; 
}

const OtpInput: React.FC<OtpInputProps> = ({ value, onChange, length = 4 }) => {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = e.target.value;
    if (newValue.match(/^[0-9]$/)) {
     
      const otpArray = value.split('');
      otpArray[index] = newValue;
      const updatedOtp = otpArray.join('');
      onChange(updatedOtp);

      
      if (index < length - 1 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus();
      }
    } else if (newValue === '') {
      
      const otpArray = value.split('');
      otpArray[index] = '';
      onChange(otpArray.join(''));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '20px',
      }}
    >
      {Array.from({ length }).map((_, index) => (
        <TextField
          key={index}
          inputRef={(el) => (inputRefs.current[index] = el)}
          value={value[index] || ''}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          inputProps={{
            maxLength: 1,
            style: {
              textAlign: 'center',
              fontSize: '18px',
              padding: '10px',
              width: '50px',
            },
          }}
          variant="outlined"
        />
      ))}
    </Box>
  );
};

export default OtpInput;
