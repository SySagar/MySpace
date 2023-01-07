import * as React from 'react';
import './App.css';
import { useState , useEffect } from 'react';
import { Box } from '@mui/material'
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';

const Activity = () => {

    
    const [content, setContent] = useState()
    useEffect(() => {

        fetch('https://www.boredapi.com/api/activity/', {
            method: 'GET'
        }).then(res => res.json()).then((data) => {
            const text = data.activity;
            setContent(text);
        })
    }, [])

    const onRefresh = async () => {

        fetch('https://www.boredapi.com/api/activity/', {
            method: 'GET'
        }).then(res => res.json()).then((data) => {
            
            const text = data.activity;
            setContent(text);
        })

    }


    return (

        <div className='Activity'>


            <Box

                className='question-card 
                h-60 hover:scale-105 
                hover:shadow-2xl 
                duration-300 w-1/2
                 max-lg:scale-90 
                max-lg:pl-7 xl:pr-8
                 3xl:mr-28'>

                <Card elevation={8} className='h-60 w-96' style={{ background: 'radial-gradient(#1fe4f5, #3fbafe)' }}>
                    <CardContent>
                        <div className=' -translate-x-36 translate-y-1 scale-150' >
                            <FlashOnIcon />
                        </div>



                        <Typography variant="h5" component="div">
                            Here is your stuff!
                        </Typography>
                        <br />

                        <Typography className='cotainer' variant="body2">
                            {content}
                            <br />
                            
                        </Typography>
                    </CardContent>
                    <CardActions className='flex space-x-64 justify-end mt-6'>

                        <IconButton  onClick={(e) => onRefresh()} aria-label="refresh" >
                            <RefreshIcon />
                        </IconButton>

                    </CardActions>
                </Card>

            </Box>

            <script src="script.js"></script>


        </div>
    );
}

export default Activity;