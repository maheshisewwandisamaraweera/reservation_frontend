import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";

const About: React.FC = () => {
  return (
    <Box
      sx={{
        margin:"",
        backgroundColor: "white",
        borderRadius: "8px", 
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", 
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: "bold",
              marginBottom: "1.5rem",
              color: "black",
              textAlign: { xs: "center", md: "left" }, 
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: "1.8",
              fontSize: "1.1rem",
              color: "black",
              textAlign: { xs: "center", md: "left" }, 
            }}
          >
            Reservation app for appointments and booking is a powerful reservation and appointment platform
            designed for salons, spas, and beauty clinics. We make booking,
            scheduling, and customer management easy with real-time updates and
            personalized communication. Our goal is to streamline operations so
            you can focus on delivering great service.
          </Typography>
        </Grid>

        {}
        <Grid item xs={12} md={6}>
        <Box 
  sx={{
    display: "flex",
    flexDirection: { xs: "column", sm: "row" }, 
    gap: "16px", 
  }}
>
  {}
  <Box
    component="img"
    src="/src/images/bridal_bouquet.png" 
    alt="Bride holding flowers"
    sx={{
      width: { xs: "100%", sm: "50%" }, 
      height: "300px", 
      borderRadius: "8px",
      objectFit: "cover", 
    }}
  />

  {}
  <Box
    component="img"
    src="/src/images/bridal.jpg" 
    alt="Luxury Beauty Clinic"
    sx={{
      width: { xs: "80%", sm: "50%" }, 
      height: "300px", 
      borderRadius: "8px",
      objectFit: "cover", 
    }}
  />
</Box>


          {}
          <Box
  component="img"
  src="/src/images/clinic.jpg" 
  alt="Bride"
  sx={{
    width: "100%", 
    height: "auto", 
    maxHeight: "400px", 
    borderRadius: "8px",
    objectFit: "cover", 
    marginTop: "1rem",
  }}
/>

        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
