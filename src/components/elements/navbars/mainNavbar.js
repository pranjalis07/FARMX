import React, { useEffect, useState } from 'react'
import Logo from '../../../utils/imgs/logo.png'
import * as Icon from "react-bootstrap-icons";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Backdrop, Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, List, Tooltip } from '@mui/material';
import axios from 'axios';
import { baseURL } from '../../../utils/constants/Constants';
import { wait } from '@testing-library/user-event/dist/utils';

const MainNavbar = (props) => {

    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    const [newUser, setNewUser] = useState([]);
    const [role, setRole] = useState('');

    useEffect(() => {
        getData();
        handleClickOpen();
    }, []);

    const getData = async () => {
        const email = user.email;
        try {
            const response = await fetch(`${baseURL}/check-email/${email}`);
            if (response.ok) {
                const data = await response.json();
                setNewUser(data);
                newUser.map((data) => setRole(data.role));
                console.log(role);
                
            } else {
                throw new Error('Request failed');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogin = () => {
        loginWithRedirect();
    }

    const handleLogout = () => {
        logout({ logoutParams: { returnTo: window.location.origin } });
    }


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        getData()
        setOpen(false);
    };

    return (
        <div>
            <header className="p-1 text-bg-dark" >
                <div className="">
                    <nav className="navbar navbar-expand-lg shadow-0 fixed-top bg-light"  >
                        <a href="/" className="navbar-brand">
                            <img src={Logo} height='70' alt='logo' />
                        </a>
                        <button
                            className="navbar-toggler text-dark"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <Icon.MenuButtonWide />
                        </button>

                        <div className='collapse navbar-collapse' id="navbarNav">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link px-2 text-secondary">
                                        Overview
                                    </Link>
                                </li>
                                {isAuthenticated && <li className="nav-item">
                                    <Link to={role === 'farmer' ? '/farmerDashboard' : "/companyDashboard"} className="nav-link px-2 text-black">
                                        Dashboard
                                    </Link>
                                </li>}

                                <li className="nav-item">
                                    <Link to="/faq" className="nav-link px-2 text-black">
                                        FAQs
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a href="/about" className="nav-link px-2 text-black">
                                        About
                                    </a>
                                </li>
                            </ul>
                            <form className="d-flex mb-2 mb-lg-0">
                                <div className="input-group">
                                    <input type="search" className="form-control" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-secondary text-dark input-group-text"><Icon.Search /></button>
                                </div>

                            </form>


                            <div className="ms-lg-3">
                                {!isAuthenticated ? (
                                    <button type="button" className="btn btn-outline me-2 btn-success " onClick={handleLogin}>
                                        Log In
                                    </button>
                                ) : (<>
                                    <Box flex={1} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'end' }}>
                                        <Box sx={{ flexGrow: 0, mx: 2, }}>
                                            <Tooltip title={user.name}>
                                                <IconButton sx={{ p: 0 }}>
                                                    <Avatar alt={user.name} src={user.picture} />
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                        <button to='/signup' type="button" className="btn btn-success" onClick={handleLogout}>
                                            Log Out
                                        </button>
                                    </Box>

                                </>)}


                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            {isAuthenticated && <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Welcome to FARMX!"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Explore our offerings, discover new features, and enjoy a seamless experience
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        close
                    </Button>
                </DialogActions>
            </Dialog>
            }
        </div >
    )
}

export default MainNavbar
