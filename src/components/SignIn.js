import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from '../assets/wp2036897.jpg';
import Pages from '../pages';

import {useContext,useState,useRef} from 'react';
import {ServerContext} from '../contexts/ServerContext';

// const theme = createTheme();

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
    palette: {
      anger: createColor('#F40B27'),
      apple: createColor('#5DBA40'),
      steelBlue: createColor('#5C76B7'),
      violet: createColor('#BC00A3'),
      book : createColor('#893618'),
    },
  });


// const styles = {
//     "&.MuiButton-root": {
//       border: "2px black solid"
//     },
//     "&.MuiButton-text": {
//       color: "grey"
//     },
//     "&.MuiButton-contained": {
//       color: "yellow"
//     },
//     "&.MuiButton-outlined": {
//       color: "brown"
//     }
// };

export default function SignInSide({setCurrentPage}) {
    const {Login} = useContext(ServerContext);    
    const [loginFailed,setLoginFailed] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // console.log({
        //   email: data.get('email'),
        //   password: data.get('password'),      
        // });
        // data.get('name');
        Login(data.get('email'),data.get('password'),setLoginFailed,setCurrentPage);
    };


  const email = useRef("");


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh'}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${Image})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor : 'book.main' }}  color = "primary">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                // inputRef = {email}
                // value = {currentEmail}
                // onChange = {(event)=>setCurrentEmail(event.target.value)}
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
                // value = {currentPassword}
                // onChange = {(event)=>setCurrentPassword(event.target.value)}
              />
                            
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2,     
                    }
                }
                color = "book"
                // onClick = {()=>Login(currentEmail, currentPassword,setLoginFailed)}
              >
                Sign In
              </Button>
              
              {loginFailed && 
                    <Typography fullWidth align = "center" variant="h6" color = "error">Login Failed</Typography>
                }
              <Grid container>
                <Grid item xs>
                    
                </Grid>
                <Grid item>
                  <Link onClick = {()=>setCurrentPage(Pages.SignUp)} variant="body2" component="button">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              

            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}