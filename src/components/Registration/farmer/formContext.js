
import React, { useState } from 'react'
import App from '../../../App';

export const StepContext = React.createContext();

const FormContext = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [userData, setUserData] = useState([]);
    const [companyData, setCompanyData] = useState([]);
    const [finalData, setFinalData] = useState([]);
    const [role, setRole] = useState('');

    return (
        <div>
            <StepContext.Provider value={{ activeStep, setActiveStep, userData, setUserData, finalData, setFinalData, companyData, setCompanyData, role, setRole }}>
                <App />
            </StepContext.Provider>
        </div>
    )
}

export default FormContext;
