import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

const HomePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/src/images/spa.jpg',
    '/src/images/salon.jpg',
    '/src/images/clinic.jpg',
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      {/* Navbar */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          width: '100vw', // Full width for navbar
          maxWidth: '100%', // Ensure no horizontal scroll
        }}
      >
        <Toolbar
          sx={{
            justifyContent:'space-between',//justifyContent: '',
            paddingX: 3, // Add padding to navbar
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'space-between' }}>
            <Typography variant="h6" sx={{ marginRight: 3, fontWeight: 'bold' }}>
              Logo
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Profile</Button>
            <Button color="inherit">Contact Us</Button>
          </Box>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '100vh', // Full screen height
          width: '100vw', // Full width for the picture
          maxWidth: '100%', // Prevent overflow
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay
            zIndex: 1,
          }}
        />

        {/* Text Over Image */}
        <Box
          sx={{
            position: 'relative',
            color: 'white',
            zIndex: 2,
            textAlign: 'center',
            paddingX: 5, // Add padding for wider screens
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              marginBottom: 2,
              fontSize: { xs: '2rem', md: '3rem' }, // Adjust font size for responsiveness
            }}
          >
            Welcome to Our Service
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: '1rem', md: '1.5rem' }, // Adjust font size for responsiveness
            }}
          >
            Your comfort is our priority.
          </Typography>
        </Box>

        {/* Navigation Arrows */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            zIndex: 3,
          }}
        >
          <IconButton onClick={handlePrev} sx={{ color: 'white' }}>
            <ArrowBackIosNew />
          </IconButton>
          <IconButton onClick={handleNext} sx={{ color: 'white' }}>
            <ArrowForwardIos />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;
