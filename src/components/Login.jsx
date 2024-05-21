import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Box, Typography, TextField, Button } from '@mui/material';

const Login = () => {
  let navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = async () => {
    const realEmail = localStorage.getItem('email');
    const realPassword = localStorage.getItem('password');
    if (realEmail === userData.email && realPassword === userData.password) {
      localStorage.setItem('accessToken', true);
      navigate('/listingtodo');
    } else {
      localStorage.setItem('accessToken', false);
      alert('Password wrong');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: 'white',
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Don't have an account?{' '}
          <Link to="/signup" style={{ color: 'blue' }}>
            Sign up here
          </Link>
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={userData.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={userData.password}
            onChange={handleChange}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            onClick={sendData}
          >
            LOGIN
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
