import './App.css';
import React from 'react';
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import IconButton from '@mui/material/IconButton';

export default function Navbar() {

    return (
        <nav className="navbar">
            <div className="links">


                <Stack
                className=''
                    direction='row'
                    justifyContent={'center'}
                    alignItems='center'
                    gap={20}>


                   


                    <Link to="/Home">
                        <div className='clayButton p-2 px-7'>
                            <Typography variant='h6' className='custom'>
                                Home
                            </Typography>
                        </div>
                    </Link>
                    <Link to="/Home/MyCards">
                        <div className='clayButton p-2 px-7'>
                            <Typography   variant='h6'className='custom'>
                                Card Bucket
                            </Typography>
                        </div>
                    </Link>


                    <Stack
                        justifyContent='center'
                        className='absolute right-20 add-blog hover:drop-shadow-[0_2px_2px_rgba(0,111,255,1)]'
                        direction={'row'}
                        alignItems={'end'}>

                        <div className="scale-170">

                            <div className='scale-150 w-11'>

                                <Link to="/Home/CreateCard">
                                    <Typography >
                                        <IconButton color="primary" aria-label="Show answer" component="label">
                                            <AddCircleOutlineTwoToneIcon />
                                        </IconButton>
                                    </Typography>
                                </Link>
                            </div>
                        </div>
                        <br />
                    </Stack>

                </Stack>

            </div>
        </nav>
    );
}