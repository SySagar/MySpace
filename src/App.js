import './App.css';
import React from 'react';
import SearchBar from './SearchBar'
import Clock from './Clock'
import Activity from './Activity'
import Stack from '@mui/material/Stack';

export default function App() {

  return (
    <div className="App">
      <div className='main flex flex-row border border-black min-h-screen max-h-screen overflow-hidden bg-backcolor justify-evenly items-center gap-64'>

        <div className="Clock">
          <Clock></Clock>
        </div>


<Stack gap={5}>

        <div className="search">
          <SearchBar></SearchBar>
        </div>

        <div className="quotes">
          <Activity></Activity>
        </div>

</Stack>
      </div>
      </div>
      );
}
