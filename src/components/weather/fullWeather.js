import { LocationOn, Search } from '@mui/icons-material';
import { Box, Button, Card, Divider, Grid, InputAdornment, Paper, Skeleton, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const FullWeather = () => {
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

    return (<>
        <Box mx={3}>
            <Paper variant='outlined' sx={{
                borderRadius: 5,
                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5) ),url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mt: -1,
            }}>
                <Grid container sx={{
                    m: 1,
                    borderRadius: 5,
                    background: `linear-gradient(to right, rgba(255,255,255,0.7), rgba(0,0,0,0))`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}>
                    {error && <p>City Not found</p>}
                    {isLoading ? (
                        <>
                            <Grid container direction='row' spacing={3} sx={{ width: '100%', m: 2 }}>
                                <Skeleton variant="rounded" width={240} height={220} />
                                <Box>
                                    <Skeleton variant="rounded" width={210} height={120} sx={{ mx: 2 }} />
                                    <Skeleton variant="rounded" width={210} height={30} sx={{ my: 2, mx: 2 }} />
                                    <Skeleton variant="rounded" width={210} height={30} sx={{ mt: 2, mx: 2 }} />
                                </Box>
                            </Grid>
                        </>
                    ) : (<>
                        {weatherData && (<>
                            <Grid item direction='row' display='flex' sx={{ borderRadius: 5, m: 1, }}>
                                <Grid item sx={{ p: 1, borderRadius: 5 }}>
                                    <img src={getIcon(weatherData.currentConditions.icon)} width={200} alt="icon"></img>
                                </Grid>
                                <Grid item direction='column' sx={{ p: 2, borderRadius: 5 }}>
                                    <Box display='flex' >
                                        <Typography variant='h1' sx={{ fontSize: '5.6rem', fontWeight: '600', }}>{tempUnit === 'c' ? weatherData.currentConditions.temp : celsiusToFahrenheit(weatherData.currentConditions.temp)}</Typography>
                                        <Typography variant='h4' sx={{ m: 2, ml: 1, fontWeight: 600 }} > {tempUnit === 'c' ? "°C" : "°F"}</Typography>
                                    </Box>
                                    <Divider variant='fullWidth'></Divider>
                                    <Typography variant='body1' gutterBottom sx={{ my: 2 }}>{getDateTime()}</Typography>
                                    <Box display='flex' >
                                        <LocationOn />
                                        <Typography variant='subtitle1' fontWeight='bold' >
                                            {weatherData.resolvedAddress}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>

                            <Grid item direction='column' sx={{ m: 1, p: 1, px: 4 }} flexGrow={1} display="flex" justifyContent="space-between" alignItems='end' >
                                <form className='search' onSubmit={handleSubmit} style={{ p: '2px 4px', width: '70%', display: 'flex', alignItems: 'center' }}>
                                    <TextField
                                        size='small'
                                        type="text"
                                        name="city"
                                        placeholder="Enter city name"
                                        color='text'
                                        sx={{
                                            ml: 1, flex: 1,
                                            backgroundColor: 'rgba(255,255,255,0.4)',
                                            borderRadius: 1,
                                            "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root": {
                                                color: 'rgba(0,0,0,1)',
                                                opacity: 1
                                            }
                                        }}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end"><Button type="submit" sx={{ mr: -2, color: '#fff' }}><Search /></Button></InputAdornment>,
                                        }}
                                    />
                                </form>
                                <Typography variant='body1' sx={{ color: '#f6f6f8', mr: 1, px:5,py:1, borderRadius:2, bgcolor:'text.secondary' }}> <b>Status :</b> <i>{weatherData.currentConditions.conditions}</i></Typography>
                            </Grid>
                        </>)}
                    </>)}
                </Grid>
            </Paper>


            <Grid container sx={{ mt: 2, p: 2, borderRadius: 5, bgcolor: '#f6f6f8', }}>
                <Grid item sx={{ mx: 5, display: 'flex', justifyContent: 'space-between', width: "100%" }}>
                    <ToggleButtonGroup
                        value={todayWeek}
                        onChange={handleTodayWeek}
                        color='success'
                    >
                        <ToggleButton value="today" aria-label="today"
                            sx={{ borderColor: 'transparent', mr: 1, }}>
                            Today
                        </ToggleButton>
                        <ToggleButton value="week" aria-label="week"
                            sx={{ borderColor: 'transparent', }}>
                            Week
                        </ToggleButton>
                    </ToggleButtonGroup>

                    <ToggleButtonGroup
                        value={tempUnit}
                        onChange={handleUnit}
                        sx={{ borderRadius: 10, }}
                        color='success'
                    >
                        <ToggleButton value="c" aria-label="C" sx={{ borderColor: 'transparent', mr: 1 }}>
                            °C
                        </ToggleButton>
                        <ToggleButton value="f" aria-label="F" sx={{ borderColor: 'transparent', }}>
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
        </Box >
    </>

    )
}

export default FullWeather
