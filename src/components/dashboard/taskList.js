import { Paper, Typography, IconButton, Box, InputBase, Divider, List, ListItem, ListItemText, ListItemIcon, Checkbox, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Add, Delete, Send } from '@mui/icons-material';
import axios from 'axios';
import { baseURL } from '../../utils/constants/Constants';
import { useAuth0 } from '@auth0/auth0-react';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    // const [id, setId] = useState('');
    // const [task, setTask] = useState([]);
    const [isChecked, setIsChecked] = useState([]);
    const [showInput, setShowInput] = useState(false);


    // const { user } = useAuth0();

    // useEffect(() => {
    //     editTask();
    //     checkEmailExists();
    // }, []);

    // const checkEmailExists = async () => {
    //     const email = user.email;
    //     try {
    //         const response = await axios.get(`${baseURL}/check-email/${email}`);
    //         setTask(response.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // const editTask = async () => {
    //     setId(task.map((value) => { return value._id }));
    //     await axios.put(`${baseURL}/update/${id}`, { tasks: todos });
    //     console.log("status : updated ");
    // }

    const addTodo = (e) => {
        e.preventDefault();
        if (input !== '') {
            setTodos([...todos, input]);
            // editTask();
            // editTask();
            setIsChecked([false, ...isChecked]);
            setInput('');
            setShowInput(false);
        }

    };

    const toggleCheckbox = (index) => {
        const newIsChecked = [...isChecked];
        newIsChecked[index] = !newIsChecked[index];
        setIsChecked(newIsChecked);
        const newTodos = [...todos];
        const todo = newTodos.splice(index, 1)[0];
        newTodos.push(todo);
        setIsChecked((prevIsChecked) => {
            const newIsChecked = [...prevIsChecked];
            const checkedItem = newIsChecked.splice(index, 1)[0];
            newIsChecked.push(checkedItem);
            return newIsChecked;
        });
        setTodos(newTodos);
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setIsChecked((prevIsChecked) => {
            const newIsChecked = [...prevIsChecked];
            newIsChecked.splice(index, 1);
            return newIsChecked;
        });
        setTodos(newTodos);
    };

    const handleInputDisplay = () => {
        setShowInput(true);
    }

    {/* <Box sx={{ bgcolor: '#673AB7', borderRadius: 5, mb: 2, width: '100' }}>
                        <IconButton size='small' onClick={handleInputDisplay} sx={{ p: 1.5, display: 'flex', alignItems: 'center', textAlign: 'center', color: '#EDE7F6' }}><Add sx={{ mx: 1 }} />New task</IconButton>
                    </Box> */}

    return (
        <Box sx={{ backgroundColor: '#EDE7F6', borderRadius: 2, mt: 2, p: 3, }}>
            {!showInput ? (
                <Button
                    onClick={handleInputDisplay}
                    sx={{
                        p: 1.5, borderRadius: 10, bgcolor: '#673AB7', color: '#EDE7F6', mb: 2,
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                            bgcolor: '#B39DDB', color: '#673AB7',
                            transform: 'scale(1.05)',
                        },
                    }} >
                    <Add /> New Task
                </Button>
            ) : (
                <Paper onSubmit={addTodo} sx={{ p: '2px 4px', mb: 1, display: 'flex', alignItems: 'center', borderRadius: 5 }} component="form">
                    <InputBase
                        sx={{ ml: 3, flex: 1 }}
                        value={input}
                        autoFocus
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Add new task to the list"
                        inputProps={{ 'aria-label': 'Add new task' }}
                    />
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <IconButton type='submit' sx={{ p: '10px', color: '#673AB7' }} aria-label="add"><Send /></IconButton>
                </Paper>
            )}

            <Box sx={{
                bgcolor: 'background.paper', borderRadius: 2, overflowX: 'auto',
                '&::-webkit-scrollbar': {
                    display: 'none',
                }
            }} height={200}  >
                <List sx={{ width: '100%', bgcolor: 'background.paper', flexWrap: 'wrap' }}>
                    {todos.map((todo, index) => {
                        return (<>
                            <ListItem
                                key={index}
                                secondaryAction={<IconButton onClick={() => removeTodo(index)} edge="end" aria-label="comments"><Delete /></IconButton>}
                                disablePadding
                                sx={{ px: 2, }}
                            >
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={isChecked[index]}
                                        onChange={() => toggleCheckbox(index)}
                                        sx={{
                                            color: '#673AB7',
                                            '&.Mui-checked': {
                                                color: '#673AB7',
                                            },
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText sx={{
                                    textDecoration: isChecked[index] ? 'line-through' : 'none',
                                }}>{todo}</ListItemText>
                            </ListItem>
                            <Divider />
                        </>
                        );
                    })}

                </List>
            </Box>
        </Box>
    );
};

export default Todo;
