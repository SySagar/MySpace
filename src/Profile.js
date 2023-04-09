import { CircularProgress, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";
import { useProfileStore } from "./globalState/useProfileStore";
import { Avatar } from "@mui/material";
import { Upload } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import AnimatedPage from "./transition/AnimatedPage";
import { storage } from "./firebase/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Button } from "@mui/material";
import { db } from "./firebase/firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useLoading } from "./globalState/useLoading";
import Snackbar from "@mui/material/Snackbar";

export default function Profile() {
  const name = useProfileStore((state) => state.profileName);
  const pic = useProfileStore((state) => state.profilePic);
  const setProfilePic = useProfileStore((state) => state.setProfilePic);
  const setTwitterUrl = useProfileStore((state) => state.setTwitterUrl);
  const setAboutUrl = useProfileStore((state) => state.setAbout);

  const [image, setImage] = useState(pic);
  const [url, setUrl] = useState(pic);
  const [about, setAbout] = useState("");
  const [twitter, setTwitter] = useState("");
  const [cards, setCard] = useState([]);

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
    async function fetchData() {
      getDownloadURL(ref(storage, "ProfilePic/" + name)).then((url) => {
        setUrl(url);
        setProfilePic(url);
      });

      getDoc(doc(db, "info", name)).then((docSnap) => {
        if (docSnap.exists()) {
          // console.log("Document data:", docSnap.data());
          setAbout(docSnap.data().about);
          setTwitter(docSnap.data().twitter);
          setCard(docSnap.data().cards);
        } else {
          console.log("No such document!");
        }
      });
    }
    try {
      fetchData();
    } catch (error) {
      console.log(error.message, "error getting image");
    } finally {
      finishLoading();
    }
  }, []);

  const onChangeText = (e) => {
    e.preventDefault();
    setAbout(e.target.value);
  };

  const onChangeTwitter = (e) => {
    e.preventDefault();
    setTwitter(e.target.value);
  };

  const handleSubmit2 = () => {
    setDoc(doc(db, "info", name), {
      name: name,
      about: about,
      twitter: twitter,
      cards: cards,
    })
      .then(() => {
        console.log("Document successfully written!");

        setAboutUrl(about);
        setTwitterUrl(twitter);
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  const handleSubmit = () => {
    const imageRef = ref(storage, "ProfilePic/" + name);

    setLoadingMessage("Saving changes...");

    handleClick({
      vertical: "top",
      horizontal: "center",
    })();

    uploadBytesResumable(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
            setProfilePic(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting image");
          })
          .catch((error) => {
            console.log(error.message, "error uploading image");
          });
        setImage(null);
      })
      .then(() => {
        console.log("image done");
        handleSubmit2();
      })
      .finally(() => {
        finishLoading();
      });
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
    setUrl(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <AnimatedPage>
        <Stack
          direction={"column"}
          sx={{ overflow: "hidden" }}
          height={"80vh"}
          justifyContent="center"
          alignItems="center"
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
          <Stack
            direction={"column"}
            className="profile-clay w-1/2 h-5/6"
            justifyContent="space-evenly"
            alignItems={"center"}
          >
            <Typography variant="h3">My Profile</Typography>

            <Stack
              direction={"row"}
              justifyContent="center"
              alignItems={"center"}
              gap={15}
            >
              <Stack
                direction={"column"}
                gap={7}
                height="100%"
                width="100%"
                justifyContent="center"
                alignItems="center"
              >
                <TextField label="Name" variant="outlined" value={name} />

                <TextField
                  label="Something about me"
                  variant="outlined"
                  multiline
                  maxRows={4}
                  value={about}
                  onChange={onChangeText}
                />

                <TextField
                  label="Twitter handle"
                  variant="outlined"
                  value={twitter}
                  onChange={onChangeTwitter}
                />

                <Button onClick={handleSubmit} variant="contained">
                  {isLoading ? (
                    <CircularProgress sx={{ color: "white" }} />
                  ) : (
                    "Save"
                  )}
                </Button>
              </Stack>
              <Stack
                height="100%"
                width="100%"
                paddingBottom={10}
                justifyContent="center"
                alignItems="center"
                sx={{
                  "&:hover": {
                    "& .MuiAvatar-root": {
                      filter: "brightness(0.5)",
                    },
                    "& .MuiIconButton-root": {
                      opacity: 1,
                    },
                  },
                  height: "fit-content",
                }}
              >
                <Avatar
                  sx={{ width: 255, height: 255, border: 5, color: "#52527a" }}
                  alt={name}
                  src={url}
                />
                <IconButton
                  component="label"
                  sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    position: "absolute",
                    opacity: 0,
                    transition: "opacity 300ms",
                    backgroundColor: "background.paper",
                  }}
                  color="primary"
                >
                  <input
                    hidden
                    accept=".jpg,.png,.jpeg"
                    type="file"
                    onChange={handleImageChange}
                  />
                  <Upload />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </AnimatedPage>
    </div>
  );
}
