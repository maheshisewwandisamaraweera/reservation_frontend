import React, { useState } from "react";
import { Box, Button, TextField, Typography, Container } from "@mui/material";

const ForgetPassword: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email submitted:", email);
    
  };

  return (
    <Box
      sx={{
        width: "100vw", 
        height: "100vh", 
        backgroundColor: "#f5f5f5", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="sm" 
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 600, 
            padding: 8, 
            backgroundColor: "white",
            borderRadius: 3, 
            boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.2)", 
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4" 
            sx={{
              mb: 3,
              fontWeight: 600,
              color: "#333", 
            }}
          >
            Forget Password
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: "#666", 
              fontSize: "16px", 
            }}
          >
            Enter your email address below and we'll send you instructions to reset your password.
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              type="email"
              label="Email Address"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 3 }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "black", 
                color: "white", 
                fontWeight: "bold",
                textTransform: "none",
                ":hover": {
                  backgroundColor: "#333", 
                },
                width: "100%",
                padding: "14px", 
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ForgetPassword;
