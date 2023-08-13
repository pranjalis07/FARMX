import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { StepContext } from './formContext';
import { useAuth0 } from '@auth0/auth0-react';

export default function BasicDetails() {

  const { userData, setUserData } = React.useContext(StepContext);
  const { user, isAuthenticated } = useAuth0();

  React.useEffect(() => {
    const username = () => {
      if (isAuthenticated) {
        setUserData({ ...userData, "email": user.email });
      }
    }

    username();
  }, [isAuthenticated, setUserData, userData]);


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        General Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            value={userData['firstname']}
            onChange={(e) => setUserData({ ...userData, "firstname": e.target.value })}
            fullWidth
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            value={userData['lastname']}
            onChange={(e) => setUserData({ ...userData, "lastname": e.target.value })}
            fullWidth
            autoComplete="family-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            value={userData['address1']}
            onChange={(e) => setUserData({ ...userData, "address1": e.target.value })}
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
            value={userData['address2']}
            onChange={(e) => setUserData({ ...userData, "address2": e.target.value })}
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
            value={userData['contactnumber']}
            onChange={(e) => setUserData({ ...userData, "contactnumber": e.target.value })}
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
            value={userData['city']}
            onChange={(e) => setUserData({ ...userData, "city": e.target.value })}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            value={userData['state']}
            onChange={(e) => setUserData({ ...userData, "state": e.target.value })}
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
            value={userData['pincode']}
            onChange={(e) => setUserData({ ...userData, "pincode": e.target.value })}
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
            value={userData['country']}
            onChange={(e) => setUserData({ ...userData, "country": e.target.value })}
            fullWidth
            autoComplete="country"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}