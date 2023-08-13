import { Call, LocationOn, MessageRounded } from '@mui/icons-material'
import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CloseIcon, FilterIcon, FlowerIcon, HomeIcon, LicenseIcon, TaskIcon } from '../../../utils/icons/icons'
import { useHistory, useNavigate } from "react-router-dom";




const MarketDetails = () => {

    const [contactOpen, setContactOpen] = useState(false);

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)
    };


    const handleContactOpen = () => {
        setContactOpen(true);
    };

    const handleContactClose = () => {
        setContactOpen(false);
    };



    return (
        <Container>
            <Grid width='100%' bgcolor='#fff' sx={{ p: 2, borderRadius: 4 }}>
                <Grid container direction='row' display='flex' justifyContent='space-between' sx={{ width: '100%', borderRadius: 5, bgcolor: '#eef2f6', }}>

                    <Box height={200} width={350} sx={{
                        backgroundImage: `linear-gradient( to right, rgba(0, 0, 0, 1), rgba(0, 0,0, 0)), url(https://i.ibb.co/5KMPsGT/wind-speed.png)`,
                        backgroundSize: 'cover',
                        px: 2,
                        borderRadius: 3,
                        m: 2
                    }} />
                    <Box sx={{ my: 2 }}>
                        <Typography gutterBottom variant="h3" fontWeight='bold' component="div" color='common.black'>
                            OLIVE CONTRACT FARMING
                        </Typography>
                        <Typography gutterBottom variant="h5" fontWeight='bold' component="div" color='common.black'>
                            Company Name
                        </Typography>
                        <Typography variant="body1" color="rgba(0,0,0,0.8)" gutterBottom mb={1}>
                            <LocationOn sx={{ mb: 1 }} fontSize="small" /> location
                        </Typography>
                        <Box>
                            <Button size="small" color="success" variant='contained' sx={{ p: 1, mr: 1, width: 180, fontSize: '16px' }}>
                                <MessageRounded sx={{ mr: 1 }} />Message
                            </Button>
                            <Button
                                size="small"
                                color="success"
                                variant='outlined'
                                sx={{ p: 1, mx: 2, minWidth: 180, fontSize: '16px' }}
                                onClick={handleContactOpen}
                            >
                                <Call /> <b>Contact Number</b>
                            </Button>

                            <Dialog open={contactOpen} fullWidth onClose={handleContactClose} >
                                <DialogTitle>Contact Number</DialogTitle>
                                <DialogContent sx={{ my: 2 }}>
                                    <h1 style={{ color: '#2e7d32' }}><b><Call fontSize='large' /> 9988774455</b></h1>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleContactClose} color="primary">Close</Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                    </Box>
                    <Box sx={{ mr: 2, mt: 2, height: '50px', width: '50px', bgcolor: '#b9f6ca', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <IconButton type='submit' color="success" size='small' onClick={handleGoBack}><CloseIcon /></IconButton>
                    </Box>
                </Grid>

                <Grid sx={{ my: 2 }}>
                    <Grid>
                        <Box display='flex' flexDirection='row'>
                            <Box sx={{
                                bgcolor: '#b9f6ca', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1, m: 1
                            }}>
                                <FlowerIcon color='#000' />
                            </Box>
                            <Typography variant='h6' sx={{ my: 1.5 }}>Service Details</Typography>
                        </Box>
                        <Divider variant='fullWidth' sx={{ mb: 1.5 }}></Divider>
                    </Grid>

                    <Grid sx={{ p: 1 }}>
                        <TableContainer component={Paper} elevation={0}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table" size='small'>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Service Location
                                        </TableCell>
                                        <TableCell align="left">	Pan India</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Service Type
                                        </TableCell>
                                        <TableCell align="left">Soil fertility and Composting</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Type of Contract Farming
                                        </TableCell>
                                        <TableCell align="left">Centralized Model</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Crop Type
                                        </TableCell>
                                        <TableCell align="left">Herbs</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Minimum Order Quantity
                                        </TableCell>
                                        <TableCell align="left">50 Plant</TableCell>
                                    </TableRow>
                                    <TableRow sx={{ backgroundColor: '#b9f6ca' }}>
                                        <TableCell component="th" scope="row" sx={{ fontSize: '18px', color: '#2e7d32', fontWeight: 'bold' }}>
                                            Price
                                        </TableCell>
                                        <TableCell align="left" sx={{ fontSize: '18px', fontWeight: 'bold' }}>RS. 50 / KG</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>

                <Grid sx={{ my: 2 }}>
                    <Grid>
                        <Box display='flex' flexDirection='row'>
                            <Box sx={{
                                bgcolor: '#ffab91', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1, m: 1
                            }}>
                                <LicenseIcon color='#000' />
                            </Box>
                            <Typography variant='h6' sx={{ my: 1.5 }}>Service Description</Typography>
                        </Box>
                        <Divider variant='fullWidth' sx={{ mb: 1.5 }}></Divider>
                    </Grid>

                    <Grid sx={{ py: 1, px: 2, lineHeight: 1.5 }}>
                        <Typography variant='body1'>Contract farming involves agricultural production being carried out on the basis of an agreement between the buyer and farm producers.
                            Company do purchasing as per fixed rate of the product that has been decided at the time of agreement . Customer isindependent of choosing market , if he gets a better price in the market.
                            Note- Service is customized according to customer need
                        </Typography>
                    </Grid>
                </Grid>

                <Grid sx={{ my: 2 }}>
                    <Grid>
                        <Box display='flex' flexDirection='row'>
                            <Box sx={{
                                bgcolor: '#b39ddb', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1, m: 1
                            }}>
                                <FilterIcon color='#000' />
                            </Box>
                            <Typography variant='h6' sx={{ my: 1.5 }}>Additional Information</Typography>
                        </Box>
                        <Divider variant='fullWidth' sx={{ mb: 1.5 }}></Divider>
                    </Grid>

                    <Grid sx={{ p: 1 }}>
                        <Table size='small' sx={{ width: '70%' }}>
                            <TableRow>
                                <TableCell component="th" scope="row" sx={{ fontSize: '16px' }}>Delivery Time</TableCell>
                                <TableCell align="left" sx={{ fontSize: '16px' }}>	1 month</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" sx={{ fontSize: '16px' }}>Production Capacity</TableCell>
                                <TableCell align="left" sx={{ fontSize: '16px' }}>1000 Acre</TableCell>
                            </TableRow>
                        </Table>
                    </Grid>
                </Grid>

                <Grid sx={{ my: 2 }}>
                    <Grid>
                        <Box display='flex' flexDirection='row'>
                            <Box sx={{
                                bgcolor: '#ffdb6d', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1, m: 1
                            }}>
                                <TaskIcon color='#000' />
                            </Box>
                            <Typography variant='h6' sx={{ my: 1.5 }}>About the company</Typography>
                        </Box>
                        <Divider variant='fullWidth' sx={{ mb: 1.5 }}></Divider>
                    </Grid>

                    <Grid sx={{ p: 1 }}>
                        <Table size='small' sx={{ width: '40%' }}>
                            <TableRow>
                                <TableCell component="th" scope="row" sx={{ fontSize: '16px' }}>Year of Establishment</TableCell>
                                <TableCell align="left" sx={{ fontSize: '16px' }}>2018</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" sx={{ fontSize: '16px' }}>Number of Employees</TableCell>
                                <TableCell align="left" sx={{ fontSize: '16px' }}>500 to 600 People</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" sx={{ fontSize: '16px' }}>Annual Turnover</TableCell>
                                <TableCell align="left" sx={{ fontSize: '16px' }}>Rs. 50 - 100 Crore</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" sx={{ fontSize: '16px' }}>Nature of Business</TableCell>
                                <TableCell align="left" sx={{ fontSize: '16px' }}>Manufacturer</TableCell>
                            </TableRow>
                        </Table>
                        <Typography variant='body1' p={2}>The mission of the company is to provide effective products, services and solutions associated with the agriculture land development. We strongly believes in delivering best products without compromising the quality. The values of the organization emphasize on respecting the individuals and performing honestly.</Typography>
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    )
}

export default MarketDetails
