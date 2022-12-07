import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import FlashCards from './FlashCards';
import { Route, Routes } from "react-router-dom"
import CreateCard from './CreateCard'
export default function App() {

  return (
    <div className="App flex 
    flex-col border
     bg-backcolor">

        <div className="navbar pt-10">
      <Navbar></Navbar>
        </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyCards" element={<FlashCards />} />
        <Route path="/CreateCard" element={<CreateCard />} />
      </Routes>
    </div>
  );
}
