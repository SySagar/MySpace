import './App.css';
import React from 'react';
import { useState } from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    // Initializing the state 
    this.state = { color: 'lightgreen' };
  }
  componentDidMount() {
    const deg = 6;
    const hr = document.querySelector('#hr');
    const mn = document.querySelector('#mn');
    const sc = document.querySelector('#sc');

    setInterval(() => {
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;

      hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;

      mn.style.transform = `rotateZ(${mm}deg)`;

      sc.style.transform = `rotateZ(${ss}deg)`;
    })

  }
  render() {

    return (
      <div className="Clock">

       

          <div className="clock w-[350px] h-[350px] flex bg-clockcolor rounded-full shadow-2xl justify-center items-center">

            <div className="hour absolute w-[160px] h-[160px]">
              <div className="hr absolute w-[160px] h-[160px] flex justify-center items-start" id='hr'></div>
            </div>

            <div className="min absolute w-[190px] h-[190px]">
              <div className="mn absolute w-[190px] h-[190px] flex justify-center items-start" id='mn'></div>
            </div>

            <div className="sec absolute  w-[230px] h-[230px]">
              <div className="sc absolute w-[230px] h-[230px] flex justify-center items-start" id='sc'></div>
            </div>

            <div className="indicators relative flex justify-center items-center">

              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>

            </div>

          </div>

      </div>
    );


  }
}
export default Clock;
