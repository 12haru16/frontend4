import { useState } from "react";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const defaultTheme = createTheme();

  const handleLogin = async () => {
    try {
      // console.log("111");
      // console.log(username)
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username:username, 
          password:password}),
      });
      if (response.ok) {
        // ログイン成功の処理
        console.log("login_OK");
        // setError("");
        // ログインが成功した場合に適切な処理を行う（例：トークンの保存など）
        navigate("main")
      } else {
        // ログイン失敗の処理
        const errorData = await response.json();
        setError(errorData.detail);
      }
    } catch (error) {
      console.error("login Error:", error);
      setError("An error occurred");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setUsername(event.target.value);
              }}
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
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value);
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick={()=>handleLogin}
              // onClick={handleLogin}
              onClick={() => navigate("/main")}
            >
              Sign In
            </Button>
            <p>{error && <p>{error}</p>}</p>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="error"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => navigate("main")}
            >
              テスト用　MAINページへ
            </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;