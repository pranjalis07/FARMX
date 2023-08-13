import React, { useEffect, useState } from 'react'
import MainNavbar from '../components/elements/navbars/mainNavbar';
import LandingPage from '../components/pages/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/elements/footers/footer';
import ErrorPage from '../components/pages/ErrorPage';
import FarmerRegistrationForm from '../components/Registration/farmer/farmerRegistrationForm';
import CompanyDashboard from '../components/Contractor/Dashboard/CompanyDashboard';
import User from '../components/dashboard/User';
import { useAuth0 } from '@auth0/auth0-react';
import { baseURL } from '../utils/constants/Constants';
import RegisterForm from '../components/Registration/registerForm';
import ContractorRegistrationForm from '../components/Registration/contractor/contractorRegistrationForm';
import { Backdrop, CircularProgress } from '@mui/material';
import CompleteProf from '../components/elements/carousel/completeProf';
import MarketDetails from '../components/Farmer/Market/marketDetails';
import FarmerDashboard from '../components/Farmer/Dashboard/FarmerDashboard';

const MainRoutes = () => {

  const {user, isAuthenticated, } = useAuth0();
  const [newUser, setNewUser] = useState([]);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    handleOpen()
    getData();
  }, []);

  const getData = async () => {
    const email = user.email;
    try {
      const response = await fetch(`${baseURL}/check-email/${email}`);
      if (response.ok) {
        const data = await response.json();
        setNewUser(data);
        // console.log(data);
        const _id = data.map((value) => value.role);
        console.log(_id);
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  const handleClose = () => {
    setOpen(false);
    getData();
  };

  const handleOpen = () => {
    setOpen(true);
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={
          <>
            <>
              <div>
                <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open={open}
                  onClick={handleClose}
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
              </div>
              <MainNavbar />
              {isAuthenticated && newUser.length === 0 && !open && <CompleteProf />}
              <LandingPage />
              <Footer />
            </>
          </>
        } />

        <Route exact path='/farmerDashboard' element={<FarmerDashboard />} />
        <Route exact path='/companyDashboard' element={<CompanyDashboard />} />
        <Route exact path='/farmerRegistration' element={<FarmerRegistrationForm />} />
        <Route exact path='/marketDetails' element={<MarketDetails />} />
        <Route exact path='/companyRegistration' element={<ContractorRegistrationForm />} />
        <Route exact path='/registration' element={<RegisterForm />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes
