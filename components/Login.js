import React, { useState } from "react";
import { TextField, Button, Box, Typography, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUsername = "admin"; // hardcoded username
    const storedPassword = "password123"; // hardcoded password

    if (username === storedUsername && password === storedPassword) {
      localStorage.setItem("isAuthenticated", true);
      navigate("/admin");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          marginTop: "100px",
          borderRadius: 1,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Admin Login
        </Typography>

        {/* Display error message */}
        {error && (
          <Typography variant="body2" color="error" sx={{ marginBottom: "20px" }}>
            {error}
          </Typography>
        )}

        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: "20px" }}
          onClick={handleLogin}
        >
          Login
        </Button>

        <Grid container justifyContent="flex-end" sx={{ marginTop: "10px" }}>
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              Not an admin? <a href="/">Go to Home</a>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
