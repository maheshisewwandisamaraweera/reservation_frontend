import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [role, setRole] = useState<string>("client");
  const [formData, setFormData] = useState({
    username: "",
    address: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    businessType: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (event: any) => {
    setRole(event.target.value);
  };

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};

    if (!formData.username.trim() && (role === "client" || role === "service-provider-staff")) {
      newErrors.username = "Username is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email format";
    }

    if (formData.contact.length !== 10 || isNaN(Number(formData.contact))) {
      newErrors.contact = "Contact number must be exactly 10 digits";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one lowercase letter";
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one number";
    } else if (!/[@$!%*?&]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one special character";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = () => {
    if (validateForm()) {
      console.log("Registering user...");
      navigate("/login");
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f9fa",
      }}
    >
      <Box
        sx={{
          width: 500,
          padding: 4,
          boxShadow: 3,
          borderRadius: 3,
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        <Typography variant="h4" mb={3} sx={{ color: "black" }}>
          Sign Up
        </Typography>

        {/* Role Selection */}
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="role-select-label">Role</InputLabel>
          <Select labelId="role-select-label" value={role} onChange={handleRoleChange} label="Role">
            <MenuItem value="client">Client</MenuItem>
            <MenuItem value="service-provider-admin">Service Provider Admin</MenuItem>
            <MenuItem value="service-provider-staff">Service Provider Staff</MenuItem>
          </Select>
        </FormControl>

        {/* Role-Specific Fields */}
        {role === "client" && (
          <>
            <TextField fullWidth name="username" label="Username" onChange={handleChange} margin="normal" error={!!errors.username} helperText={errors.username} />
            <TextField fullWidth name="address" label="Address" onChange={handleChange} margin="normal" />
            <TextField fullWidth name="email" label="Email" onChange={handleChange} margin="normal" error={!!errors.email} helperText={errors.email} />
            <TextField fullWidth name="contact" label="Contact Number" onChange={handleChange} margin="normal" error={!!errors.contact} helperText={errors.contact} />
          </>
        )}

        {role === "service-provider-admin" && (
          <>
            <TextField fullWidth name="businessName" label="Business Name" onChange={handleChange} margin="normal" />
            <TextField fullWidth name="address" label="Address" onChange={handleChange} margin="normal" />
            <TextField fullWidth name="businessType" label="Business Type" onChange={handleChange} margin="normal" />
            <TextField fullWidth name="contact" label="Contact Number" onChange={handleChange} margin="normal" error={!!errors.contact} helperText={errors.contact} />
          </>
        )}

        {role === "service-provider-staff" && (
          <>
            <TextField fullWidth name="businessName" label="Business Name" onChange={handleChange} margin="normal" />
            <TextField fullWidth name="username" label="Username" onChange={handleChange} margin="normal" error={!!errors.username} helperText={errors.username} />
            <TextField fullWidth name="email" label="Email" onChange={handleChange} margin="normal" error={!!errors.email} helperText={errors.email} />
            <TextField fullWidth name="contact" label="Contact Number" onChange={handleChange} margin="normal" error={!!errors.contact} helperText={errors.contact} />
          </>
        )}

        {/* Password Fields */}
        <TextField
          fullWidth
          name="password"
          label="Password"
          onChange={handleChange}
          type={showPassword ? "text" : "password"}
          margin="normal"
          error={!!errors.password}
          helperText={errors.password}
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

        <TextField
          fullWidth
          name="confirmPassword"
          label="Confirm Password"
          onChange={handleChange}
          type={showPassword ? "text" : "password"}
          margin="normal"
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
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

        <Button variant="contained" fullWidth sx={{ mt: 3, py: 1.2, backgroundColor: "#000000", color: "white" }} onClick={handleSignUp}>
          Sign Up
        </Button>

        <Typography variant="body1" sx={{ mt: 2, color: "black" }}>
          Already have an account? <Link component="button" sx={{ fontWeight: "bold" }} onClick={() => navigate("/login")}>Login</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;
