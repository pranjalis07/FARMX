import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../../utils/imgs/logo.png';
import { Card, IconButton } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                FarmX
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#14a44d',
            light: '#d6f0e0',
            dark: '#14a44d',
            contrastText: '#fff',
        },
        secondary: {
            light: '#c2c5c9',
            main: '#212529',
            dark: '#212529',
            contrastText: '#000',
        },
    },
});


export default function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{
                height: '100vh',
                backgroundImage: `linear-gradient( to right, rgba(0, 0, 0, 1), rgba(0, 0,0, 0)), url(https://source.unsplash.com/random/?agriculture) `,
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            >
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={6}
                    sx={{
                        display: { xs: 'none', sm: 'block' },

                        // backgroundColor: 'rgba(255,255,255, 0.15)',
                        // boxShadow: '0 0 5px 10px rgba(0,0,0,0.15)',
                        // backdropFilter:'blur(25px)'

                        // backgroundImage: 'url(https://source.unsplash.com/random/?farm,farming)',
                        // backgroundRepeat: 'no-repeat',
                        // backgroundColor: (t) =>
                        //     t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        // backgroundSize: 'cover',
                        // backgroundPosition: 'center',
                    }}
                >
                    <a href='/'><img src={Logo} alt="logo" height={80} /></a>
                    <Box sx={{
                        p: { xs: 0, sm: 5 },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                    }}>
                        <Typography component='h1' variant='h1' sx={{
                            color: 'primary.main',
                            textShadow: '1px 1px 10px rgba(0, 0, 0, 0.4)',
                            fontWeight: 500
                        }}>Welcome to <strong>FarmX</strong></Typography>
                        <Typography component='h1' variant='h3'
                            sx={{
                                color: '#fff',
                                textShadow: '1px 1px 10px rgba(0, 0, 0, 0.4)',
                                fontWeight: 500
                            }}
                        >Login to your account to get started</Typography>
                    </Box>

                </Grid>
                <Grid item xs={12} sm={8} md={6} elevation={6} square>
                    <Box
                        sx={{
                            mt: 8,
                            mb:5,
                            mx: { xs: 2, sm: 4 },
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Card
                            elevation={5}
                            sx={{
                                borderRadius: 5,
                                p: { xs: 3, sm: 10 },
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Grid container spacing={2} >
                                <Grid item sm={5} xs={4}>
                                    <IconButton sx={{ mb: 2, color: 'primary.main' }} href='/'>
                                        <ArrowBackIos />
                                    </IconButton>
                                </Grid>
                                <Grid item sm={7} xs={8}>
                                    <Avatar sx={{ m: 1, ml: 3, bgcolor: 'secondary.main' }}>
                                        <LockOutlinedIcon />
                                    </Avatar>
                                    <Typography component="h1" variant="h5">
                                        Sign In
                                    </Typography>
                                </Grid>

                            </Grid>
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
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button
                                    component={Link}
                                    to='/farmerRegistration'
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link to="#" variant="body2" >
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link to="/signup" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Copyright sx={{ mt: 5 }} />
                            </Box>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider >
    );
}