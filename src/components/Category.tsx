import React from "react";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";

interface CategoryProps {
  title: string;
  imageUrl: string;
}

const Category: React.FC<CategoryProps> = ({ title, imageUrl }) => {
  return (
    <Card
      sx={{
        maxWidth: 350,
        textAlign: "center",
        boxShadow: 3,
        borderRadius: "8px",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          height: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f0f0f0",
        }}
      >
        <CardMedia
          component="img"
          image={imageUrl}
          alt={title}
          sx={{ width: 160, height: 160 }}
        />
      </Box>
      <CardContent>
        <Typography variant="subtitle1" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Category;
