import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = () => {
    console.log("Logging in...");
    // Add your login logic here (API call, etc.)
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          width: 500, // Increased box width
          padding: 4, // Increased padding for a more spacious feel
          boxShadow: 3,
          borderRadius: 3,
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        <Typography variant="h4" mb={3} sx={{ color: "black" }}>
          Login
        </Typography>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          sx={{ mb: 2 }} // Adjusted margin for spacing
        />
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          margin="normal"
          sx={{ mb: 2 }} // Adjusted margin for spacing
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {/* Forgot Password Link */}
        <Typography
          variant="body2"
          sx={{
            textAlign: "right",
            mb: 2,
            color: "black",
            fontSize: "0.875rem", // Smaller font size
          }}
        >
          <Link
            component="button"
            sx={{
              color: "black",
              fontWeight: "bold",
              textDecoration: "none", // No underline
            }}
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password?
          </Link>
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            py: 1.2,
            backgroundColor: "#000000",
            color: "white",
            "&:hover": { backgroundColor: "#333333" }, // Darker shade on hover
          }}
          onClick={handleLogin}
        >
          Login
        </Button>

        <Typography variant="body1" sx={{ mt: 2, color: "black" }}>
          Don't have an account?{" "}
          <Link
            component="button"
            sx={{
              color: "black",
              fontWeight: "bold",
              textDecoration: "none", // No underline
            }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
