import {  ChevronRight, CurrencyRupee, LocationOn, MessageRounded,  Search,   } from '@mui/icons-material'
import {  Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Grid, IconButton, InputAdornment, InputBase, MenuItem, OutlinedInput, Paper, Slide, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { FilterIcon, HomeIcon, ResetIcon, WeatherIcon } from '../../../utils/icons/icons';


const contractors = [
    {
        companyName: "Company Name",
        location: "Mumbai, MH, India",
        contactNumber: "9988774455",
        requirementType: "herb",
        requirementQuantity: "500",
        requirementDescription: "We are looking for high quality fruits for our production line.",
        price: "50",
        image: "https://i.ibb.co/5KMPsGT/wind-speed.png"
    },
    {
        companyName: "XYZ Enterprises",
        location: "Pune, MH, India",
        contactNumber: "+9111111112",
        requirementType: "Vegetables",
        requirementQuantity: "1000",
        requirementDescription: "We require fresh and pesticide-free vegetables for our restaurant.",
        price: "440",
        image: "https://i.ibb.co/wKMbys4/food2.png"
    },
    {
        companyName: "Green Agro Products",
        location: "Bangalore, KA, India",
        contactNumber: "+9111111113",
        requirementType: "Herbs",
        requirementQuantity: "250",
        requirementDescription: "We need high quality herbs for our Ayurvedic medicines.",
        price: "305",
        image: "https://i.ibb.co/VNV2tPN/food1.png"
    },
    {
        companyName: "Nature's Bounty",
        location: "Delhi, DL, India",
        contactNumber: "+9111111114",
        requirementType: "Grains",
        requirementQuantity: "750",
        requirementDescription: "We are looking for a steady supply of organic grains for our cereal production.",
        price: "180",
        image: "https://i.ibb.co/frs48z2/food3.png"
    },
    {
        companyName: "Fresh Harvests",
        location: "Hyderabad, TS, India",
        contactNumber: "+9111111115",
        requirementType: "Dairy",
        requirementQuantity: "200",
        requirementDescription: "We need fresh and pure milk for our dairy products.",
        price: "120",
        image: "https://i.ibb.co/vHvyHBF/food4.png"
    },
    {
        companyName: "Company Name 01",
        location: "Mumbai, MH, India",
        contactNumber: "+9111111111",
        requirementType: "Fruit",
        requirementQuantity: "500",
        requirementDescription: "We require 500 kg of fresh apples for our upcoming production run.",
        price: "450",
        image: "https://i.ibb.co/5KMPsGT/wind-speed.png"
    },
    {
        companyName: "Company Name 02",
        location: "Delhi, DL, India",
        contactNumber: "+9111111111",
        requirementType: "Vegetables",
        requirementQuantity: "1000",
        requirementDescription: "We require 1000 kg of fresh broccoli for our upcoming production run.",
        price: "150",
        image: "https://i.ibb.co/frs48z2/food3.png"
    },
    {
        companyName: "Company Name 03",
        location: "Chennai, TN, India",
        contactNumber: "+9111111111",
        requirementType: "Grains",
        requirementQuantity: "2000",
        requirementDescription: "We require 2000 kg of rice for our upcoming production run.",
        price: "120",
        image: "https://i.ibb.co/wKMbys4/food2.png"
    },
    {
        companyName: "Company Name 04",
        location: "Bangalore, KA, India",
        contactNumber: "+9111111111",
        requirementType: "Dairy",
        requirementQuantity: "500",
        requirementDescription: "We require 500 litres of fresh milk for our upcoming production run.",
        price: "90",
        image: "https://i.ibb.co/VNV2tPN/food1.png"
    },
    {
        companyName: "Company Name 05",
        location: "Hyderabad, TS, India",
        contactNumber: "+9111111111",
        requirementType: "Meat",
        requirementQuantity: "100",
        requirementDescription: "We require 100 kg of fresh chicken for our upcoming production run.",
        price: "500",
        image: "https://i.ibb.co/frs48z2/food3.png"
    },
    {
        companyName: "Company Name 06",
        location: "Pune, MH, India",
        contactNumber: "+9111111111",
        requirementType: "Fruit",
        requirementQuantity: "1000",
        requirementDescription: "We require 1000 kg of fresh bananas for our upcoming production run.",
        price: "600",
        image: "https://i.ibb.co/wKMbys4/food2.png"
    },
    {
        companyName: "Company Name 07",
        location: "Kolkata, WB, India",
        contactNumber: "+9111111111",
        requirementType: "Vegetables",
        requirementQuantity: "500",
        requirementDescription: "We require 500 kg of fresh carrots for our upcoming production run.",
        price: "500",
        image: "https://i.ibb.co/vHvyHBF/food4.png"
    },
];

const farmTypes = ['Crop farming',
    'Livestock farming',
    'Aquaculture']

const states = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];


