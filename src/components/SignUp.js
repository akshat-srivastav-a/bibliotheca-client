import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {useContext,useState,useRef} from 'react';

import Pages from '../pages.js';

import Image from '../assets/wp2036897.jpg';
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
      w : createColor('#FFFFFF')
    },
  });

export default function SignUp({setCurrentPage}) {
  const {SignUp} = useContext(ServerContext);
  const [signUpFailed,setSignUpFailed] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    SignUp(data.get('email'),data.get('password'),data.get('firstName'),
        data.get('lastName'),data.get('funds'),data.get('contact'),
        setSignUpFailed,setCurrentPage);

  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container sx = {{
          backgroundImage: `url(${Image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize : 'cover',
          height : '100vh',
      }}>    
      <Container component="main" maxWidth="sm" >
        <Paper sx = {{padding : '10px 50px 50px 50px', mt : '50px' }}> 
        <CssBaseline />        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor : 'w'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'book.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                  validate="true"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    name="funds"
                    label="Amount To Add In Wallet"
                    id="startingFunds"
                    type="number"
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    fullWidth
                    name="contact"
                    label="Contact number"
                    id="contactNumber"
                    type="tel"
                  />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, 
                    mb: 2, 

                }}
              color="book"    
            >
              Sign Up
            </Button>
            {signUpFailed && 
                    <Typography fullWidth align = "center" variant="h6" color = "error">Sign Up Failed</Typography>
            }
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link variant="body2" onClick={()=>setCurrentPage(Pages.SignIn)} component = "button">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
            
          </Box>
        </Box>
        </Paper>
      </Container>
      </Grid>
    </ThemeProvider>
  );
}