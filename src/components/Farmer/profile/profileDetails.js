import { Box, Grid, IconButton, Tooltip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Email, LocationOn, Person } from '@mui/icons-material'
import { PenIcon, UserIcon } from '../../../utils/icons/icons'
import GeneralDetails from './generalDetails'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import { baseURL } from '../../../utils/constants/Constants'

const ProfileDetails = () => {

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
                <Grid width="100%" display="flex" justifyContent="center" flexDirection="column">
                    <Grid height={350} sx={{ bgcolor: '#eef2f6', p: 1, borderRadius: 4 }}>
                        <Box
                            sx={{
                                backgroundImage: `url(https://i.ibb.co/P4VV9FT/Farmer-3.png)`,
                                backgroundSize: 'cover',
                                backgroundPositionY: -80,
                                backgroundRepeat: 'no-repeat',
                                border: '3px solid #eef2f6',
                                borderRadius: 3
                            }}
                            position="relative"
                            bgcolor="#F5F5F5"
                            minHeight="200px"
                            mb={3}
                        >
                            <Box
                                component='img'
                                // src={data.profileImg}
                                src={user.picture}
                                alt="Circular Image"
                                style={{
                                    position: 'absolute',
                                    bottom: '-120px',
                                    left: '20px',
                                    width: '200px',
                                    height: '200px',
                                    backgroundColor: '#eef2f6',
                                    objectFit: 'cover',
                                    borderRadius: '50%',
                                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                    border: '5px solid #fff',
                                }}
                            />

                        </Box>
                        <Box sx={{ position: 'relative', left: 230, top: -20 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', mb: 1 }}>
                                <Typography variant='h3' fontWeight='bold'>{data.firstname + " " + data.lastname}</Typography>
                                <Tooltip title='Edit profile'>
                                    <IconButton size='large'>
                                        <PenIcon color='#2c3e50' />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Typography variant='body1' sx={{ mb: 1, }}><Person /> {data.email}</Typography>
                        </Box>
                    </Grid>

                    <Grid >
                        <GeneralDetails />
                    </Grid>
                </Grid>

            ))}
        </>
    )
}

export default ProfileDetails
