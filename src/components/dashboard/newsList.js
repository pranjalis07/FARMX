/* eslint-disable jsx-a11y/no-distracting-elements */
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const NewsList = () => {

    const [newsData, setNewsData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                setIsLoading(true);
                const currentDate = new Date().toISOString().slice(0, 10); 
                const response = await fetch(`https://newsapi.org/v2/everything?q=agriculture&from=2023-05-10&apiKey=ad9f0afe0a0f489bb2c52c80ea80fbb1&${currentDate}`);
                const data = await response.json();
                setNewsData(data);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        }

        fetchNewsData();
    }, [newsData]);

    return (
        <Box height={350} sx={{ backgroundColor: '#FBE9E7', borderRadius: 2, p: 2, }}>
            {newsData && <>
                <Box minWidth={350} sx={{ height: '100%', overflow: 'hidden', position: 'relative', }}>
                    <marquee
                        direction="up"
                        height="100%"
                        onMouseOver={e => e.target.scrollAmount = 0}
                        onMouseLeave={e => e.target.scrollAmount = 2}
                    >
                        <Box sx={{ position: 'relative', width: '100%', }}>
                            {newsData.articles.map((index) => (
                                <Card sx={{ width: '100%', mb: 2, borderRadius:4 }} key={index.source}>
                                    <CardActionArea sx={{ height: '100%' }} href={index.url} target="_blank">
                                        <CardMedia component="img" height="100" image={index.urlToImage} alt={index.title} />
                                        <CardContent>
                                            <Typography variant="h6" component="h2" gutterBottom>
                                                {index.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', '-webkit-line-clamp': 3, '-webkit-box-orient': 'vertical' }}>
                                                {index.description}
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
                                                <b>Date : </b>{index.publishedAt.split('T')[0]}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            ))}
                        </Box>
                    </marquee>
                </Box>
            </>}

        </Box >
    )
}

export default NewsList
