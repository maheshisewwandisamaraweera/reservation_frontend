import React from "react";
import { Box, Grid, Typography, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Category from "./Category"; // Import the Category component

const CategoryPage: React.FC = () => {
  const categories = [
    { id: 1, title: "Salons", imageUrl: "images/bridal-bouquet.png" },
    { id: 2, title: "Spas", imageUrl: "images/spa.jpg" },
    { id: 3, title: "Skin Care Clinics", imageUrl: "images/skin.jpg" },
    
  ];

  return (
    <Box
      sx={{
        padding: 4,
        minHeight: "100vh",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Typography */}
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#333",
          textAlign: "left", // Align to the left
          mb: 5,
        }}
      >
        Categories
      </Typography>

      {/* Search Bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          
          maxWidth: 2000,
          mb: {
            xs: 5, // Default margin-bottom for extra-small and small screens
            md: 15,  // Reduced margin-bottom for medium and larger screens
          },
        }}

        
      >
        <TextField
          placeholder="Search"
          size="small"
          fullWidth
          sx={{
            backgroundColor: "#D9D9D9",
            borderRadius: 25,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#666" }} /> {/* Icon color set here */}
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Categories Grid */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent:"center",
          
        
        }}
      >
      <Grid container spacing={4} >
        {categories.map((category) => (
          <Grid item key={category.id} xs={12} sm={6} md={4}>
            <Category title={category.title} imageUrl={category.imageUrl} />
          </Grid>
        ))}
      </Grid>
      </Box>
    </Box>
  );
};

export default CategoryPage;
