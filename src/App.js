import "./App.css";
import React, { useEffect } from "react";
import Home from "./Home";
import Authenticate from "./Authenticate";
import SignUp from "./Signup";
import FlashCards from "./FlashCards";
import { Route, Routes } from "react-router-dom";
import CreateCard from "./CreateCard";
import Navbar from "./Navbar";
import Footer from "./footer";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
import LoginReq from "./LoginReq";
import Error from "./Error";
import { useProfileStore } from "./globalState/useProfileStore";
import AnimatedPage from "./transition/AnimatedPage";
import Test from "./Test";

export default function App() {
    const { isAuthenticated } = useAuth0();
 

  return (
    <AnimatedPage>
      <div
        className="App flex 
      flex-col
      bg-backcolor"
      >

        {isAuthenticated && (
          <>
            <div className="navbar pt-10 pb-0 ">
              <Navbar></Navbar>
            </div>

            <Routes>
              <Route exact path="/" element={<Authenticate />} />
              <Route exact path="/Signup" element={<SignUp />} />
              <Route exact path="/Error" element={<Error />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Home/MyCards" element={<FlashCards />} />
              <Route path="/Home/CreateCard" element={<CreateCard />} />
              <Route path="/Profile" element={<Profile />} />
              <Route exact path="*" element={<Error />} />
            </Routes>
            <div className="footer">
              <Footer></Footer>
            </div>
          </>
        )}
    
      </div>
      {!isAuthenticated && (
          <Routes>
            <Route path="/" element={<Authenticate />} />
            <Route path="*" element={<LoginReq />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        )}
    </AnimatedPage>
  );
}
