import './App.css';
import React from 'react';
import { Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';

export default function FlashCards() {

    return (
        <div className="FlashCards pt-20 px-10">

            <Grid container spacing={1}>



                <div className="col" onClick={""}>
                    <div className="container">
                        <div className="front bg-red-600" >
                            <div className="inner">
                                <p>Which is the highest moutain of the world?</p>
                            </div>
                            <IconButton color="primary" aria-label="Show answer" component="label">
                                <ArrowCircleRightTwoToneIcon />
                            </IconButton>
                        </div>

                        <div className="back">
                            <div className="inner">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </Grid>

        </div>
    );
}