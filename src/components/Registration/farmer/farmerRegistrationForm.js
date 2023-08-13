import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BasicDetails from './basicDetails';
import EmptyNavbar from '../../elements/navbars/emptyNavbar';
import FarmDetails from './farmDetails';
import DiscriptionDetails from './discriptionDetails';
import { Alert, AlertTitle, Divider, Grid, StepConnector } from '@mui/material';
import { Person } from '@mui/icons-material';
import Logo from '../../../utils/imgs/logo.png'
import { StepContext } from './formContext';
import { addFarmerData } from '../../../services/apis';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        FarmX
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['General Details', 'Farm Details', 'Discription'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicDetails />;
    case 1:
      return <FarmDetails />;
    case 2:
      return <DiscriptionDetails />;
    default:
      throw new Error('Unknown step');
  }
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

export default function FarmerRegistrationForm() {

  // const [activeStep, setActiveStep] = React.useState(0);
  const { activeStep, setActiveStep, userData, setUserData } = React.useContext(StepContext);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = () => {
    addFarmerData(userData);
    setUserData('');
    handleNext();
  }


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box width='100%' height='100vh' top={0} left={0} bgcolor='#eef2f6' display='flex' alignItems='center' justifyContent='center'>
        <Container component="main" maxWidth="md" sx={{ m: 3 }}>
          <Paper variant="outlined" sx={{ mt: 1, p: { xs: 2, md: 3 }, borderRadius: 4 }}>
            <Box display='flex' flexDirection='row' justifyContent='space-between'>
              <Box display='flex' flexDirection='row'>
                <Box sx={{
                  bgcolor: '#FFE57F', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1, m: 1
                }}>
                  <Person color="#2c3e50" />
                </Box>
                <Typography variant='h6' sx={{ my: 1.5 }}>Registration</Typography>
              </Box>
              <Box>
                <img src={Logo} alt='logo' width={140} />
              </Box>
            </Box>
            <Divider variant='fullWidth' sx={{ mb: 1.5 }}></Divider>


            {/* -------------------Stepper form------------------------- */}
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel
                    sx={{
                      fontSize: activeStep === steps.indexOf(label) ? "1.2rem" : "1rem",
                      color: activeStep === steps.indexOf(label) ? "#FF5722" : "#757575",
                    }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
              <StepConnector
                sx={{
                  "&.MuiStepConnector-active": {
                    backgroundColor: "#FF5722",
                  },
                  "&.MuiStepConnector-lineHorizontal": {
                    borderLeftWidth: "2px",
                    borderLeftStyle: "solid",
                    borderLeftColor: activeStep >= 1 ? "#FF5722" : "#757575",
                  },
                }}
              />
            </Stepper>

            {/* -------------------Steps------------------------- */}
            {activeStep === steps.length ? (
              <React.Fragment>
                <Alert severity="success">
                  <AlertTitle>Registered Successfully</AlertTitle>
                  Your details are submitted successfully.
                  <strong>Click on continue</strong>
                </Alert>
                <Button href="/" variant="contained" size='large' sx={{ mt: 3, ml: 1 }}>
                  Continue
                </Button>
              </React.Fragment>

            ) : (

              <React.Fragment>
                {getStepContent(activeStep)}

                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1, px: 5 }} variant='outlined' size='larg'>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                    sx={{ mt: 3, ml: 1, px: 5 }}
                    size='large'
                  >
                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}

                  </Button>
                </Box>
              </React.Fragment>

            )}
          </Paper>
          <Copyright />
        </Container>
      </Box>
    </ThemeProvider>
  );
}