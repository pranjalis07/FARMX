import { Title } from '@mui/icons-material'
import { Box, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { LicenseIcon, PenIcon, UserIcon, WeatherIcon } from '../../../utils/icons/icons';
import { useAuth0 } from '@auth0/auth0-react'
import { baseURL } from '../../../utils/constants/Constants'
import axios from 'axios'

const details = [
    { section: true, sectionTitle: 'Basic Details', color: '#ec407a', secondaryColor: '#fce4ec', icon: <PenIcon color='#fce4ec' /> },
    { section: true, sectionTitle: 'Farm Details', color: '#ab47bc', secondaryColor: '#f3e5f5', icon: <WeatherIcon color='#f3e5f5' /> },
];


const GeneralDetails = () => {

    const { user } = useAuth0();
    const [profileData, setProfileData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const email = user.email;
            try {
                const response = await axios.get(`${baseURL}/get-farmer/${email}`);
                setProfileData(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        getData();
    }, []);

    return (
        <>
            {profileData && profileData.map((data) => (
                <Grid container spacing={2} p={3} key={data._id}>

                    {/* --------------------------Basic Details------------------------- */}
                    <Grid item xs={12} sm={12} m={-1} mt={1}>
                        <Box display='flex' flexDirection='row'>
                            <Box sx={{
                                bgcolor: `#ec407a`, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1, m: 1
                            }}>
                                <PenIcon color='#fce4ec' />
                            </Box>
                            <Typography variant='h6' sx={{ my: 1.5 }}>Basic Details</Typography>
                        </Box>
                        <Divider variant='fullWidth' sx={{ mb: 1.5 }}></Divider>
                    </Grid>

                    <Grid item xs={12} sm={6} display='flex'>
                        <Typography variant="subtitle1" fontWeight='bold' sx={{}}>First Name : </Typography>
                        <Typography variant="body1" sx={{ px: 2 }}>{data.firstname}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} display='flex'>
                        <Typography variant="subtitle1" fontWeight='bold' sx={{}}>Last Name : </Typography>
                        <Typography variant="body1" sx={{ px: 2 }}>{data.lastname}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} display='flex'>
                        <Typography variant="subtitle1" fontWeight='bold' sx={{}}>Address : </Typography>
                        <Typography variant="body1" sx={{ px: 2 }}>{data.address1}, {data.address2}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} display='flex'>
                        <Typography variant="subtitle1" fontWeight='bold' sx={{}}>City : </Typography>
                        <Typography variant="body1" sx={{ px: 2 }}>{data.city}, {data.state}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} display='flex'>
                        <Typography variant="subtitle1" fontWeight='bold' sx={{}}>Pin Code : </Typography>
                        <Typography variant="body1" sx={{ px: 2 }}>{data.pincode}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} display='flex'>
                        <Typography variant="subtitle1" fontWeight='bold' sx={{}}>Contact Number : </Typography>
                        <Typography variant="body1" sx={{ px: 2 }}>{data.contactnumber}</Typography>
                    </Grid>


                    {/* --------------------------Farm Details------------------------- */}
                    <Grid item xs={12} sm={12} m={-1} mt={1}>
                        <Box display='flex' flexDirection='row'>
                            <Box sx={{
                                bgcolor: `#ab47bc`, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1, m: 1
                            }}>
                                <WeatherIcon color='#f3e5f5' />
                            </Box>
                            <Typography variant='h6' sx={{ my: 1.5 }}>Farm Details</Typography>
                        </Box>
                        <Divider variant='fullWidth' sx={{ mb: 1.5 }}></Divider>
                    </Grid>

                    <Grid item xs={12} sm={6} display='flex'>
                        <Typography variant="subtitle1" fontWeight='bold' sx={{}}>Farm name : </Typography>
                        <Typography variant="body1" sx={{ px: 2 }}>{data.farmname}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} display='flex'>
                        <Typography variant="subtitle1" fontWeight='bold' sx={{}}>Farm location : </Typography>
                        <Typography variant="body1" sx={{ px: 2 }}>{data.farmlocation}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} display='flex'>
                        <Typography variant="subtitle1" fontWeight='bold' sx={{}}>Farm size : </Typography>
                        <Typography variant="body1" sx={{ px: 2 }}>{data.farmsize} (Acres)</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} display='flex'>
                        <Typography variant="subtitle1" fontWeight='bold' sx={{}}>Farming type : </Typography>
                        <Typography variant="body1" sx={{ px: 2 }}>{data.farmtype}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} display='flex'>
                        <Typography variant="subtitle1" fontWeight='bold' sx={{}}>Crop type: </Typography>
                        <Typography variant="body1" sx={{ px: 2 }}>{data.croptype}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} display='flex'>
                        <Typography variant="subtitle1" fontWeight='bold' sx={{}}>Soil type : </Typography>
                        <Typography variant="body1" sx={{ px: 2 }}>{data.soiltype}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} display='flex'>
                        <Typography variant="subtitle1" fontWeight='bold' sx={{}}>Irrigation method : </Typography>
                        <Typography variant="body1" sx={{ px: 2 }}>{data.irrigationtype}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} display='flex'>
                        <Typography variant="subtitle1" fontWeight='bold' sx={{}}>Pesticides used : </Typography>
                        <Typography variant="body1" sx={{ px: 2 }}>{data.pesticidesused}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} display='flex'>
                        <Typography variant="subtitle1" fontWeight='bold' sx={{}}>Harvest Quantity : </Typography>
                        <Typography variant="body1" sx={{ px: 2 }}>{data.quantity}</Typography>
                    </Grid>


                    {/* -----------------------Description------------------ */}
                    <Grid item xs={12} sm={12} m={-1} mt={1}>
                        <Box display='flex' flexDirection='row'>
                            <Box sx={{
                                bgcolor: `#fce4ec`, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1, m: 1
                            }}>
                                <LicenseIcon />
                            </Box>
                            <Typography variant='h6' sx={{ my: 1.5 }}>Description</Typography>
                        </Box>
                        <Divider variant='fullWidth' sx={{ mb: 1.5 }}></Divider>
                    </Grid>

                    <Grid item xs={12} sm={12} display='flex'>
                        <Typography variant="subtitle1" fontWeight='bold' sx={{}}>Description: </Typography>
                        <Typography variant="body1" sx={{ px: 2 }}>{data.description}</Typography>
                    </Grid>
                </Grid>
            ))}
        </>
    )
}

export default GeneralDetails
