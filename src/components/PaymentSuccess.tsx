import React from "react";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const PaymentSuccess: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#ffffff", // White background
      }}
    >
      {/* Check Icon */}
      <CheckCircleIcon
        sx={{
          fontSize: 100, // Size of the icon
          color: "#4CAF50", // Green color
          backgroundColor: "#E8F5E9", // Light green background
          borderRadius: "50%",
          padding: 2,
        }}
      />

      {/* Success Text */}
      <Typography
        variant="h6"
        sx={{
          marginTop: 2, // Space between icon and text
          color: "#333333", // Dark text
        }}
      >
        Your payment is successful!
      </Typography>
    </Box>
  );
};

export default PaymentSuccess;
