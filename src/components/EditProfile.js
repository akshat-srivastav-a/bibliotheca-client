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
  const {EditProfile} = useContext(ServerContext);
  const [editProfileFailed,setEditProfileFailed] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    // SignUp(data.get('email'),data.get('password'),data.get('firstName'),
    //     data.get('lastName'),data.get('funds'),data.get('contact'),
    //     setSignUpFailed,setCurrentPage);

    EditProfile(data.get('email'),data.get('old-password'),data.get('new-password'),data.get('firstName'),data.get('lastName'),data.get('funds'),
        data.get('contact'),setEditProfileFailed,setCurrentPage);
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
            Edit Your Account Details
          </Typography>
          <Typography component="h2" variant="subtitle1">All empty fields are left unchanged</Typography>
          <Typography component="h2" variant="subtitle1">Any change requires old password</Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  
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
                  name="old-password"
                  label="Old Password"
                  type="password"
                  id="password"
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  
                  fullWidth
                  name="new-password"
                  label="New Password"
                  type="password"
                  id="password"                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    
                    fullWidth
                    name="funds"
                    label="Desired Closing Balance"
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
            {/* {signUpFailed && 
                    <Typography fullWidth align = "center" variant="h6" color = "error">Sign Up Failed</Typography>
            } */}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link variant="body2" onClick={()=>setCurrentPage(Pages.Home)} component = "button">
                  Back to Dashboard
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