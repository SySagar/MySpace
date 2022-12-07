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

                    <Link to="/CreateCard">
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
                    <Link to="/">
                        <Typography fontWeight={500} className='custom'>
                            Home
                        </Typography>
                    </Link>
                    <Link to="/MyCards">
                        <Typography  className='custom'>
                            Card Bucket
                        </Typography>
                    </Link>

                </Stack>

            </div>
        </nav>
    );
}