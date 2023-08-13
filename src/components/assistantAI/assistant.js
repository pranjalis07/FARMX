// import { useState } from "react";
// import { TextField, Button, Paper } from "@mui/material";
// import axios from "axios";

// const ChatBot = () => {
//     const [userInput, setUserInput] = useState("");
//     const [chatLog, setChatLog] = useState("");

//     const apiKey = "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";
//     const modelEngine = "text-davinci-003";

//     const handleUserInput = (event) => {
//         setUserInput(event.target.value);
//     };

//     const handleSendMessage = () => {
//         axios
//             .post(
//                 "https://api.openai.com/v1/engines/" + modelEngine + "/completions",
//                 {
//                     prompt: getPrompt(userInput, chatLog),
//                     max_tokens: 2024,
//                     n: 1,
//                     stop: null,
//                     temperature: 0.7,
//                     top_p: 1,
//                     frequency_penalty: 0,
//                     presence_penalty: 0,
//                 },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${apiKey}`,
//                         "Content-Type": "application/json",
//                     },
//                 }
//             )
//             .then((response) => {
//                 const botResponse = response.data.choices[0].text.trim();
//                 setChatLog(chatLog + "User: " + userInput + "\n\nBot:" + botResponse + "\n\n\n");
//                 setUserInput("");
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     };

//     const getPrompt = (userInput, chatLog) => {
//         // Modify this function to return more specific prompts based on the user's input
//         if (chatLog !== "") {
//             return "User: " + userInput + "\nBot:" + chatLog + "User: " + userInput + "\nBot:";
//         } else if (userInput.toLowerCase().includes("capital of france")) {
//             return "User: What is the capital of France? Bot:";
//         } else {
//             return "User: " + userInput + "\nBot:";
//         }
//     };

//     return (
//         <Paper style={{ padding: "20px", width: "lg", margin: "0 auto" }}>
// <div style={{ whiteSpace: "pre-wrap" }}>{chatLog}</div>
// <div style={{ display: "flex" }}>
//     <TextField
//         fullWidth
//         variant="outlined"
//         value={userInput}
//         onChange={handleUserInput}
//         onKeyPress={(event) => {
//             if (event.key === "Enter") {
//                 handleSendMessage();
//             }
//         }}
//     />
//     <Button variant="contained" color="primary" onClick={handleSendMessage}>
//         Send
//     </Button>
//             </div>
//         </Paper>
//     );
// };

// export default ChatBot;

