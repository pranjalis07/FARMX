import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { StepContext } from '../farmer/formContext';



export default function CompanyDetails() {

    const { companyData, setCompanyData } = React.useContext(StepContext);

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Company Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="year"
                        name="year"
                        label="Year of establishment"
                        fullWidth
                        value={companyData['year']}
                        onChange={(e) => setCompanyData({ ...companyData, "year": e.target.value })}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="employees"
                        name="employees"
                        label="Number of Employees"
                        value={companyData['employees']}
                        onChange={(e) => setCompanyData({ ...companyData, "employees": e.target.value })}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="turnover"
                        name="turnover"
                        label="Annual Turnover"
                        fullWidth
                        value={companyData['turnover']}
                        onChange={(e) => setCompanyData({ ...companyData, "turnover": e.target.value })}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="nature"
                        name="nature"
                        label="Nature of Business"
                        fullWidth
                        value={companyData['nature']}
                        onChange={(e) => setCompanyData({ ...companyData, "nature": e.target.value })}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="description"
                        name="description"
                        label="Add your company discription here...."
                        fullWidth
                        multiline
                        value={companyData['description']}
                        onChange={(e) => setCompanyData({ ...companyData, "description": e.target.value })}
                        maxRows={10}
                        rows={4}
                        variant="outlined"
                    />
                </Grid>

            </Grid>
        </React.Fragment >
    );
}