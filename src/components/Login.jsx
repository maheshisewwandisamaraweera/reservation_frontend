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

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Box
        width="100%"
        maxWidth="700px" // Increased maxWidth for larger box
        p={8} // Increased padding for more space inside
        bgcolor="white"
        borderRadius={6} // Slightly more rounded corners
        boxShadow="0 8px 20px rgba(0, 0, 0, 0.15)" // Slightly stronger shadow
        minHeight="500px"
      >
        <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center">
          Login
        </Typography>

        <TextField
          variant="filled"
          placeholder="Username"
          fullWidth
          InputProps={{
            disableUnderline: true,
          }}
          sx={{
            bgcolor: "#e0e0e0",
            borderRadius: 2,
            mb: 3,
          }}
        />

        <TextField
          variant="filled"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          fullWidth
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            bgcolor: "#e0e0e0",
            borderRadius: 2,
            mb: 3,
          }}
        />

        <Box display="flex" justifyContent="flex-end" mb={3}>
          <Link href="#" underline="hover">
            Forget Password
          </Link>
        </Box>

        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "black",
            color: "white",
            py: 1.5,
            borderRadius: 2,
            "&:hover": {
              bgcolor: "#333",
            },
          }}
        >
          Login
        </Button>

        <Box display="flex" justifyContent="center" mt={3}>
          <Typography>Don't have an account?</Typography>
          <Link href="#" underline="hover" ml={1}>
            Sign Up
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
