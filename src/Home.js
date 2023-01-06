import './App.css';
import React from 'react';
import SearchBar from './SearchBar'
import Clock from './Clock'
import Activity from './Activity'
import Stack from '@mui/material/Stack';
import Navbar from './Navbar';

export default function Home() {

  return (
    <div className="Home  flex 
    flex-col 
     bg-backcolor">

<div className="navbar pt-10">
  <Navbar></Navbar>
    </div>


      <div className='main flex 
      flex-row
        min-h-screen max-h-screen
         overflow-hidden bg-backcolor
          justify-evenly items-center
           max-2xl:gap-64
           max-lg: pb-12
           max-lg: overflow-y-auto
           max-lg: gap-64
           md:pt-20
           max-sm:flex-col
           max-lg:flex-col
           max-md:flex-col'>

        <div className="Clock max-lg:scale-75 max-lg:mt-96">
          <Clock></Clock>
        </div>


<Stack gap={5} className="max-lg: justify-center ">

        <div className="search">
          <SearchBar></SearchBar>
        </div>

        <div className="quotes max-lg:mt-10">
          <Activity></Activity>
        </div>

</Stack>
      </div>
      </div>
      );
}
