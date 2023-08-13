import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, LinearProgress, ListSubheader, Menu, OutlinedInput, Tooltip } from '@mui/material';
import Logo from '../../../utils/imgs/logo.png'
import { Search } from '@mui/icons-material';
import { useState } from 'react';
import { DashboardIcon, FilterIcon, HomeIcon, MenuIcon, NotifyIcon, SchemeIcon, UserIcon, WeatherIcon } from '../../../utils/icons/icons';
import FarmerMarket from '../Market/farmerMarket';
import FarmerSchemes from '../../dashboard/schemes/farmerSchemes';
import FarmerDash from './farmerDash';
import Profile from '../profile/profile';
import ChatBot from '../../assistantAI/assistant';
import { createGlobalStyle } from 'styled-components';
import { useAuth0 } from "@auth0/auth0-react";
import Weather from '../../weather/weather';


const drawerWidth = 240;

export default function FarmerDashboard() {
    const [open, setOpen] = useState(true);
    const [dilogOpen, setDilogOpen] = useState(false);

    const handleDrawer = () => {
        open ? setOpen(false) : setOpen(true);
    };

    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { label: 'Dashboard', icon: <DashboardIcon />, level: 'Dashboard' },
        { label: 'Market', icon: <HomeIcon color="#4CAF50" />, divide: true },
        // { label: 'Market Details', icon: <HomeIcon color="#4CAF50" />, divide: true },
        { label: 'Weather Details', icon: <WeatherIcon color="#4CAF50" />, level: 'Tools & Info', },
        { label: 'Schemes', icon: <SchemeIcon />, divide: true },
        { label: 'Assistant', icon: <UserIcon />, level: 'Assistant', divide: true },
        { label: 'Profile', icon: <UserIcon />, level: 'Profile', divide: true },
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const GlobalStyles = createGlobalStyle`
    ::-webkit-scrollbar {
        width: 1px;
    }`;

    const drawer = (
        <List>
            {tabs.map((tab, index) => (
                <>
                    <ListSubheader sx={{ fontWeight: '550', ml: -1, mt: 1 }}>{tab.level}</ListSubheader>
                    <ListItem key={tab.label} disablePadding sx={{ py: 0.1 }}>
                        <ListItemButton onClick={() => handleTabClick(index)} sx={{ background: index === activeTab ? '#b9f6ca' : 'transparent', borderRadius: 3, px: 5, display: 'flex', justifyContent: 'left', py: 1.5 }}>
                            <ListItemIcon sx={{ color: index === activeTab ? '#2e7d32' : '#1b5e20', mr: -2, ml: -2 }}>{tab.icon}</ListItemIcon>
                            {/* <ListItemText primary={tab.label} sx={{ color: index === activeTab ? '#1b5e20' : '#1b5e20', fontWeight: index === activeTab ? '800' : 'normal' }} /> */}
                            <Typography sx={{ color: index === activeTab ? '#1b5e20' : '#1b5e20', fontWeight: index === activeTab ? '500' : 'normal' }}>{tab.label}
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                    {tab.divide ? (<Divider sx={{ color: 'rgba(0,0,0,0.3)', m: 1 }} />) : ""}
                </>
            ))}
        </List>
    );

    function components() {
        switch (activeTab) {
            case 0:
                return <FarmerDash />
            case 1:
                return <FarmerMarket />
            case 2:
                return <Weather />
                // return <MarketDetails />
            case 3:
                return <FarmerSchemes />
            case 4:
                return <ChatBot />
            case 5:
                return <Profile />
            default:
                break;
        }
    }

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const pages = ['Products', 'Pricing', 'Blog'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleProfileBoxClick = () => {
        setActiveTab(5);
    };

    const { user, isAuthenticated, isLoading, logout } = useAuth0();

    if (isLoading) {
        return <div>    <Box sx={{ width: '100%' }}>
            <LinearProgress  color='success'/>
        </Box></div>;
    }

    const handleLogout = () => {
        logout({ logoutParams: { returnTo: window.location.origin } });
    }

    const handleDilogOpen = () => {
        setDilogOpen(true);
    }
    const handleDilogClose = () => {
        setDilogOpen(false);
    }
    return (
        isAuthenticated && (
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <GlobalStyles />
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: '#fff', py: 1, }} elevation={0}>
                    <Toolbar>
                        <Box display='flex' flexDirection='row' flex={1}>
                            <Box sx={{ ml: -1 }}>
                                <a href="/farmerDashboard">
                                    <img src={Logo} height="55" alt="logo" />
                                </a>
                            </Box>
                            <Box sx={{ ml: 8, my: 1.5, bgcolor: '#b9f6ca', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <IconButton type='submit' color="success" size='small' onClick={handleDrawer} aria-label="add"><MenuIcon /></IconButton>
                            </Box>
                        </Box>
                        <Box flex={3}>
                            <Box sx={{}} width={450}>
                                <OutlinedInput type='search' size='small' placeholder='Search...' color='success' fullWidth
                                    endAdornment={
                                        <Box sx={{
                                            bgcolor: '#b9f6ca', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 0.3, '&:hover': {
                                                bgcolor: '#5de296'
                                            }
                                        }}>
                                            <IconButton type='submit' color="success" size='small' onClick={handleDrawer} aria-label="add">
                                                <FilterIcon sx={{
                                                    color: 'success',
                                                    '&:hover': {
                                                        bgcolor: '#b9f6ca'
                                                    }
                                                }} />
                                            </IconButton>
                                        </Box>
                                    }
                                    startAdornment={<Search sx={{ mr: 1 }} color='disabled' />}
                                    sx={{ py: 0.8, borderRadius: 4, bgcolor: '#f8fafc' }}
                                >
                                </OutlinedInput>
                            </Box>
                        </Box>

                        <Box flex={1} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'end' }}>
                            <Box sx={{ ml: 8, bgcolor: '#b9f6ca', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <IconButton type='submit' color="success" size='small' aria-label="add"><NotifyIcon /></IconButton>
                            </Box>


                            <Box sx={{ flexGrow: 0, mx: 2 }}>
                                <Tooltip title={user.name}>
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt={user.name} src={user.picture} />
                                    </IconButton>
                                </Tooltip>

                                <Menu
                                    anchorEl={anchorElUser}
                                    id="account-menu"
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            minWidth: '250px',
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            p: 1.5,
                                            borderRadius: 4,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&:before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    }}
                                    keepMounted
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >

                                    <Box
                                        sx={{
                                            display: 'flex', flexDirection: 'row', mb: 1, backgroundColor: '#eef2f6', p: 0.1, borderRadius: 2,
                                            '&:hover': {
                                                cursor: 'pointer',
                                                backgroundColor: '#e3f2fd',
                                            },
                                        }}
                                        onClick={handleProfileBoxClick}
                                    >

                                        <Box
                                            component="img"
                                            width='100px'
                                            src={user.picture}
                                            alt={user.name}
                                            sx={{
                                                m: 1,
                                                backgroundColor: '#eef2f6',
                                                objectFit: 'cover',
                                                borderRadius: '10%',
                                                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
                                                border: '2px solid #fff',
                                            }}
                                        />
                                        <Box sx={{ m: 1, mt: 2, pr: 1 }}>
                                            <Typography variant='h5' fontWeight='bold' gutterBottom color='#01579b'>{user.name}</Typography>
                                            <Typography variant='body2' >{user.email}</Typography>
                                        </Box>
                                    </Box>

                                    <Divider variant='fullWidth' sx={{ mb: 1 }} />
                                    <Button variant='outlined' color='warning' fullWidth sx={{ mb: 1 }} onClick={handleDilogOpen}> Log Out</Button>

                                    <Dialog open={dilogOpen} onClose={handleDilogClose} maxWidth='lg'>
                                        <DialogTitle>Confirmation</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>Are you sure you want to log out?</DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleDilogClose} color="primary">
                                                Cancel
                                            </Button>
                                            <Button onClick={handleLogout} color="warning">
                                                Confirm
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </Menu>
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>

                <Drawer
                    variant="persistent"
                    sx={{
                        width: open ? drawerWidth : 0,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { boxSizing: 'border-box', border: 0 },

                        '&::-webkit-scrollbar': {
                            width: '5px',
                            backgroundColor: '#FFF',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: '#888',
                            borderRadius: '1rem',
                        },
                        '&::-webkit-scrollbar-track': {
                            backgroundColor: '#fff',
                        }
                    }}
                    open={open}
                >
                    <Toolbar />
                    <Box sx={{ p: 2, }}>
                        {drawer}
                    </Box>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, my: 2, mr: 3, ml: 3, }}>
                    <Toolbar />
                    <Grid container sx={{ bgcolor: '#eef2f6', borderRadius: 5, p: 2 }}>
                        {components()}
                    </Grid>
                </Box>
            </Box >
        )
    );
}
