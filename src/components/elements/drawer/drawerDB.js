import { useState } from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Drawer, Toolbar, Grid } from '@mui/material';
import Logo from '../../../utils/imgs/logo.png'
import { Campaign, Cloud, Home, Person, Store } from '@mui/icons-material';
import FullWeather from '../weather/fullWeather';
import Dashboard1 from '../dashboard/dashboard1';
import FarmerMarket from '../market/farmerMarket';
import FarmerSchemes from '../schemes/farmerSchemes';
import CropManagement from '../dashboard/cropManagement';

const drawerWidth = 240;

export default function DrawerDB() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { label: 'Home', icon: <Home />, },
        { label: 'Market', icon: <Store />, },
        { label: 'Weather Details', icon: <Cloud />, },
        { label: 'Schemes', icon: <Campaign />, },
        { label: 'Profile', icon: <Person />, },
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const drawer = (
        <List>
            {tabs.map((tab, index) => (
                <ListItem key={tab.label} disablePadding>
                    <ListItemButton onClick={() => handleTabClick(index)} sx={{ background: index === activeTab ? 'linear-gradient(to right, #212529, rgba(76, 175, 80, 0.7))' : 'transparent', borderRadius: 1, }}>
                        <ListItemIcon sx={{ color: index === activeTab ? 'common.white' : 'grey', mr: -1, ml: 2 }}>{tab.icon}</ListItemIcon>
                        <ListItemText primary={tab.label} sx={{ color: index === activeTab ? 'common.white' : 'rgba(255,255,255,0.6)' }} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );

    function components() {
        switch (activeTab) {
            case 0:
                return <Dashboard1 />
            case 1:
                return <FarmerMarket />
            case 2:
                return <FullWeather />
            case 3:
                return <FarmerSchemes />
            case 4:
                return(<CropManagement/>)
            default:
                break;
        }
    }
    return (
        <>
            <Grid container sx={{}}>
                <Grid item sm={2}>
                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            display: { xs: 'none', sm: 'block' },

                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box',
                                bgcolor: '#212529',
                                margin: 2,
                                borderRadius: 5,
                                boxShadow: 'inherit',
                            },
                        }}
                        variant="permanent"
                        anchor="left"
                    >
                        <Toolbar sx={{ my: 2 }}>
                            <a href="/farmerDashboard">
                                <img src={Logo} height="70" alt="logo" />
                            </a>
                        </Toolbar>
                        <Divider style={{ color: 'ButtonHighlight' }} />
                        {drawer}
                    </Drawer>
                </Grid>
                <Grid item sm={10}>
                    <Grid sx={{ mt: 5 }}>
                        {components()}
                    </Grid>
                </Grid>
            </Grid>

        </>
    );
}