import { useState } from "react";
import { TextField, Button, Grid, Divider, Typography, Box, List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";
import { TrashIcon, WindIcon } from "../../utils/icons/icons";


const questions = [
    'What is sustainable farming?',
    'What are the benefits of organic farming?',
    'How do I control pests without using pesticides?',
    'How do I improve soil quality?',
    'What are some alternative farming methods?',
    'How do I maximize crop yield?',
    'How do I manage water usage?',
    'How do I manage livestock health?',
    'What are some marketing strategies for selling farm products?',
    'How can I get funding for my farm?'
];

const ChatBot = () => {
    const [userInput, setUserInput] = useState("");
    const [chatLog, setChatLog] = useState("");
    const [loading, setLoading] = useState(false);

    // const apiKey = "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";
    // const apiKey = "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";
    const apiKey = "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";
    const modelEngine = "text-davinci-003";

    const handleUserInput = (event) => {
        setUserInput(event.target.value);
    };

    const handleSendMessage = (userInput) => {
        setLoading(true);
        axios
            .post(
                "https://api.openai.com/v1/engines/" + modelEngine + "/completions",
                {
                    prompt: getPrompt(userInput, chatLog),
                    max_tokens: 2024,
                    n: 1,
                    stop: null,
                    temperature: 0.7,
                    top_p: 1,
                    frequency_penalty: 0,
                    presence_penalty: 0,
                },
                {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((response) => {
                const botResponse = response.data.choices[0].text.trim();
                // setChatLog((prevChatLog) => {
                //     return (<> {prevChatLog}
                //         <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', p: 2 }}>

                //             <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                //                 <Box sx={{ width: '50%', bgcolor: '#1565c0', color: '#fff', borderRadius: 2, p: 2, m: 1 }}>{userInput}</Box>
                //                 <Avatar />
                //             </Box>
                //             <Box sx={{ width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'start' }}>
                //                 <Avatar />
                //                 {loading ? (
                //                     <Box sx={{ ml: 1 }}><CircularProgress size={20} /></Box>
                //                 ) : (
                //                     <Box sx={{ bgcolor: '#c5cae9', borderRadius: 2, p: 2, m: 1 }}>{botResponse}</Box>
                //                 )}
                //             </Box>
                //         </Box>

                //     </>);
                // });
                setChatLog((prevChatLog) => {
                    return prevChatLog + "User: " + userInput + "\n\nAI: " + botResponse + "\n\n\n";
                });

                const logArray = chatLog.split("\n");
                const chatData = [];

                for (let i = 0; i < logArray.length; i += 2) {
                    chatData.push({
                        user: logArray[i],
                        bot: logArray[i + 1]
                    });
                }

                setUserInput("");
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };


    const getPrompt = (userInput, chatLog) => {
        if (chatLog !== "") {
            return "User: " + userInput + "\nAI: " + chatLog + "User: " + userInput + "AI:";
        } else if (userInput.toLowerCase().includes("benefits of organic farming")) {
            return "User: What are the benefits of organic farming? AI:The benefits of organic farming include improved soil health, reduced water pollution, increased biodiversity, improved air quality, reduced pesticide and chemical use, improved nutrition and taste of food, higher yields and greater resilience to climate change. Organic farming also supports local communities and provides an alternative to conventional farming methods.";
        } else {
            return "User: " + userInput + "\nAI:";
        }
    };

    const handleClearChat = () => {
        setChatLog("");
    };

    const handleListItemClick = (event, index) => {
        setUserInput(questions[index]);
    };


    return (
        <Grid width='100%' display='flex' justifyContent='center' flexDirection='row'>
            <Grid sx={{ bgcolor: "#FFF", p: 2, borderRadius: 4, mr: 1, minHeight: '85vh', }} xs={12} sm={8}>
                <Box display='flex' flexDirection='row'>
                    <Box sx={{
                        bgcolor: '#ec407a', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1, m: 1
                    }}>
                        <WindIcon color="#fce4ec" />
                    </Box>
                    <Typography variant='h6' sx={{ my: 1.5 }}>AI Assistant</Typography>
                </Box>
                <Divider variant='fullWidth' sx={{ mb: 1.5 }}></Divider>


                <Typography variant="h3" gutterBottom>Introducing Farming Assistant</Typography>
                <Typography variant="body1" gutterBottom>Unlocking the Potential of AI-Powered Automation</Typography>

                <Box sx={{ my: 2, p: 2, width: '100%', height: '50%', bgcolor: '#e8eaf6', borderRadius: 4, overflow: 'auto' }}>
                    {chatLog === "" ? (
                        <div style={{ textAlign: "left", fontStyle: "italic", color: "#999", padding: 5 }}>
                            Start a conversation by typing a message.
                        </div>
                    ) : (
                        <div style={{ whiteSpace: "pre-wrap" }}>
                            {chatLog}</div>
                    )}
                </Box>
                <Box sx={{ p: 2, display: 'flex', flexDirection: 'row', justifyContent: 'end' }}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        value={userInput}
                        onChange={handleUserInput}
                        onKeyPress={(event) => {
                            if (event.key === "Enter") {
                                handleSendMessage(userInput);
                            }
                        }}
                    />
                    <Button variant="contained" color="primary" onClick={() => handleSendMessage(userInput)}>
                        Send
                    </Button>
                </Box>
            </Grid>

            <Grid sx={{ bgcolor: "#FFF", p: 2, borderRadius: 4, }} xs={12} sm={4}>
                <Box display='flex' flexDirection='row'>
                    <Box sx={{
                        bgcolor: '#ffdb6d', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1, m: 1
                    }}>
                        <WindIcon color="#2c3e50" />
                    </Box>
                    <Typography variant='h6' sx={{ my: 1.5 }}>More</Typography>
                </Box>
                <Divider variant='fullWidth' sx={{ mb: 1.5 }}></Divider>
                <Box sx={{ border: 0, borderColor: '#FFC107' }}>
                    <Button variant="text" color="warning" fullWidth onClick={handleClearChat}>Clear Chat <TrashIcon /> </Button>
                    <Divider sx={{ mb: 2 }} />
                    <span style={{ color: '#1976d2', fontWeight: 'bold' }} >Related Question</span>
                    <List>
                        {questions.map((question, index) => (
                            <ListItem
                                key={index}
                                button
                                // onClick={(event) => handleListItemClick(event, index)}
                                onClick={() => handleSendMessage(question)}
                            >
                                <ListItemText primary={question} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Grid>
        </Grid >
    );
};

export default ChatBot;


