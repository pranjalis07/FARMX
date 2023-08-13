import { LocationOn, Search } from '@mui/icons-material';
import { Box, Button, Card, Divider, Grid, IconButton, InputAdornment, OutlinedInput, Paper, Skeleton, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CalendarIcon, FilterIcon, MapSearchIcon } from '../../utils/icons/icons';
import citySvg from '../../utils/svg/city.svg'

const SmallWeatherCard = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [bgImage, setBgImage] = useState('');
    const [display, setDisplay] = useState('half');

    useEffect(() => {

        const getPublicIp = async () => {
            try {
                const response = await fetch("https://geolocation-db.com/json/");
                const data = await response.json();
                setCity(data.city);
                if (city === '') {
                    setCity(data.country_name);
                }
            } catch (error) {
                console.error(error);
            }
        };

        const fetchWeatherData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(
                    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=52YMDUARVWVLSHYN297KL5MA3&contentType=json`,
                );
                const data = await response.json();
                setWeatherData(data);
                changeBackground(data.currentConditions.icon)
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };

        if (!city) {
            getPublicIp();
        } else {
            fetchWeatherData();
        }

    }, [city]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setCity(event.target.elements.city.value);
        setError(null);
    };

    const handleDisplay = () => {
        if (display === 'half') setDisplay("full");
        else setDisplay('half');
    }

    function getIcon(condition) {
        if (condition === "partly-cloudy-day") {
            return "https://i.ibb.co/PZQXH8V/27.png";
        } else if (condition === "partly-cloudy-night") {
            return "https://i.ibb.co/Kzkk59k/15.png";
        } else if (condition === "rain") {
            return "https://i.ibb.co/kBd2NTS/39.png";
        } else if (condition === "clear-day") {
            return "https://i.ibb.co/rb4rrJL/26.png";
        } else if (condition === "clear-night") {
            return "https://i.ibb.co/1nxNGHL/10.png";
        } else {
            return "https://i.ibb.co/rb4rrJL/26.png";
        }
    }

    function changeBackground(condition) {
        if (condition === "partly-cloudy-day") {
            setBgImage("https://i.ibb.co/qNv7NxZ/pc.webp");
        } else if (condition === "partly-cloudy-night") {
            setBgImage("https://i.ibb.co/RDfPqXz/pcn.jpg");
        } else if (condition === "rain") {
            setBgImage("https://i.ibb.co/h2p6Yhd/rain.webp");
        } else if (condition === "clear-day") {
            setBgImage("https://i.ibb.co/WGry01m/cd.jpg");

        } else if (condition === "clear-night") {
            setBgImage("https://i.ibb.co/kqtZ1Gx/cn.jpg");
        } else {
            setBgImage("https://i.ibb.co/qNv7NxZ/pc.webp");
        }
    }

    function getDateTime() {
        let now = new Date(),
            hour = now.getHours(),
            minute = now.getMinutes();

        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];

        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
        // 12 hours format
        hour = hour % 12;
        if (hour < 10) {
            hour = "0" + hour;
        }
        if (minute < 10) {
            minute = "0" + minute;
        }
        let dayString = days[now.getDay()];
        let monthString = months[now.getMonth()];
        return `${dayString}, ${monthString} ${now.getDate()}, ${hour}:${minute}`;
    }

    return (<>
        <Grid container spacing={2}>
            {isLoading && (
                <Box sx={{ width: '60%', height:'30vh', p:2, m:2 }}>
                    <Skeleton animation='wave' height={30}/>
                    <Skeleton animation="wave" height={30}/>
                    <Skeleton animation="wave" height={30}/>
                    <Skeleton animation='wave' height={30} />
                </Box>
            )}
            {weatherData && (<>

                <Grid item flex={1} >
                    <Card sx={{ bgcolor: '#fff8e1', borderRadius: 4, height: 220, display: 'flex', alignItems: 'center' }} elevation={0} >
                        <Grid item direction='row' display='flex'>
                            <Grid item sx={{ p: 1, borderRadius: 5, display: 'flex', alignItems: 'center' }}>
                                <img src={getIcon(weatherData.currentConditions.icon)} width={180} alt="icon"></img>
                            </Grid>
                            <Grid item direction='column' sx={{ p: 1 }}>
                                <Box display='flex' >
                                    <Typography variant='h1' sx={{ fontSize: '5.4rem', fontWeight: '600', }}>{weatherData.currentConditions.temp}</Typography>
                                    <Typography variant='h4' sx={{ m: 2, ml: 1, fontWeight: 600 }} >°C</Typography>
                                </Box>
                                <Divider variant='fullWidth'></Divider>
                                <Box display='flex' sx={{ my: 3 }}>
                                    <LocationOn />
                                    <Typography variant='subtitle1' fontWeight='bold'  >
                                        {error ? <p style={{ color: 'red' }}>"Unable to find location"</p> : weatherData.resolvedAddress}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>

                <Grid item flex={1}>
                    <Card sx={{ bgcolor: '#ffdb6d', borderRadius: 4, height: 220 }} elevation={0}>
                        <Grid item direction='row' display='flex'>
                            <Grid item direction='column' sx={{ p: 1.5, }}>
                                <Box display='flex' flexDirection='row'>
                                    <Box sx={{ bgcolor: '#fff8e1', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1, m: 1, ml: 0 }}>
                                        <CalendarIcon color='#000' />
                                    </Box>
                                    <Typography variant='h6' fontWeight='bold' gutterBottom sx={{ mt: 1.5, color: '#000' }}>{getDateTime()}</Typography>
                                </Box>

                                <Divider variant='fullWidth' sx={{ mb: 1 }}></Divider>
                                <Box sx={{ bgcolor: '#fff8e1', p: 1, borderRadius: 2 }}>
                                    <Typography variant='subtitle2' color='rgba(0,0,0,0.6)' gutterBottom >
                                        <strong>Condition : </strong>{weatherData.currentConditions.conditions}
                                    </Typography>
                                    <Typography variant='subtitle2' color='rgba(0,0,0,0.6)' gutterBottom >
                                        <strong>Humidity : </strong>{weatherData.currentConditions.humidity}
                                    </Typography>
                                    <Typography variant='subtitle2' color='rgba(0,0,0,0.6)' gutterBottom>
                                        <strong>Description : </strong>{weatherData.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>

            </>)}

            {city === null && <>
                <Grid item flex={1} width={600} direction='column' display='flex' justifyContent="space-between">
                    <Card sx={{ bgcolor: '#fff8e1', backgroundImage: `url(${citySvg})`, backgroundSize: 'contain', borderRadius: 4, p: 1, flex: 1, mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }} elevation={0}>
                        <Box component='polygon' height={150} display='flex' alignItems='center' justifyContent='center' >
                            <Typography variant='h6' sx={{ bgcolor: '#ffdb6d', px: 4, py: 2, borderRadius: 4, width: '100%', color: '#000', textAlign: 'center' }}> Unable to find your location, <br /><Typography variant='subtitle2' sx={{ mt: 0.5 }}>Try searching your city</Typography></Typography>
                        </Box>
                    </Card>
                </Grid>
            </>}

            <Grid item flex={1} direction='column' display='flex' justifyContent="space-between">
                <Card sx={{ bgcolor: '#ffdb6d', borderRadius: 4, p: 1, flex: 1, mb: 1, display: 'flex', alignItems: 'center' }} elevation={0}>
                    <form className='search' onSubmit={handleSubmit} style={{ width: '100%' }}>
                        <OutlinedInput
                            size='small'
                            type="search"
                            name="city"
                            fullWidth
                            placeholder="Enter city name"
                            sx={{ py: 0.8, borderRadius: 3, bgcolor: '#f8fafc' }}
                            endAdornment={
                                <Box sx={{
                                    bgcolor: '#ffdb6d', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 0.3, '&:hover': {
                                        bgcolor: '#fff8e1'
                                    }
                                }}>
                                    <IconButton type='submit' color="success" size='small' aria-label="add">
                                        <MapSearchIcon />
                                    </IconButton>
                                </Box>
                            }
                            startAdornment={<Search sx={{ mr: 1 }} color='disabled' />}
                        />
                    </form>
                </Card>

                <Card sx={{ bgcolor: '#fff8e1', borderRadius: 4, flex: 2, display: 'flex', justifyContent: 'end', alignItems: 'end', }} elevation={0}>
                </Card>
            </Grid>
        </Grid>
    </>
    )
}

export default SmallWeatherCard
