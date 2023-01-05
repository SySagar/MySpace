import './App.css';
import React from 'react';

import Home from './Home'
import Authenticate from './Authenticate'
import SignUp from './Signup'

import Navbar from './Navbar';
import FlashCards from './FlashCards';
import { Route, Routes } from "react-router-dom"
import CreateCard from './CreateCard'

export default function App() {
  

  return (

    <div className="App">
      {/* <Authenticate/> */}
      {/* <Home></Home> */}
      <Routes>
      <Route exact path='/' element={<Authenticate/>}/>
      <Route exact path='/Signup' element={<SignUp/>}/>
      <Route path="/Home" element={<Home/>} />
      
      <Route path="/MyCards" element={<FlashCards />} />
        <Route path="/CreateCard" element={<CreateCard />} />
      </Routes>
      </div>
      );

}
