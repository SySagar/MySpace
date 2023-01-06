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
                justifyContent='center'
                paddingRight={10}
                alignItems={'end'}>
                
                <div className='scale-150 w-11'>

                    <Link to="/Home/CreateCard">
                        <Typography >
                            <IconButton color="primary" aria-label="Show answer" component="label">
                                <AddCircleOutlineTwoToneIcon />
                            </IconButton>
                        </Typography>
                    </Link>
                </div>
                <br />
                </Stack>

                <Stack
                    direction='row'
                    justifyContent={'center'}
                    gap={20}>
                    <Link to="/Home">
                        <div className='clayButton p-2 px-7'>
                        <Typography  className='custom'>
                            Home
                        </Typography>
                        </div>
                    </Link>
                    <Link to="/Home/MyCards">
                    <div className='clayButton p-2 px-7'>
                        <Typography  className='custom'>
                            Card Bucket
                        </Typography>
                        </div>
                    </Link>

                </Stack>

            </div>
        </nav>
    );
}