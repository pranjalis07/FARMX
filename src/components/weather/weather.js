import { LocationOn, Search } from '@mui/icons-material';
import { Box, Button, Card, Divider, Grid, IconButton, InputAdornment, OutlinedInput, Paper, Skeleton, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CalendarIcon, MapSearchIcon, WeatherIcon, WindIcon } from '../../utils/icons/icons';
import citySvg from '../../utils/svg/city.svg'



const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [bgImage, setBgImage] = useState('');
    const [display, setDisplay] = useState('half');
    const [todayWeek, setTodayWeek] = useState('week');
    const [tempUnit, setTempUnit] = useState('c');

    useEffect(() => {

        const getPublicIp = async () => {
            try {
                const response = await fetch("https://geolocation-db.com/json/");
                const data = await response.json();
                setCity(data.city);
                if(city===''){
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
    };

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
            // https://i.ibb.co/SxLW4xq/clear-night.png
            setBgImage("https://i.ibb.co/qNv7NxZ/pc.webp");
        } else if (condition === "partly-cloudy-night") {
            setBgImage("https://i.ibb.co/RDfPqXz/pcn.jpg");
        } else if (condition === "rain") {
            setBgImage("https://i.ibb.co/h2p6Yhd/rain.webp");
        } else if (condition === "clear-day") {
            // setBgImage("https://i.ibb.co/WGry01m/cd.jpg");
            setBgImage("https://i.ibb.co/ZHQ33rV/clear-day.png");

        } else if (condition === "clear-night") {

            setBgImage("https://i.ibb.co/mt8sHFt/clear-nht.png");
            // setBgImage("https://i.ibb.co/kqtZ1Gx/cn.jpg
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

    function getDayName(date) {
        let day = new Date(date);
        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        return days[day.getDay()];
    }

    function getHour(time) {
        let hour = parseInt(time.split(":")[0]);
        let minute = time.split(":")[1];
        let period = hour >= 12 ? "PM" : "AM";
        hour = hour % 12 || 12;
        return `${hour}:${minute} ${period}`;
    }

    const handleTodayWeek = (event) => {
        todayWeek == "today" ? setTodayWeek('week') : setTodayWeek('today');
    };

    const handleUnit = () => {
        tempUnit == "c" ? setTempUnit("f") : setTempUnit("c");
    }

    function celsiusToFahrenheit(temp) {
        return ((temp * 9) / 5 + 32).toFixed(1);
    }

    function measureUvIndex(uvIndex) {
        if (uvIndex <= 2) {
            return "Low";
        } else if (uvIndex <= 5) {
            return "Moderate";
        } else if (uvIndex <= 7) {
            return "High";
        } else if (uvIndex <= 10) {
            return "Very High";
        } else {
            return "Extreme";
        }
    }

    function humidityStatus(humidity) {
        if (humidity <= 30) {
            return "Low";
        } else if (humidity <= 60) {
            return "Moderate";
        } else {
            return "High";
        }
    }

    function visibiltyStatus(visibility) {
        if (visibility <= 0.03) {
            return "Dense Fog";
        } else if (visibility <= 0.16) {
            return "Moderate Fog";
        } else if (visibility <= 0.35) {
            return "Light Fog";
        } else if (visibility <= 1.13) {
            return "Very Light Fog";
        } else if (visibility <= 2.16) {
            return "Light Mist";
        } else if (visibility <= 5.4) {
            return "Very Light Mist";
        } else if (visibility <= 10.8) {
            return "Clear Air";
        } else {
            return "Very Clear Air";
        }
    }

    const extraDetails = [];

    {
        weatherData && (
            extraDetails.push(
                {
                    title: 'UV Index',
                    value: weatherData.currentConditions.uvindex,
                    status: measureUvIndex(weatherData.currentConditions.uvindex),
                    image: 'https://i.ibb.co/3WKfByR/UV-index.png'
                },
                {
                    title: 'Wind Status',
                    value: weatherData.currentConditions.windspeed,
                    status: 'Km/h',
                    image: 'https://i.ibb.co/ZcGpc60/photo-1615209853186-e4bd66602508-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-M.jpg'
                    // image: 'https://i.ibb.co/5KMPsGT/wind-speed.png'
                },
                {
                    title: 'Humidity',
                    value: weatherData.currentConditions.humidity,
                    status: humidityStatus(weatherData.currentConditions.humidity),
                    image: 'https://i.ibb.co/NWfcZQy/humidity.png'
                },
                {
                    title: 'Visibility',
                    value: weatherData.currentConditions.visibility,
                    status: visibiltyStatus(weatherData.currentConditions.visibility),
                    image: 'https://i.ibb.co/3k8x3db/airQ.png'
                },
                {
                    title: 'Sunrise',
                    value: getHour(weatherData.currentConditions.sunrise),
                    status: '',
                    image: 'https://i.ibb.co/ZXTscqn/sunrise.png'
                },
                {
                    title: 'Sunset',
                    value: getHour(weatherData.currentConditions.sunset),
                    image: 'https://i.ibb.co/02Q02FJ/sunset.png'
                },
                {
                    title: 'Discription',
                    status: weatherData.description,
                    image: 'https://cdn.discordapp.com/attachments/1088534150950170637/1088894100276789278/Shreyas_Patil_wind_speed_clouds_super_realistic_75a405a7-9481-453c-a542-3110735f8dbd.png'
                },)
        )
    }

    function SearchCity() {
        return (
            <Grid container spacing={2}>
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
        )

    }


    return (<>
        <Grid width='100%' sx={{ bgcolor: "#FFF", p: 2, borderRadius: 4 }} xs={12} sm={12}>
            <Box display='flex' flexDirection='row'>
                <Box sx={{
                    bgcolor: '#ffdb6d', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1, m: 1
                }}>
                    <WeatherIcon color="#2c3e50" />
                </Box>
                <Typography variant='h6' sx={{ my: 1.5 }}>Weather Forecast</Typography>
            </Box>
            <Divider variant='fullWidth' sx={{ mb: 1.5 }}></Divider>
            <SearchCity />
        </Grid>

        <Grid width='100%' sx={{ bgcolor: "#FFF", p: 2, borderRadius: 4, my: 2 }} xs={12} sm={12}>
            <Box display='flex' flexDirection='row'>
                <Box sx={{
                    bgcolor: '#B9F6CA', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1, m: 1
                }}>
                    <WindIcon />
                </Box>
                <Typography variant='h6' sx={{ my: 1.5 }}>Daily Report</Typography>
            </Box>
            <Divider variant='fullWidth' sx={{ mb: 1.5 }}></Divider>

            <Grid container sx={{ mt: 2, px: 1, py: 2, borderRadius: 5, bgcolor: '#f6f6f8', }}>

                <Grid item sx={{ mx: 3, display: 'flex', justifyContent: 'space-between', width: "100%" }}>
                    <ToggleButtonGroup
                        value={todayWeek}
                        onChange={handleTodayWeek}
                        sx={{}}
                        color='success'
                    >
                        <ToggleButton value="today" aria-label="today"
                            sx={{ borderColor: 'transparent', mr: 1, px: 3 }}>
                            Today
                        </ToggleButton>
                        <ToggleButton value="week" aria-label="week"
                            sx={{ borderColor: 'transparent', px: 3 }}>
                            Week
                        </ToggleButton>
                    </ToggleButtonGroup>

                    <ToggleButtonGroup
                        value={tempUnit}
                        onChange={handleUnit}
                        sx={{ borderRadius: 10, }}
                        color='success'
                    >
                        <ToggleButton value="c" aria-label="C" sx={{ borderColor: 'transparent', mr: 1, px: 3 }}>
                            °C
                        </ToggleButton>
                        <ToggleButton value="f" aria-label="F" sx={{ borderColor: 'transparent', px: 3 }}>
                            °F
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
                {weatherData && (<>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        overflowX: 'auto',
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        }
                    }}
                    >
                        <Grid container direction='row' maxHeight={400} spacing={5} sx={{ width: '100%', m: 1, flexWrap: 'wrap' }}>
                            {todayWeek == 'today' ? (<>
                                {weatherData.days[0].hours.map((hour) => (
                                    <Card sx={{ width: 140, m: 2, p: 2, flexGrow: '1', borderRadius: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} variant='elevation' key={hour.datetimeEpoch}>
                                        <Typography variant='body1' fontWeight='bold' textAlign="center" gutterBottom>{getHour(hour.datetime)}</Typography>
                                        <img src={getIcon(hour.icon)} width={60} alt="icon" />
                                        <Typography variant='body1' fontWeight='bold' mt={1} gutterBottom>{tempUnit === 'c' ? hour.temp + " °C" : celsiusToFahrenheit(hour.temp) + " °F"}</Typography>
                                        <Typography variant='caption' fontWeight='bold' color='text.secondary'>{hour.conditions}</Typography>
                                    </Card>
                                ))}
                            </>) : (<>
                                {weatherData.days.slice(0, 7).map((day) => (
                                    <Card sx={{ width: 130, m: 2, p: 2, flexGrow: '1', borderRadius: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} variant='elevation' key={day.day}>
                                        <Typography variant='body1' fontWeight='bold' textAlign="center" gutterBottom>{getDayName(day.datetime)}</Typography>
                                        <img src={getIcon(day.icon)} width={60} alt="icon"></img>
                                        <Typography variant='body1' fontWeight='bold' mt={1} gutterBottom>{tempUnit === 'c' ? day.temp + " °C" : celsiusToFahrenheit(day.temp) + " °F"}</Typography>
                                        <Typography variant='caption' fontWeight='bold' color='text.secondary'>{day.conditions}</Typography>
                                    </Card>
                                ))}</>)}
                        </Grid>
                    </Box>

                    <Grid container direction='row' maxHeight={400} spacing={5} sx={{ width: '100%', m: 1, flexWrap: 'wrap', bgcolor: '#fff', borderRadius: 5 }}>
                        {extraDetails.map((index) => (<>
                            <Card sx={{ width: 200, m: 2, p: 2, flexGrow: '1', borderRadius: 5, display: 'flex', flexDirection: 'column', backgroundImage: `linear-gradient( to right, rgba(0, 0, 0, 1), rgba(0, 0,0, 0)), url(${index.image})`, backgroundSize: 'cover' }} variant='outlined'>
                                <Typography variant='h6' fontWeight='bold' textAlign="left" color='white' gutterBottom>{index.title}</Typography>
                                <Typography variant='h4' fontSize='2.6rem' fontWeight='bolder' mt={1} my={2} textAlign="center" color='whitesmoke' gutterBottom sx={{ bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 5, }}>{index.value}</Typography>
                                <Typography variant='body1' fontWeight='normal' color='white'>{index.status}</Typography>
                            </Card>
                        </>))}
                    </Grid>
                </>)}
            </Grid>
        </Grid>

    </>
    )
}

export default Weather
