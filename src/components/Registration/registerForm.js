import React from 'react'
import { StepContext } from './farmer/formContext';
import { Box, Button, Container, Divider, Paper, Typography } from '@mui/material';
import { Person } from '@mui/icons-material';
import Logo from '../../utils/imgs/logo.png'
import { useNavigate } from 'react-router-dom';


const RegisterForm = () => {

    const { userData, setUserData, companyData, SetCompanyData } = React.useContext(StepContext);
    const navigate = useNavigate();

    const handleFarmerRole =  () => {
        navigate('/farmerRegistration');
    };

    const handleCompanyRole = () => {
        navigate('/companyRegistration');
    };


    return (
        <>
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

                        <React.Fragment>

                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>

                                <Typography variant='h1' fontWeight='bold' gutterBottom  >Select Role</Typography>
                                <Typography variant='h5' gutterBottom>Tell us who you are?</Typography>
                                <Box sx={{ p: 2, display: 'flex', }}>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        sx={{ m: 3, px: 5 }}
                                        size='large'
                                        color="success"
                                        onClick={handleFarmerRole}
                                    >Farmer
                                    </Button>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        sx={{ m: 3, px: 5 }}
                                        size='large'
                                        color='success'
                                        onClick={handleCompanyRole}
                                    >Producer
                                    </Button>
                                </Box>
                            </Box>
                        </React.Fragment>

                    </Paper>
                </Container>
            </Box>

        </>
    )
}

export default RegisterForm
