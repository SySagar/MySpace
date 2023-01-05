import './App.css';
import axios from 'axios';
import React from 'react';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Authenticate() {

    const GoogleAuth = ()=>
    {
      window.open("https://my-space-backend-ten.vercel.app/auth/google/", "_blank")
    }
  
    
    const GithubAuth = ()=>
    {
      window.open("https://my-space-backend-ten.vercel.app/auth/github/", "_blank")
    }
  

    const [username, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);
    const [test, set] = useState(false);


    const userAuth = () => {
        setError(null);
        //setLoading(true);
        axios.post('dkjfvn', { email: username.value, password: password.value }).then(response => {
            //setLoading(false);
            if (response.data.error === "User does not exist" || response.data.message === "Invalid credentials") {
                //error
            }
            else {
                //good
            }
            alert(response.data.message || response.data.error);
            //props.history.push('/dashboard');
        }).catch(error => {
            //setLoading(false);
            if (error.response.status === 401) setError(error.response.data.message);
            else setError("Something went wrong. Please try again later.");
        });
    }

    const handleChange1 = event => {
        setUserName(event.target.value);

    };

    const handleChange2 = event => {
        setPassword(event.target.value);

    };


    function getUserinfo(e) {
        e.preventDefault();


        //console.log("naem is "+nameRef.current.value)
        set(true);
    }

    return (

        <Box className='frame 
        flex
        overflow-hidden
         bg-backcolor
        justify-evenly
         items-center'>

            <Box className='main-body bg-white flex  w-2/3 h-4/5 rounded-2xl shadow-2xl'>
                <div>

                    <Stack direction="row" className='sub-body flex w-11/12 bg-white mx-11 mt-6'>

                    <img class='scale-265 h-10 rounded-md' src="title.png" alt="images" />


                        <Stack direction="column" className=' w-1/2 m-4  p-24 mr-9 pb-10 gap-3'>

                            <Typography>
                                Create your account
                            </Typography>


                            <TextField onChange={handleChange1} value={username} id="name" label="Name" variant="outlined" />

                            <TextField onChange={handleChange2} value={password} id="password" label="Password" variant="outlined" />

                            <Typography variant='body2' pt={1}>
                                or sign in with

                                <Stack direction='row' className='gap-8 pt-7 pb-4'>
                                <Button  onClick={GoogleAuth} sx={{'&:hover': {backgroundColor: '#c299ff'},}} style={{ color: "black"}} variant="outlined"  startIcon={<GoogleIcon style={{ color: "black"}}></GoogleIcon> }>
                                    Google
                                </Button>

                                <Button  onClick={GithubAuth} sx={{'&:hover': {backgroundColor: '#c299ff'},}} style={{ color: "black" }} variant="outlined" startIcon={<GitHubIcon style={{ color: "black" }}/>}>
                                    Github
                                </Button>
                                </Stack>

                            </Typography>
                            <Button onClick={getUserinfo}  variant="contained">Sign in</Button>


                            {test && <Typography>
                                {username}
                                {password}

                            </Typography>}
                        </Stack>


                        <img class='w-72 h-80 mt-20 scale-165 scale-x-155 ml-12 rounded-xl' src="Space2.jpg" alt="images" />


                    </Stack>


                </div>
            </Box>

        </Box>


    );
}