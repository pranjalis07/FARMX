import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Snackbar, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { WeatherIcon } from '../../../utils/icons/icons'
import ProfileDetails from './profileDetails'
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Profile = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCancleClose = () => {
        setOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
        handleSnakClick();
    };

    const [openSnak, setopenSnak] = React.useState(false);

    const handleSnakClick = () => {
        setopenSnak(true);
    };

    const handleSnakClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setopenSnak(false);
    };


    return (
        <>
            <Grid width='100%' display='flex' justifyContent='center' flexDirection='row'>
                {/* ============================Profile============================ */}
                <Grid sx={{ bgcolor: "#FFF", p: 2, borderRadius: 4, mr: 1 }} xs={12} sm={9}>
                    <Box display='flex' flexDirection='row'>
                        <Box sx={{
                            bgcolor: '#ec407a', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1, m: 1
                        }}>
                            <WeatherIcon color="#fce4ec" />
                        </Box>
                        <Typography variant='h6' sx={{ my: 1.5 }}>Profile Details</Typography>
                    </Box>
                    <Divider variant='fullWidth' sx={{ mb: 1.5 }}></Divider>
                    <ProfileDetails />
                </Grid>

                {/* ============================Profile Options============================ */}
                <Grid sx={{ bgcolor: "#FFF", p: 2, borderRadius: 4 }} xs={12} sm={3}>
                    <Box display='flex' flexDirection='row'>
                        <Box sx={{
                            bgcolor: '#ffdb6d', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1, m: 1
                        }}>
                            <WeatherIcon color="#2c3e50" />
                        </Box>
                        <Typography variant='h6' sx={{ my: 1.5 }}>Settings</Typography>
                    </Box>
                    <Divider variant='fullWidth' sx={{ mb: 1.5 }}></Divider>
                    <Box sx={{ border: 0, borderColor: '#FFC107' }}>
                        <Button variant='text' color='primary' size='large' onClick={handleClickOpen} fullWidth sx={{ py: 2, display: 'flex', justifyContent: 'left', px: 2 }}>Add new stock</Button><Divider />
                        <Button variant='text' color='warning' fullWidth sx={{ py: 2, display: 'flex', justifyContent: 'left', px: 2 }}>Edit profile</Button><Divider />
                        <Button variant='text' color='warning' fullWidth sx={{ py: 2, display: 'flex', justifyContent: 'left', px: 2 }}>Change Profile Picture</Button><Divider />
                        <Button variant='text' color='warning' fullWidth sx={{ py: 2, display: 'flex', justifyContent: 'left', px: 2 }}>Change Cover Background</Button><Divider />
                        <Button variant='text' color='warning' fullWidth sx={{ py: 2, display: 'flex', justifyContent: 'left', px: 2 }}>Reset Password</Button><Divider />
                        <Button variant='text' color='warning' fullWidth sx={{ py: 2, display: 'flex', justifyContent: 'left', px: 2 }}>Add new Info</Button>
                    </Box>
                </Grid>

                <>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Add Stock</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Add new data for available stock here.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Title"
                                type="text"
                                fullWidth
                                variant="standard"
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                label="Crop Type"
                                fullWidth
                                variant="standard"
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Quantity (Kg)"
                                fullWidth
                                variant="standard"
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Price (Rs./Kg)"
                                fullWidth
                                variant="standard"
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCancleClose}>Cancel</Button>
                            <Button onClick={handleClose}>Add</Button>
                        </DialogActions>
                    </Dialog>

                    <Snackbar open={openSnak} autoHideDuration={6000} onClose={handleSnakClose}>
                        <Alert onClose={handleSnakClose} severity="success" sx={{ width: '100%' }}>
                            Stock data added successfully!
                        </Alert>
                    </Snackbar>
                </>
            </Grid>
        </>

    )
}

export default Profile
