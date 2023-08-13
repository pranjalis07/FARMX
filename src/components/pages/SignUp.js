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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../../utils/imgs/logo.png';
import { Card, IconButton } from '@mui/material';
import { MenuItem } from "@mui/material";
import { ArrowBackIos } from '@mui/icons-material';



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

const roles = ["Farmer", "Consumer"];

export default function SignUp() {

    const [activeStep, setActiveStep] = React.useState("selectRole");
    const [role, setRole] = React.useState('');

    const handleNext = () => {
        setActiveStep("signup");
    };

    const handleBack = () => {
        if (activeStep === 'signup') {
            setActiveStep('selectRole');
        }
        else {
            window.location.href('/')
        }

    }

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
                        }}>Be a part of the Agricultural Revolution</Typography>
                        <Typography component='h1' variant='h3'
                            sx={{
                                color: '#fff',
                                textShadow: '1px 1px 10px rgba(0, 0, 0, 0.4)',
                                fontWeight: 500
                            }}
                        >Create an account and start growing your business</Typography>
                    </Box>

                </Grid>
                <Grid item xs={12} sm={8} md={6} elevation={6} square>
                    <Box
                        sx={{
                            mt: 8,
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
                                p: { xs: 3, sm: 8 },
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: { sm: '100%' },
                                height: { sm: '100%' },
                            }}
                        >
                            <Grid container spacing={2} >
                                <Grid item sm={5} xs={4}>
                                    {activeStep === 'selectRole' ? (<>
                                        <IconButton sx={{ mb: 2, color: 'primary.main' }} href='/'>
                                            <ArrowBackIos/>
                                        </IconButton></>
                                    ) : (
                                        <>
                                            <IconButton sx={{ mb: 2, color: 'primary.main' }} onClick={handleBack}>
                                                <ArrowBackIos />
                                            </IconButton>
                                        </>)}
                                </Grid>
                                <Grid item sm={7} xs={8}>
                                    <Avatar sx={{ m: 1, ml: 3, bgcolor: 'secondary.main' }}>
                                        <LockOutlinedIcon />
                                    </Avatar>
                                    <Typography component="h1" variant="h5">
                                        Sign Up
                                    </Typography>
                                </Grid>

                            </Grid>



                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                {
                                    activeStep === "selectRole" ? (
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Typography component='h1' variant='h2'
                                                    sx={{
                                                        my: 1,
                                                        color: 'primary.main',
                                                        fontWeight: 500,
                                                        width: { sm: '500px' }
                                                    }}>
                                                    Get Started
                                                </Typography>
                                                <Typography component='h1' variant='subtitle1'
                                                    sx={{
                                                        color: 'secondary.light',
                                                        my: 1,
                                                        fontWeight: 500,
                                                    }}>
                                                    Select the role that best describes you
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    select
                                                    id="role"
                                                    label="Select Role"
                                                    value={role}
                                                    onChange={(event) => {
                                                        setRole(event.target.value);
                                                    }}
                                                    inputProps={{
                                                        required: true
                                                    }}
                                                >
                                                    {roles.map((option) => (
                                                        <MenuItem key={option} value={option}>
                                                            {option}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </Grid>
                                        </Grid>
                                    ) : (
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    autoComplete="given-name"
                                                    name="firstName"
                                                    fullWidth
                                                    id="firstName"
                                                    label="First Name"
                                                    autoFocus
                                                    inputProps={{
                                                        required: true
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    id="lastName"
                                                    label="Last Name"
                                                    name="lastName"
                                                    autoComplete="family-name"
                                                    inputProps={{
                                                        required: true
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    id="email"
                                                    label="Email Address"
                                                    name="email"
                                                    autoComplete="email"
                                                    inputProps={{
                                                        required: true
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    name="password"
                                                    label="Password"
                                                    type="password"
                                                    id="password"
                                                    autoComplete="new-password"
                                                    inputProps={{
                                                        required: true
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControlLabel
                                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                                    label="I agree the Terms and Conditions"
                                                />
                                            </Grid>
                                        </Grid>
                                    )
                                }

                                {
                                    activeStep === "selectRole" ? (
                                        <Button
                                            onClick={handleNext}
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                        >
                                            Next
                                        </Button>
                                    ) : (
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                        >
                                            Sign Up
                                        </Button>
                                    )

                                }
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link href="/signin" variant="body2">
                                            Already have an account? Sign in
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Copyright sx={{ mt: 5 }} />
                            </Box>
                        </Card>
                    </Box>
                </Grid>
            </Grid >
        </ThemeProvider >
    );
}