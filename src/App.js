import './App.css';
import React from 'react';
import {Routes,Route} from "react-router-dom"
import Home from './Home'
import Authenticate from './Authenticate'
import SignUp from './Signup'

export default function App() {
  

  return (
    <div className="App">
      {/* <Authenticate/> */}
      {/* <Home></Home> */}
      <Routes>
      <Route exact path='/' element={<Authenticate/>}/>
      <Route exact path='/Signup' element={<SignUp/>}/>
      <Route path="/Home" element={<Home/>} />
      <Route path="/Bucket" element={<Home/>} />
      </Routes>
      </div>
      );
}
