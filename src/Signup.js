import './App.css';
import axios from 'axios';
import React from 'react';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom';

export default function Signup() {

   
    const [username, setUserName] = useState(null);
    const [email, setUserEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);
   const navigate = useNavigate();

    
   const navigateSignUp = () => {
    // 👇️ navigate to /home
    navigate('/signup');
  };

  const navigateHome = () => {
    // 👇️ navigate to /home
    navigate('/Home');
  };
  


    const userAuth = () => {
        setError(null);
        //setLoading(true);
        console.log(username);
        console.log( email.value);
        console.log(password.value);
        //const json = JSON.stringify({ answer: 42 });
        axios.post('https://my-space-backend-ten.vercel.app/signup', { name: username, email: email, password: password }).then(response => {
            //setLoading(false);
            if (response.data.error === "user does not exist" || response.data.message === "Invalid credentials") {
                //error
                navigateSignUp()
            }
            else {
                //good
                navigateHome()
            }
            alert(response.data.message || response.data.error);
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


    return (

        <Box className='frame 
        flex
        overflow-hidden
         bg-backcolor
        justify-evenly
         items-center'>

            <Box className='main-body bg-white flex  w-2/3 h-4/5 rounded-2xl shadow-2xl'>
                <div>

                    <Stack direction="row" className='sub-body flex w-11/12 h-4/5 bg-white mx-11 mt-6'>

                    <img class='scale-265 h-10 rounded-md' src="title.png" alt="images" />


                        <Stack direction="column" className=' w-1/2 m-6 p-14  pr-32 gap-3'>

                            <Typography>
                                Create your account
                            </Typography>

            

                            <TextField onChange={handleChange1} value={username} id="name" label="Name" variant="outlined" />

                            <TextField onChange={handleChange3} value={email} id="email" label="Email" variant="outlined" />

                            <TextField onChange={handleChange2} value={password} id="password" label="Password" variant="outlined" />

                            <Typography variant='body2' pt={1}>
                                or sign in with

                                

                            </Typography>
                            <Button onClick={userAuth}  variant="contained">Sign in</Button>


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