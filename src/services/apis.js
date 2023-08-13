import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';


export const usersUrl = "http://localhost:5000/api";

export const getUsers = async (email) => {
    email = email || '';
    return await axios.get(`${usersUrl}/${email}`);
    // axios.get(`${baseURL}/get`).then((res) => {
    //     console.log(res.data);
    //     setTasks(res.data);
    // });
}


export const addFarmerData = async (user) => {
    return await axios.post(`${usersUrl}/farmer/save`, user).then((res) => {
        console.log(res.data);
    });
}

export const addCompanyData = async (user) => {
    return await axios.post(`${usersUrl}/company/save`, user).then((res) => {
        console.log(res.data);
    });
}


export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}

// export const getUserData = async (email) => {
//     const res= await axios.get(`${usersUrl}/check-email/${email}`);
// }
