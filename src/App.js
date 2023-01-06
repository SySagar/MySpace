import './App.css';
import React from 'react';
import Home from './Home'
import Authenticate from './Authenticate'
import SignUp from './Signup'
import FlashCards from './FlashCards';
import { Route, Routes } from "react-router-dom"
import CreateCard from './CreateCard'

export default function App() {
  

  return (

    <div className="App flex 
    flex-col
     bg-backcolor">


      {/* <Authenticate/> */}
      {/* <Home></Home> */}
      <Routes>
      <Route exact path='/' element={<Authenticate/>}/>
      <Route exact path='/Signup' element={<SignUp/>}/>
      <Route path="/Home" element={<Home/>} />
      <Route path="/Home/MyCards" element={<FlashCards />} />
      <Route path="/Home/CreateCard" element={<CreateCard />} />
      </Routes>
      </div>
      );

}

{/* <div className="App flex 
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
</div> */}
