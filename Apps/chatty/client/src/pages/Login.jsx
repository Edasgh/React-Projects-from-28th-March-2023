import React, { useState } from 'react';
import { Container, 
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Avatar,
  IconButton,
 } from '@mui/material';
import {ThemeProvider,createTheme} from '@mui/material';
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { VisuallyHiddenInput } from "../components/styles/styledComponents";
import {useFileHandler, useInputValidation, useStrongPassword} from "6pp"
import { usernameValidator } from '../utils/validators';

const Login = () => {

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

  const [isLogin,setIsLogin] = useState(true);
const toggleLogin = () => setIsLogin((prev) => !prev);

const name = useInputValidation("");
const bio = useInputValidation("");
const username = useInputValidation("",usernameValidator);
const password = useStrongPassword();

const avatar = useFileHandler("single");


const handleLogin=(e)=>{
  e.preventDefault();
}

const handleSignup=(e)=>{
  e.preventDefault();

}


  return (
    <>
      <Container
        component={"main"}
        maxWidth={"xs"}
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isLogin ? (
            <>
              <Typography variant="h5">Login</Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}

                onSubmit={handleLogin}
              >
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                />
                {username.error && (
                  <Typography variant="caption" color="error">
                    {username.error}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                />
                <Button
                  sx={{ marginTop: "1rem" }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Login
                </Button>
                <Typography textAlign={"center"} m={"1rem"}>
                  OR
                </Typography>
                <Button
                  sx={{ marginTop: "1rem" }}
                  fullWidth
                  variant="text"
                  onClick={toggleLogin}
                >
                  Sign Up Instead
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5">Sign Up</Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}

                onSubmit={handleSignup}
              >
                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                  <Avatar
                    sx={{
                      height: "10rem",
                      width: "10rem",
                      objectFit: "contain",
                    }}
                    src={avatar.preview}
                  />

                  <ThemeProvider theme={theme}>
                    <IconButton
                      sx={{
                        position: "absolute",
                        bottom: "0",
                        right: "0",
                        color: "white",
                        bgcolor: "rgba(0,0,0,0.5)",
                        ":hover": {
                          bgcolor: "rgba(0,0,0,0.7)",
                        },
                      }}
                      component="label"
                    >
                      <AddAPhotoIcon />
                      <VisuallyHiddenInput
                        type="file"
                        onChange={avatar.changeHandler}
                      />
                    </IconButton>
                  </ThemeProvider>
                </Stack>
                {avatar.error && (
                  <Typography 
                    m={"1rem"}
                    width={"fit-content"}
                    display={"block"}
                    variant="caption" color="error">
                    {avatar.error}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  value={name.value}
                  onChange={name.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Bio"
                  margin="normal"
                  variant="outlined"
                  value={bio.value}
                  onChange={bio.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                />

                {username.error && (
                  <Typography variant="caption" color="error">
                    {username.error}
                  </Typography>
                )}

                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                />
                {password.error && (
                  <Typography variant="caption" color="error">
                    {password.error}
                  </Typography>
                )}
                <Button
                  sx={{ marginTop: "1rem" }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Sign Up
                </Button>
                <Typography textAlign={"center"} m={"1rem"}>
                  OR
                </Typography>
                <Button
                  sx={{ marginTop: "1rem" }}
                  fullWidth
                  variant="text"
                  onClick={toggleLogin}
                >
                  Log In Instead
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </>
  );
}

export default Login