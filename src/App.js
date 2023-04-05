import "./App.css";
import React, { useEffect } from "react";
import Home from "./Home";
import Authenticate from "./Authenticate";
import FlashCards from "./FlashCards";
import { Route, Routes } from "react-router-dom";
import CreateCard from "./CreateCard";
import Navbar from "./Navbar";
import Footer from "./footer";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
import LoginReq from "./LoginReq";
import Error from "./Error";
import AnimatedPage from "./transition/AnimatedPage";
import Test from "./Test";
import { Typography } from "@mui/material";

export default function App() {
  const { isLoading, isAuthenticated, loginWithPopup } = useAuth0();

  useEffect(() => {
    console.log("isAuthenticated", isAuthenticated, "isLoading", isLoading);
    if (!isAuthenticated && !isLoading) {
      const login = async () => {
        console.log("logging in");
        await loginWithPopup();
      };
      login();
    }
  }, [isAuthenticated, isLoading, loginWithPopup]);

  if (isLoading) {
    return (
      <div>
        <Typography>Loading...</Typography>
      </div>
    );
  }
  return (
    <div className="App flex flex-col bg-backcolor">
      <AnimatedPage>
        {isAuthenticated && (
          <>
            <div className="navbar pt-10 pb-0 ">
              <Navbar></Navbar>
            </div>
            <Routes>
              <Route exact path="/" element={<Authenticate />} />
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
        {!isAuthenticated && (
          <Routes>
            <Route path="/" element={<Authenticate />} />
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<LoginReq />} />
          </Routes>
        )}
      </AnimatedPage>
    </div>
  );
}

// const ProtectedRoute = ({ component, ...args }) => (
//   <Route
//     component={withAuthenticationRequired(component, {
//       onRedirecting: () => <div>Loading</div>,
//     })}
//     {...args}
//   />
// );
