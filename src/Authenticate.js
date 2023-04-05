import "./App.css";
import React, { useEffect } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useProfileStore } from "./globalState/useProfileStore";
import AnimatedPage from "./transition/AnimatedPage";

export default function Authenticate() {
  const { loginWithPopup, user, isAuthenticated } = useAuth0();

  const setName = useProfileStore((state) => state.setProfileName);
  const setPic = useProfileStore((state) => state.setProfilePic);
  const name = useProfileStore((state) => state.profileName);
  const pic = useProfileStore((state) => state.profilePic);

  const navigate = useNavigate();

  // console.log(name);
  //console.log(pic);

  useEffect(() => {
    // 👇️ navigate to /home

    if (isAuthenticated) {
      //console.log(user)

      setName(user.name);
      setPic(user.picture);
      navigate("/Home");
    } else navigate("/");
  }, [isAuthenticated, navigate, setName, setPic, user.name, user.picture]);

  return (
    <Box
      className="frame 
      flex
      overflow-hidden
      bg-backcolor
      justify-center
      items-center
"
    >
      <AnimatedPage>
        <Box
          className="clay-body"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "650px",
            width: "950px",
          }}
        >
          <div>
            <Stack
              direction="row"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "flex",
                width: "950px",
              }}
            >
              <Stack
                className="main-body "
                style={{
                  height: "650px",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                  gap: "10px",
                }}
                direction="column"
              >
                <img style={{ width: "300px" }} src="title.png" alt="" />

                <Typography
                  variant="h3"
                  fontFamily={"Play"}
                  textAlign={"center"}
                  paddingLeft="10px"
                  paddingBottom={"40px"}
                >
                  Your personal Workspace is right here!
                </Typography>
                {/* <Button onClick={loginWithPopup} variant="outlined">
                  Enter your Space
                </Button> */}

                <div className="loginbtn">
                  <div onClick={loginWithPopup} className="my-super-cool-btn">
                    <div className="dots-container">
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                    </div>
                    <span
                      style={{ fontWeight: "500px", fontFamily: "sans-serif" }}
                    >
                      Dive in
                    </span>
                  </div>
                </div>
              </Stack>

              <img
                className="rounded-3xl"
                style={{
                  height: "650px",
                  right: "0px",
                  flex: 1,
                  translate: "translateX(100%)",
                }}
                src="Space2.jpg"
                alt="images"
              />
            </Stack>
          </div>
        </Box>
      </AnimatedPage>
    </Box>
  );
}
