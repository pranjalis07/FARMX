import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import schemesData from './schemesData';
import { LicenseIcon } from '../../../utils/icons/icons';

const FarmerSchemes = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <>
            <Grid width='100%' sx={{ bgcolor: "#FFF", p: 2, borderRadius: 4 }} xs={12} sm={12}>
                <Box display='flex' flexDirection='row'>
                    <Box sx={{
                        bgcolor: '#ffdb6d', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1, m: 1
                    }}>
                        <LicenseIcon />
                    </Box>
                    <Typography variant='h6' sx={{ my: 1.5 }}>Schemes</Typography>
                </Box>
                <Divider variant='fullWidth' sx={{ mb: 1.5 }}></Divider>
                <Paper variant='outlined' sx={{ width: '100%', my: 2, p: 2, borderRadius: 5, background: 'linear-gradient( to right, #f4d03f, #16A085)' }}>
                    <Typography variant='h3' fontWeight='bold'>Government Schemes Information</Typography>
                    <Typography variant='h5' my={1}>List of government schemes for farmers</Typography>
                </Paper>

                {schemesData.map((scheme, index) => (
                    <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} sx={{ width: '100%', }} disableGutters elevation={0} >
                        <AccordionSummary expandIcon={<ExpandMore />} aria-controls={`panel${index}bh-content`} id={`panel${index}bh-header`}
                            sx={{
                                backgroundColor: expanded === `panel${index}` ? '#B9F6CA' : '#fff',
                                borderRadius: 2,
                            }}

                        >
                            <Typography variant='body1' fontWeight='bold'>{index + 1}. {scheme.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ mx: 3 }}>
                            <Typography variant='h5' fontWeight='bold' sx={{ my: 1, borderRadius: 1, px: 3, }}>Grants:</Typography>
                            <Typography variant='subtitle1' mx={3} >{scheme.grant.discription}</Typography>
                            <Box mx={3}>
                                <ol type='1' >
                                    {scheme.grant.list.map((item, i) => (
                                        <li key={`grant-${i}`}>{item}</li>
                                    ))}
                                </ol>
                            </Box>

                            <Typography variant='h5' fontWeight='bold' sx={{ my: 1, borderRadius: 1, px: 3, }}>Eligibility</Typography>
                            <Typography variant='subtitle1' mx={3} >{scheme.eligibility.discription}</Typography>
                            <Box mx={3}>
                                <ol type='1'>
                                    {scheme.eligibility.list.map((item, i) => (
                                        <li key={`eligibility-${i}`}>{item}</li>
                                    ))}
                                </ol>
                            </Box>

                            <Typography variant='h5' fontWeight='bold' sx={{ my: 1, borderRadius: 1, px: 3, }}>Necessary documents</Typography>
                            <Typography variant='subtitle1' mx={3} >{scheme.necessaryDocuments.discription}</Typography>
                            <Box mx={3}>
                                <ol type='1'>
                                    {scheme.necessaryDocuments.list.map((item, i) => (
                                        <li key={`necessary-documents-${i}`}>{item}</li>
                                    ))}
                                </ol>
                            </Box>

                            <Typography variant='h5' fontWeight='bold' sx={{ my: 1, borderRadius: 1, px: 3, }}>{scheme.extra.discription}</Typography>
                            <Typography variant='subtitle1' mx={3} >{scheme.extra.discription}</Typography>
                            <Box mx={3}>
                                <ol type='1'>
                                    {scheme.extra.list.map((item, i) => (
                                        <li key={`necessary-documents-${i}`}>{item}</li>
                                    ))}
                                </ol>
                            </Box>

                            <Button variant='contained' color='success' sx={{mx:4}}>More Details</Button>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Grid>
        </>
    );
};

export default FarmerSchemes;
