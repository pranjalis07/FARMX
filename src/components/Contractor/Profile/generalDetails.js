import { Title } from '@mui/icons-material'
import { Box, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { LicenseIcon, PenIcon, UserIcon, WeatherIcon } from '../../../utils/icons/icons';
import { useAuth0 } from '@auth0/auth0-react'
import { baseURL } from '../../../utils/constants/Constants'
import axios from 'axios'


const GeneralDetails = () => {

    const { user } = useAuth0();
    const [profileData, setProfileData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const email = user.email;
            try {
                const response = await axios.get(`${baseURL}/get-contractor/${email}`);
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

                    <Grid item xs={12} sm={12} display='flex'>
                        <Typography variant="subtitle1" fontWeight='bold' sx={{}}>Company Name : </Typography>
                        <Typography variant="body1" sx={{ px: 2 }}>{data.companyname}</Typography>
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
                            <Typography variant='h6' sx={{ my: 1.5 }}>Company Details</Typography>
                        </Box>
                        <Divider variant='fullWidth' sx={{ mb: 1.5 }}></Divider>
                    </Grid>

                    <Grid item xs={12} sm={6} display='flex'>
                        <Typography variant="subtitle1" fontWeight='bold' sx={{}}>Year of establishment : </Typography>
                        <Typography variant="body1" sx={{ px: 2 }}>{data.year}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} display='flex'>
                        <Typography variant="subtitle1" fontWeight='bold' sx={{}}>Number of employees : </Typography>
                        <Typography variant="body1" sx={{ px: 2 }}>{data.employees}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} display='flex'>
                        <Typography variant="subtitle1" fontWeight='bold' sx={{}}>Annual turnover : </Typography>
                        <Typography variant="body1" sx={{ px: 2 }}>{data.turnover} </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} display='flex'>
                        <Typography variant="subtitle1" fontWeight='bold' sx={{}}>Nature of business : </Typography>
                        <Typography variant="body1" sx={{ px: 2 }}>{data.nature}</Typography>
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
