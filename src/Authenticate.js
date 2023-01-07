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
import {useNavigate} from 'react-router-dom';
import SignUp from './Signup'

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
    const [email, setUserEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);
    const [test, set] = useState(false);

    const navigate = useNavigate();

    const navigateHome = () => {
      // 👇️ navigate to /home
      navigate('/Home');
    };
  
    const navigateSignUp = () => {
        // 👇️ navigate to /home
        navigate('/Signup');
      };

    const userAuth = () => {
        setError(null);
        //setLoading(true);
        console.log(username);
        console.log( email);
        console.log(password);
        //const json = JSON.stringify({ answer: 42 });
        axios.post('https://my-space-backend-ten.vercel.app/signup', { name: username, email: email, password: password }).then(response => {
            //setLoading(false);
            console.log(response);
            if (response.data.error === "user does not exist" || response.data.message === "Invalid credentials") {
                //error
                navigateSignUp()
            }
            else {
                //good
                navigateHome()
            }
            // alert(response.data.message || response.data.error);
            //props.history.push('/dashboard');
        }).catch(error => {
            //setLoading(false);
            if (error.response.status === 401) setError(error.response.data.message);
            else setError("Something went wrong. Please try again later.");
        });
    }

    function handleChange1 (event) {
        setUserName(event.target.value);
        console.log(event.target.value);

    };

    function handleChange2(event) {
        setPassword(event.target.value);

    };

    function handleChange3(event){
        setUserEmail(event.target.value);

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

            <Box className='main-body bg-white flex  w-2/3 h-4/5 rounded-2xl shadow- lg:w-4/5  3xl:w-2/3'>
                <div>

                    <Stack direction="row" className='sub-body flex w-11/12 h-4/5 bg-white mx-11 mt-6 lg:justify-between lg:w-5/6 '>

                    <img class='scale-265 h-10 rounded-md' src="title.png" alt="images" />


                        <Stack direction="column" 
                        className=' w-1/2 m-6 p-14  pr-32 gap-3
                                    lg:w-3/5 lg:pr-36'>

                            <Typography variant='h6'>
                                Login
                            </Typography>

            

                            <TextField onChange={handleChange1} value={username} id="name" label="Name" variant="outlined" />

                            <TextField onChange={handleChange3} value={email} id="email" label="Email" variant="outlined" />

                            <TextField onChange={handleChange2} value={password} id="password" label="Password" variant="outlined" />

                            <Typography variant='body2' pt={1}>
                                or sign in with

                                <Stack direction='row' className='gap-8 pt-7 pb-4 lg:gap-12 lg:mr-2'>
                                <Button  onClick={GoogleAuth} sx={{'&:hover': {backgroundColor: '#c299ff'},}} style={{ color: "black"}} variant="outlined"  startIcon={<GoogleIcon style={{ color: "black"}}></GoogleIcon> }>
                                    Google
                                </Button>

                                <Button  onClick={GithubAuth} sx={{'&:hover': {backgroundColor: '#c299ff'},}} style={{ color: "black" }} variant="outlined" startIcon={<GitHubIcon style={{ color: "black" }}/>}>
                                    Github
                                </Button>
                                </Stack>

                            </Typography>
                            <Button onClick={userAuth}  variant="contained">Sign in</Button>


                        </Stack>


                        <img class='w-72 h-80
                         mt-20 scale-165 
                          3xl:ml-40
                          3xl:w-10/12
                          2xl:scale-190 2xl:ml-44 2xl:w-80 2xl:h-4/6 2xl:mt-32
                          xl:scale-170 xl:h-max xl:mt-24  xl:ml-48
                          lg:scale-208
                          lg:mt-36
                          lg:h-3/5
                          lg:mb-7
                          scale-x-155 ml-12 rounded-xl' src="Space2.jpg" alt="images" />


                    </Stack>


                </div>
            </Box>

        </Box>


    );
}