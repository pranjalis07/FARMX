import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useAuth0 } from '@auth0/auth0-react';
import { StepContext } from '../farmer/formContext';

export default function BasicDetails() {

    const { companyData, setCompanyData } = React.useContext(StepContext);
    const { user, isAuthenticated } = useAuth0();

    React.useEffect(() => {
        const username = () => {
            if (isAuthenticated) {
                setCompanyData({ ...companyData, "email": user.email });
            }
        }

        username();
    }, [isAuthenticated, setCompanyData, companyData]);


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                General Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        id="companyname"
                        name="companyname"
                        label="Company name"
                        value={companyData['companyname']}
                        onChange={(e) => setCompanyData({ ...companyData, "companyname": e.target.value })}
                        fullWidth
                        autoComplete="given-name"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Address line 1"
                        value={companyData['address1']}
                        onChange={(e) => setCompanyData({ ...companyData, "address1": e.target.value })}
                        fullWidth
                        autoComplete=" address-line1"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="Address line 2"
                        value={companyData['address2']}
                        onChange={(e) => setCompanyData({ ...companyData, "address2": e.target.value })}
                        fullWidth
                        autoComplete="address-line2"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="phoneNo"
                        name="phoneNO"
                        label="Contact Number"
                        value={companyData['contactnumber']}
                        onChange={(e) => setCompanyData({ ...companyData, "contactnumber": e.target.value })}
                        fullWidth
                        autoComplete="tel"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete=" address-level2"
                        value={companyData['city']}
                        onChange={(e) => setCompanyData({ ...companyData, "city": e.target.value })}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="state"
                        name="state"
                        label="State/Province/Region"
                        value={companyData['state']}
                        onChange={(e) => setCompanyData({ ...companyData, "state": e.target.value })}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        value={companyData['pincode']}
                        onChange={(e) => setCompanyData({ ...companyData, "pincode": e.target.value })}
                        autoComplete="postal-code"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        value={companyData['country']}
                        onChange={(e) => setCompanyData({ ...companyData, "country": e.target.value })}
                        fullWidth
                        autoComplete="country"
                        variant="outlined"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}