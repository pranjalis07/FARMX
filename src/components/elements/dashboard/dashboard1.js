import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Weather from '../../dashboard/weather/weather'
import NewsList from '../../dashboard/newsList'
import Todo from '../../dashboard/taskList'


const Dashboard1 = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(position => position + 1);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <Grid sx={{ mt: 5, width: '100%' }}>
      <Weather />
      <Box maxWidth='lg' mx={3} my={2} display='flex' flexDirection='row'>
        <Grid item flexGrow={2} mr={2} md={8} xs={12}>
          <Grid xs={12} sx={{ height: '50vh', bgcolor: '#ccc', borderRadius: 5, p: 5 }}>
              <Typography variant='h6'>Market Analysis</Typography>
          </Grid>
          <Grid xs={12} ><Todo /></Grid>
        </Grid>
        <Grid item md={4} xs={12} width={350}>
          <NewsList />
        </Grid>
      </Box>
    </Grid>
  )
}

export default Dashboard1
