import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import MainNavbar from '../elements/navbars/mainNavbar'
import ErrorImage from '../../utils/imgs/illustration_01.jpg'

const ErrorPage = () => {
  return (
    <>
      <MainNavbar />
      <Box
        sx={{
          mt: 8,
          mx: { xs: 2, sm: 4 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <img
                src={ErrorImage}
                alt=""
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h1" sx={{ fontWeight: 500 }}>
                404
              </Typography>
              <Typography variant="h6">
                The page you’re looking for doesn’t exist.
              </Typography>
              <Button variant="outlined" color='success' sx={{ my: 5 }} href='/'>Back Home</Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default ErrorPage
