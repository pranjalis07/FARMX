import axios from 'axios';
import React from 'react'
import { baseURL } from '../../utils/constants/Constants';
import { EditOff } from '@mui/icons-material';

const List = ({ id, task, setUpdateUI, updateMode }) => {
    const removeTask = () => {
        axios.delete(`${baseURL}/delete/${id}`).then((res) => {
            console.log(res);
            setUpdateUI((prevState) => !prevState);
        });
    };

    return (
        <li>
            {task}
            <div className="icon_holder">
                <EditOff className="icon" onClick={() => updateMode(id, task)} />
                <EditOff className="icon" onClick={removeTask} />
            </div>
        </li>
    );
}; export default List
