import React from "react";
import { Box, Button, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const OTPSuccessPage: React.FC = () => {
  const handleRedirectToLogin = () => {
    alert("Redirecting to login page!");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
        width: "100vw", // Full viewport width
        backgroundColor: "#fff", // White background
        margin: 0,
        padding: 0,
        boxSizing: "border-box", // Includes padding/border in width/height
      }}
    >
      {/* Success Icon */}
      <CheckCircleOutlineIcon
        sx={{
          fontSize: 100, // Icon size
          color: "green", // Success color
          marginBottom: "20px", // Spacing below icon
        }}
      />

      {/* Success Message */}
      <Typography
        variant="h6"
        sx={{
          fontSize: "18px",
          fontWeight: 400,
          textAlign: "center", // Center-align text
          marginBottom: "20px", // Spacing below text
        }}
      >
        Your password reset successfully!
      </Typography>

      {/* Login Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#000", // Black button background
          color: "#fff", // White text
          padding: "12px 24px",
          fontSize: "16px",
          borderRadius: "8px", // Rounded button
          "&:hover": {
            backgroundColor: "#333", // Darker on hover
          },
        }}
        onClick={handleRedirectToLogin}
      >
        Login
      </Button>
    </Box>
  );
};

export default OTPSuccessPage;
