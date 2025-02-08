import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useState } from 'react';

interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
}

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<ProfileData>({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfilePicture(event.target.files?.[0]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log(profile);
    console.log(profilePicture);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar
          sx={{ m: 1, bgcolor: 'secondary.main' }}
          src={profilePicture ? URL.createObjectURL(profilePicture) : ''}
        />
        <Typography component="h1" variant="h5">
          Profile
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={profile.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                value={profile.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={profile.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                accept="image/*"
                type="file"
                id="profilePicture"
                onChange={handlePictureChange}
                style={{ display: 'none' }}
              />
              <label htmlFor="profilePicture">
                <Button variant="contained" component="span">
                  Upload Profile Picture
                </Button>
              </label>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save Changes
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ProfilePage;