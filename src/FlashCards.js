import "./App.css";
import React, { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import AnimatedPage from "./transition/AnimatedPage";
import { db } from "./firebase/firebaseConfig";
import { useProfileStore } from "./globalState/useProfileStore";
import { useEffect } from "react";
import { useLoading } from "./globalState/useLoading";
import { Grid, Snackbar} from "@mui/material";
import FlipCard from "./FlipCard";
import { useAuth0 } from "@auth0/auth0-react";

export default function FlashCards() {
  
  const {  user } = useAuth0();
  const name = useProfileStore((state) => state.profileName);
  const [flashCards, setFlashCards] = useState([]);
  const [isLoading, setLoadingMessage, finishLoading, loadingMessage] =
    useLoading((state) => [
      state.isLoading,
      state.setLoadingMessage,
      state.finishLoading,
      state.loadingMessage,
    ]);

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  useEffect(() => {
    console.log("hah");

    setLoadingMessage(`Fetching your cards...`);
    handleClick({
      vertical: "top",
      horizontal: "center",
    })();

    async function fetchData() {

      const cardArray = [];
      await getDoc(doc(db, "info", user.name)).then((docSnap) => {
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data().cards);
          docSnap.data().cards?.forEach((card) => {
            cardArray.push(card);
          });
          console.log("cardArray :", cardArray);
          setFlashCards(cardArray);
        } else {
          console.log("No such document!");
        }
        flashCards.splice(0, flashCards.length);
      }).finally(()=>finishLoading());

    }

    try {
      
      fetchData();
    } catch (error) {
      console.log(error.message, "error getting cards");
    }

    // //clean up
    // return ()=>{
    //   setFlashCards([]);
    // }
  }, []);

  useEffect(()=>{console.log(isLoading)},[isLoading])

  return (
    <AnimatedPage>
      <div
        className=" flex 
        flex-col
        h-screen
        bg-backcolor"
      >
        {isLoading && (
          <div>
            
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              onClose={handleClose}
              message={loadingMessage}
              key={vertical + horizontal}
              />
          </div>
        )}
        <Grid container className=" cards h-screen justify-center">
          {flashCards.map((card) => (
            <div className="m-10">
              <FlipCard front={card.front} back={card.back}></FlipCard>
            </div>
          ))}
        </Grid>
      </div>
    </AnimatedPage>
  );
}
