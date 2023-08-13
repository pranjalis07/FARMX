import { Button, Card, CardActionArea, CardContent, CardMedia, Input, List, ListItem } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { baseURL } from '../../utils/constants/Constants';
import { getUsers } from '../../services/apis';

const values = {
    name: '',
    adress1: '',
    address2: ''
}
const User = () => {
    const [user, setUser] = useState(values);
    const [email, setEmail] = useState('');
    const [data, setData] = useState([]);
    const { firstname, address1, address2 } = user;


    useEffect(() => {
        axios.get(`${baseURL}/get`).then((res) => {
            console.log(res.data);
            setData(res.data);
        });
    }, []);

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        axios.post(`${baseURL}/save`, user).then((res) => {
            console.log(res.data);
        });
    }

    return (
        <div>
            <Input type='text' name='firstname' value={firstname} onChange={(e) => onValueChange(e)}></Input>
            <Input type='text' name='address1' value={address1} onChange={(e) => onValueChange(e)}></Input>
            <Input type='text' name='address2' value={address2} onChange={(e) => onValueChange(e)}></Input>
            <Button onClick={handleSubmit}>Submit</Button>


            <ul>
                {data.map((task) => (
                    <Card
                        key={task._id}
                        id={task._id}
                        task={task.firstname}
                        sx={{width:300, height:200, m:2, p:5}}
                    >
                        <CardMedia>
                            {task.firstname}
                        </CardMedia>
                        <CardContent>
                            {task.address1}
                            {task.address2}
                        </CardContent>
                        <CardActionArea>{task.city}</CardActionArea>
                    </Card>
                ))}
            </ul>
        </div>



    )
}

export default User
