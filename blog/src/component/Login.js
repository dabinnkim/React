import { TextField } from '@mui/material'
import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Login = () => {
  return (
    <Container component="main" maxWidth="xs">
        <Box sx={{marginTop:8, display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <TextField id='email' variant="standard" required margin="normal" label='Email Address' fullWidth autoComplete='email' autoFocus/>
            <TextField id='password' variant="standard" type='password' required margin="normal" label='Password' fullWidth autoComplete='current-password'/>
            <FormControlLabel control={<Checkbox value="remember" color="primary"/>} label='Remember me'/>        
            <Button type='submit' variant='contained' fullWidth sx={{mt:3, mb:2}}>Sign In</Button>
            <Grid container sx={{mb:3}}>
                <Grid item xs textAlign={'left'}>
                    <Link href='#'>Forgot password?</Link>
                </Grid>
                <Grid item>
                    <Link>Sign up</Link>
                </Grid>
            </Grid>
        </Box>
        
    </Container>
  )
}

export default Login
