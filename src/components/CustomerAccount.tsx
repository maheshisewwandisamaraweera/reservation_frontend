import React, { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  IconButton,
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryIcon from '@mui/icons-material/History';
import PaymentIcon from '@mui/icons-material/Payment';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const PersonalAccount: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  const handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result) {
          setProfilePicture(reader.result as string); // Save the image as a base64 string
        }
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Main Container */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 4,
          maxWidth: 400,
          width: '90%',
          backgroundColor: '#fff',
          borderRadius: 4,
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Profile Avatar with Upload */}
        <Box position="relative" marginBottom={2}>
          <Avatar
            src={profilePicture || 'https://via.placeholder.com/150'} // Default profile picture
            sx={{ width: 80, height: 80 }}
            alt="Profile Picture"
          />
          <IconButton
            component="label"
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              '&:hover': { backgroundColor: '#f0f0f0' },
            }}
          >
            <PhotoCamera />
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleProfilePictureChange}
            />
          </IconButton>
        </Box>

        {/* User Information */}
        <Typography variant="h5" fontWeight="bold" color="black">
          Maheshi
        </Typography>
        <Typography variant="body2" color="black" marginBottom={3}>
          Personal account
        </Typography>

        {/* Navigation List */}
        <List sx={{ width: '100%' }}>
          <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" primaryTypographyProps={{ color: 'black' }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary="Appointment History" primaryTypographyProps={{ color: 'black' }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText primary="Payment Details" primaryTypographyProps={{ color: 'black' }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" primaryTypographyProps={{ color: 'black' }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" primaryTypographyProps={{ color: 'black' }} />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default PersonalAccount;
