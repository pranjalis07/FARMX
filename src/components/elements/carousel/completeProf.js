import { AppBar, Button, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const CompleteProf = () => {
    return (
        <Container maxWidth='lg' sx={{mt:15, backgroundColor:'transparent'}}>
            <Grid container spacing={1} sx={{p:2, px:4, bgcolor:'#fbe9e7', borderRadius:4}}>
                <Grid item >
                    <Typography variant='h3' fontWeight='bold' gutterBottom>Complete your profile detail.</Typography>
                    <Typography variant='h6' gutterBottom>Proceed to fill up the details.</Typography>
                    <Button href='/registration' variant='contained' color='success' className="btn btn-success">
                        Proceed
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default CompleteProf
