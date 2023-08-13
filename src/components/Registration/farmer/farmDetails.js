import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';
import { StepContext } from './formContext';


const farmType = ['Crop farming',
    'Fruit Farming']

const cropTypes = [
    'Grains',
    'Vegetables',
    'Fruits',
    'Nuts',
    'Legumes',
    'Herbs',
    'Spices',
    'Specialty crops',
    'Industrial crops',
    'Forage crops',
];

const irrigationType = [
    "Drip irrigation",
    "Sprinkler irrigation",
    "Flood irrigation",
    "Center pivot irrigation",
    "Other"
];

const soilTypes = [
    "Clay",
    "Loam",
    "Sandy",
    "Peaty",
    "Chalky",
    "Other"
];

export default function FarmDetails() {

    const { userData, setUserData } = React.useContext(StepContext);

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Farm Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="farmName"
                        name="farmName"
                        label="Farm name"
                        fullWidth
                        value={userData['farmname']}
                        onChange={(e) => setUserData({ ...userData, "farmname": e.target.value })}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="farmLocation"
                        name="farmLocation"
                        label="Farm Location"
                        value={userData['farmlocation']}
                        onChange={(e) => setUserData({ ...userData, "farmlocation": e.target.value })}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="farmSize"
                        name="farmSize"
                        label="Farm Size (acres)"
                        fullWidth
                        value={userData['farmsize']}
                        onChange={(e) => setUserData({ ...userData, "farmsize": e.target.value })}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="farmType"
                        name="farmType"
                        label="Farming Type"
                        fullWidth
                        select
                        value={userData['farmtype']}
                        onChange={(e) => setUserData({ ...userData, "farmtype": e.target.value })}
                        variant="outlined"
                    >
                        {farmType.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="cropType"
                        name="cropType"
                        label="Type of Crop grown"
                        fullWidth
                        select
                        value={userData['croptype']}
                        onChange={(e) => setUserData({ ...userData, "croptype": e.target.value })}
                        variant="outlined"
                    >
                        {cropTypes.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="soilType"
                        name="soilType"
                        label="Soil Type"
                        fullWidth
                        select
                        value={userData['soiltype']}
                        onChange={(e) => setUserData({ ...userData, "soiltype": e.target.value })}
                        variant="outlined"
                    >
                        {soilTypes.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="irrigationType"
                        name="irrigationType"
                        label="Irrigation Type"
                        fullWidth
                        value={userData['irrigationtype']}
                        onChange={(e) => setUserData({ ...userData, "irrigationtype": e.target.value })}
                        select
                        variant="outlined"
                    >
                        {irrigationType.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="pesticide"
                        name="pesticide"
                        label="Pesticide Used"
                        fullWidth
                        value={userData['pesticidesused']}
                        onChange={(e) => setUserData({ ...userData, "pesticidesused": e.target.value })}
                        select
                        variant="outlined"
                    >
                        <MenuItem value='yes'>Yes</MenuItem>
                        <MenuItem value='no'>No</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="quantity"
                        name="quantity"
                        label="Harvest Quantity"
                        fullWidth
                        value={userData['quantity']}
                        onChange={(e) => setUserData({ ...userData, "quantity": e.target.value })}
                        variant="outlined"
                    >
                    </TextField>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}