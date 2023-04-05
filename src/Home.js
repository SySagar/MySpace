import "./App.css";
import React from "react";
import SearchBar from "./SearchBar";
import Clock from "./Clock";
import Activity from "./Activity";
import Stack from "@mui/material/Stack";
import Music from "./Music";
import GoogleSearch from "./GoogleSearch";
import AnimatedPage from "./transition/AnimatedPage";

export default function Home() {
  return (
    <div
      className="Home  flex 
    flex-col 
    bg-backcolor
    justify-center"
    >
      <AnimatedPage>
        <div
          className="main flex 
      flex-row
      
         overflow-hidden bg-backcolor
         justify-evenly items-center
           max-2xl:gap-64
           max-lg: pb-14
           max-lg: overflow-y-auto
           max-lg: gap-64
           md:pt-20
           max-sm:flex-col
           max-lg:flex-col
           max-md:flex-col"
        >
          <div className="clay-body w-10/12 p-10 3xl:w-2/3">
            <Stack direction="row" justifyContent="space-evenly">
              <div className="Clock max-lg:scale-75 max-lg:mt-96 xl:mr-28 ">
                <Clock></Clock>
              </div>

              <Stack direction="column" alignItems="center">
                <Stack
                  direction="row"
                  className="w-1/2"
                  justifyContent={"center"}
                  alignItems="center"
                  paddingBottom="70px"
                >
                  <div className="player mt-10 ml-8">
                    <Music></Music>
                  </div>
                </Stack>

                <GoogleSearch></GoogleSearch>
              </Stack>
            </Stack>

            <Stack
              direction="row"
              marginTop="50px"
              className="max-lg: justify-center 2xl:gap-36   lg:gap-28 3xl:gap-28  3xl:pl-32"
            >
              <div className="search">
                <SearchBar></SearchBar>
              </div>

              <div className="quotes max-lg:mt-10 max-lg:mr-10 xl:pl-32 2xl:pr-36">
                <Activity></Activity>
              </div>
            </Stack>
          </div>
        </div>
      </AnimatedPage>
    </div>
  );
}