const cropTypes = ['Wheat', 'Rice', 'Maize', 'Millet', 'Sorghum', 'Barley', 'Oats', 'Rye', 'Cotton', 'Jute', 'Sugarcane', 'Tea', 'Coffee', 'Rubber', 'Coconut', 'Oilseeds', 'Pulses', 'Spices', 'Fruits', 'Vegetables', 'Others'];


const initialState = {
    state: '',
    farmType: '',
    cropType: '',
};


function FilterBox() {

    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleReset = () => {
        setFormData(initialState);
    };

    const { state, farmType, cropType } = formData;
    return (
        <Grid
            container
            sx={{
                mx: -7,

                width: '80%',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <ChevronRight />
            <Grid item xs={12} sm={3} mr={1}>
                <TextField
                    name="state"
                    Autocomplete="state"
                    label="States"
                    type="text"
                    size="small"
                    select
                    fullWidth
                    variant="outlined"
                    value={state}
                    onChange={handleInputChange}
                    sx={{ bgcolor: '#fff', }}
                >
                    {states.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>

            <Grid item xs={12} sm={3} mr={1}>
                <TextField
                    id="farmType"
                    name="farmType"
                    label="Farm Type"
                    size="small"
                    fullWidth
                    select
                    variant="outlined"
                    value={farmType}
                    onChange={handleInputChange}
                    sx={{ bgcolor: '#fff', }}
                >
                    {farmTypes.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>

            <Grid item xs={12} sm={3} mr={1}>
                <TextField
                    id='cropType'
                    name='cropType'
                    size='small'
                    fullWidth
                    label='Crop Type'
                    select
                    variant='outlined'
                    value={cropType}
                    onChange={handleInputChange}
                    sx={{ bgcolor: '#fff', }}
                >
                    {cropTypes.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>

            <Grid item xs={12} sm={1} >
                <Tooltip title="Reset">
                    <IconButton onClick={handleReset} sx={{
                        bgcolor: '#ffdb6d', transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                            transform: 'rotate(-180deg)',
                        },
                    }}><ResetIcon /></IconButton>
                </Tooltip>
            </Grid>
        </Grid>

    )
}

const FarmerMarket = () => {

    const [filterDisplay, setFilterDisplay] = useState(false);

    const handleFilterDisplay = () => {
        setFilterDisplay(prevState => !prevState);
    }

    const handleButtonClick = () => {
        const email = 'example@example.com';
        const subject = 'Enquiry for contract..';
        const body = 'Greetings!';
    
        // Redirect to mail client with pre-filled email fields
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      };

    return (
        <Grid width='100%' display='flex' justifyContent='center' flexDirection='column' sx={{ bgcolor: '#fff', borderRadius: 5, p: 2,  }}>
            <Grid>
                <Box display='flex' flexDirection='row'>
                    <Box sx={{
                        bgcolor: '#ffdb6d', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1, m: 1
                    }}>
                        <HomeIcon color='#000' />
                    </Box>
                    <Typography variant='h6' sx={{ my: 1.5 }}>Market Place</Typography>
                </Box>
                <Divider variant='fullWidth' sx={{ mb: 1.5 }}></Divider>
            </Grid>

            <Grid sx={{ bgcolor: '#fff8e1', p: 2, borderRadius: 4, }}>
                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                    <form style={{ width: '30%', }}>
                        <OutlinedInput
                            size='small'
                            type="search"
                            name="search"
                            fullWidth
                            placeholder="Search"
                            sx={{ py: 0.8, borderRadius: 4, bgcolor: '#f8fafc' }}
                            startAdornment={<Search sx={{ mr: 1 }} color='disabled' />}
                        />
                    </form>
                    <Box sx={{
                        bgcolor: '#ffdb6d', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1, mx: 2, my: 0.5, '&:hover': { bgcolor: '#FFC107' }
                    }}>
                        <Tooltip title="Filter">
                            <IconButton onClick={handleFilterDisplay} size='small' aria-label="add">
                                <FilterIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    {filterDisplay && <FilterBox />}
                    <Button variant='outlined' sx={{ bgcolor: '#FFC107', color: '#000', p: 1, px: 4, borderRadius: 2, my: 0.5, '&:hover': { bgcolor: '#ffdb6d' } }}>Search</Button>
                </Grid>
                {/* <Typography variant='subtitle2' sx={{mt:2, mx:2}}><i>Results found : {contractors.length}</i></Typography> */}

            </Grid>

            <Grid container direction='row' sx={{ width: '100%', flexWrap: 'wrap', borderRadius: 5, bgcolor: '#eef2f6', mt: 2, }}>
                {contractors.map((index) => (<>
                    <Card sx={{ width: 270, mx: 1, my: 2, flexGrow: 1, borderRadius: 4, display: 'flex', flexDirection: 'column' }}>
                        <Box height={150} sx={{
                            backgroundImage: `linear-gradient( to right, rgba(0, 0, 0, 1), rgba(0, 0,0, 0)), url(${index.image})`,
                            backgroundSize: 'cover',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'end',
                            alignItems: 'start',
                            px: 2
                        }}>
                            <Typography gutterBottom variant="h5" fontWeight='bold' component="div" color='common.white'>
                                {index.companyName}
                            </Typography>
                            <Typography variant="body2" color="rgba(255,255,255,0.8)" gutterBottom mb={1}>
                                <LocationOn sx={{ mb: 1 }} fontSize="small" /> {index.location}
                            </Typography>
                        </Box>
                        <Box maxHeight={180} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'start',
                            px: 2,
                        }}>
                            <Box>
                                <Divider sx={{ my: 1 }}>
                                    <Typography variant='button' color='success.dark' textAlign='center' mt={2} gutterBottom>
                                        Requirements
                                    </Typography>
                                </Divider>
                            </Box>
                            <Typography variant="subtitle1" color="rgba(0,0,0,0.8)" gutterBottom>
                                <b>Type:</b> {index.requirementType}
                            </Typography>
                            <Typography variant="subtitle1" color="rgba(0,0,0,0.8)" >
                                <b>Quantity:</b> {index.requirementQuantity} Kg.
                            </Typography>
                            <Typography variant="h6" fontWeight='bold' color="success.main" mt={1} gutterBottom >
                                <CurrencyRupee fontSize='medium' sx={{ mr: 1, }} />{index.price}  /kg
                            </Typography>
                            <Typography variant="caption" color="rgba(0,0,0,0.8)" gutterBottom sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} >
                                <b>Discription:</b> {index.requirementDescription}
                            </Typography>
                        </Box>
                        <CardActions sx={{ m: 1, }}>
                            <Button size="small" color="success" onClick={handleButtonClick} variant='contained' sx={{ p: 1, mr: 1 }}>
                                <MessageRounded sx={{ mr: 1 }} />Message
                            </Button>
                            <Button size="small" color="success" variant='outlined' sx={{ p: 1 }} href='/marketdetails' target='_blank'>
                                More Details
                            </Button>
                        </CardActions>
                    </Card>
                </>))}
            </Grid>


        </Grid>
    )
}

export default FarmerMarket
