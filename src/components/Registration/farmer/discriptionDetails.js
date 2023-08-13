import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box, Button, InputBase, MenuItem } from '@mui/material';
import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { StepContext } from './formContext';
import { useAuth0 } from '@auth0/auth0-react';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const certificationS = [
    "USDA Organic",
    "Certified Naturally Grown",
    "Certified Humane",
    "Animal Welfare Approved",
    "Fair Trade Certified",
    "Rainforest Alliance Certified",
    "Demeter Biodynamic",
    "GlobalG.A.P.",
    'Other',
]

export default function DiscriptionDetails() {

    const [certification, setCertification] = useState([]);
    const [profileImage, setProfileImage] = useState('');
    const [image, setImage] = useState('');
    const { user } = useAuth0();

    const handleCertificationChange = (event) => {
        const {
            target: { value },
        } = event;
        setCertification(
            typeof value === 'string' ? value.split(',') : value,
        );
    };


    const { userData, setUserData } = React.useContext(StepContext)

    const handleProfilePic = (e) => {
        const file = e.target.files[0];

        if (file) {
            convertToBase64(file, (base64Image) => {
                setProfileImage(base64Image);
                setUserData({ ...userData, profileImg: base64Image });
            });
        }
    };

    const handleBannerPic = (e) => {
        const file = e.target.files[0];

        if (file) {
            convertToBase64(file, (base64Image) => {
                setImage(base64Image);
                setUserData({ ...userData, bannerImg: base64Image });
            });
        }
    };

    const convertToBase64 = (file, callback) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            callback(reader.result);
        };
        reader.onerror = (error) => {
            console.error('Error converting image to base64:', error);
        };
    };

    // function covertToBase64(e) {
    //     console.log(e);
    //     var reader = new FileReader();
    //     reader.readAsDataURL(e.target.files[0]);
    //     reader.onload = () => {
    //         console.log(reader.result); //base64encoded string
    //         // setUserData({ ...userData, "imageUrl": reader.result })
    //         // setImage(reader.result);
    //         reader.onerror = error => {
    //             console.log("Error: ", error);
    //         };
    //         return reader.result;
    //     }
    // }

    // const handleProfilePic = (e) => {
    //     setProfileImage(covertToBase64(e))
    //     if(!profileImage){
    //         setProfileImage(user.picture);
    //     }
    //     setUserData({ ...userData, "profileImg": profileImage })
    // }

    // const handleBannerPic = (e) => {
    //     setImage(covertToBase64(e))
    //     if(!image){
    //         setImage(user.picture);
    //     }
    //     setUserData({ ...userData, "bannerImg": image })
    // }

    React.useEffect(() => {
        setImage('https://i.ibb.co/5KMPsGT/wind-speed.png');
        setProfileImage(user.picture);
    }, []);

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Discription
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        id="description"
                        name="description"
                        label="Add your farming discription here...."
                        fullWidth
                        multiline
                        value={userData['description']}
                        onChange={(e) => setUserData({ ...userData, "description": e.target.value })}
                        maxRows={10}
                        rows={4}
                        variant="outlined"
                    />
                </Grid>

                {/* <Grid item xs={4} display='flex' flexD justifyContent="center" alignItems='center' flexDirection='column'>
                    <Box
                        component='img'
                        src={profileImage}
                        alt="Circular Image"
                        sx={{ width: 150, height: 150 }}
                        style={{
                            margin: 10,
                            backgroundColor: '#eef2f6',
                            objectFit: 'cover',
                            borderRadius: '50%',
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                            border: '5px solid #fff',
                        }}
                    />
                    <Button
                        variant="contained"
                        component="label"
                        sx={{ my: 1 }}
                    >
                        Upload Profile Pic
                        <input
                            type="file"
                            hidden
                            accept="image/*" onChange={handleProfilePic}
                        />
                    </Button>
                </Grid> */}
                {/* <Grid item xs={8} display='flex' flexD justifyContent="center" alignItems='center' flexDirection='column'>
                    <Box
                        component='img'
                        src={image}
                        sx={{ width: 500, height: 150 }}
                        style={{
                            margin: 10,
                            borderRadius: 15,
                            backgroundColor: '#eef2f6',
                            objectFit: 'cover',
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                            border: '1px solid #fff',
                        }}
                    />
                    <Button
                        variant="contained"
                        component="label"
                        sx={{ my: 1 }}
                    >
                        Upload Banner
                        <input
                            type="file"
                            hidden
                            accept="image/*" onChange={handleBannerPic}
                        />
                    </Button>
                </Grid> */}
                {/* <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="certification">Certifications</InputLabel>
                        <Select
                            labelId="certification-select"
                            id="certificationSelect"
                            multiple
                            value={certification}
                            onChange={handleCertificationChange}
                            input={<OutlinedInput label="Certifications" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {certificationS.map((name) => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={certification.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid> */}
            </Grid>
        </React.Fragment>
    );
}