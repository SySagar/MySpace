import './App.css';
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import Navbar from './Navbar';

export default function FlashCards() {
    const [flip, setFlip] = useState(false);
    return (
        <div className=' flex 
        flex-col
        h-screen
        px-10
         bg-backcolor'>

<div className="navbar pt-10 pb-20 ">
  <Navbar></Navbar>
    </div>

        <ReactCardFlip isFlipped={flip} 
            flipDirection="vertical">
            <div style={{
                width: '300px',
                height: '200px',
                background: '#d7fbda',
                fontSize: '20px',
                color: 'green',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '20px'
            }}>
                Question?
                <br />
                
                <button style={{
                    width: '150px',
                    padding: '10px',
                    fontSize: '20px',
                    background: '#f5d9fa',
                    fontWeight: 'bold',
                    borderRadius: '5px',
                    marginTop:'50px'
                }} onClick={() => setFlip(!flip)}>
                    Show</button>
            </div>
            <div style={{
                width: '300px',
                height: '200px',
                background: '#fbd7f8',
                fontSize: '20px',
                color: 'blue',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '20px'
            }}>
                Answer
                <br />
                <button style={{
                    width: '150px',
                    padding: '10px',
                    fontSize: '20px',
                    background: '#f5d9fa',
                    fontWeight: 'bold',
                    borderRadius: '5px',
                    justifyContent: 'end',
                    alignContent: 'end',
                    marginTop:'50px'
                }} onClick={() => setFlip(!flip)}>
                    <ArrowCircleRightTwoToneIcon/></button>
            </div>
        </ReactCardFlip>
                </div>
    );
}