import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import Weather from '../../weather/weather'
import SmallWeatherCard from '../../weather/smallWeatherCard'
import { NewsIcon, TaskIcon, WeatherIcon } from '../../../utils/icons/icons'
import Todo from '../../dashboard/taskList'
import NewsList from '../../dashboard/newsList'

const FarmerDash = () => {
    return (
        <Grid width='100%' display='flex' justifyContent='center' flexDirection='column'>

            {/* ============================Weather Forecast============================ */}
            <Grid width='100%' sx={{ bgcolor: "#FFF", p: 2, borderRadius: 4 }} xs={12} sm={12}>
                <Box display='flex' flexDirection='row'>
                    <Box sx={{
                        bgcolor: '#ffdb6d', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1, m: 1
                    }}>
                        <WeatherIcon color="#2c3e50"/>
                    </Box>
                    <Typography variant='h6' sx={{ my: 1.5 }}>Weather Forecast</Typography>
                </Box>
                <Divider variant='fullWidth' sx={{ mb: 1.5 }}></Divider>
                <SmallWeatherCard />
            </Grid>


            {/* ============================     ============================ */}
            <Grid container sx={{ my: 2, display:'flex', flexDirection:'row' }} xs={12}>
                <Grid sx={{ bgcolor: "#FFF", p: 2, borderRadius: 4, mr:2 }} flex={2} >
                    <Box display='flex' flexDirection='row'>
                        <Box sx={{
                            bgcolor: '#B39DDB', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1, m: 1
                        }}>
                            <TaskIcon />
                        </Box>
                        <Typography variant='h6' sx={{ my: 1.5 }}>Task List</Typography>
                    </Box>
                    <Divider variant='fullWidth' sx={{ mb: 1.5 }}></Divider>
                    <Todo/>
                </Grid>

                <Grid sx={{ bgcolor: "#FFF", p: 2, borderRadius: 4 }} flex={1} >
                    <Box display='flex' flexDirection='row'>
                        <Box sx={{
                            bgcolor: '#FFAB91', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1, m: 1
                        }}>
                            <NewsIcon/>
                        </Box>
                        <Typography variant='h6' sx={{ my: 1.5 }}>News & Articles</Typography>
                    </Box>
                    <Divider variant='fullWidth' sx={{ mb: 1.5 }}></Divider>
                    <NewsList/>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default FarmerDash

