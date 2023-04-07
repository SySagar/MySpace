import { Typography } from "@mui/material";
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

export default function Profile() {
  const name = useProfileStore((state) => state.profileName);
  const pic = useProfileStore((state) => state.profilePic);
  const setProfilePic = useProfileStore((state) => state.setProfilePic);

  const [image, setImage] = useState(pic);
  const [url, setUrl] = useState(pic);
  const [about, setAbout] = useState("");
  const [twitter,setTwitter] = useState("");
  

  useEffect(() => {
    getDownloadURL(ref(storage, "ProfilePic/" + name)).then((url) => {
      setUrl(url);
      setProfilePic(url);
    });

    getDoc(doc(db, "info", name)).then(docSnap => {
      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        setAbout(docSnap.data().about);
        setTwitter(docSnap.data().twitter);
        
      } else {
        console.log("No such document!");
      }
    })

  }, [name, setProfilePic]);

  const onChangeText = (e) => {
    e.preventDefault();
    setAbout(e.target.value);
   
  }

  
  const onChangeTwitter = (e) => {
    e.preventDefault();
    setTwitter(e.target.value);
   
  }

  const handleSubmit2 = () => {
   
    setDoc(doc(db, "info", name), {
      name: name,
      about: about,
      twitter: twitter,
    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });

  };

  const handleSubmit = () => {

    const imageRef = ref(storage, "ProfilePic/" + name);
    
    uploadBytesResumable(imageRef, image).then(() => {
      getDownloadURL(imageRef)
        .then((url) => {
          setUrl(url);
        })
        .catch((error) => {
          console.log(error.message, "error getting image");
        })
        .catch((error) => {
          console.log(error.message, "error uploading image");
        });
      setImage(null);
    }).then(() => {
      console.log("image done")
      handleSubmit2();
    })

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
                  label="Something about you"
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
                  save!
                </Button>
              </Stack>
              <Stack
                height="100%"
                width="100%"
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
                <Avatar sx={{ width: 255, height: 255 }} alt={name} src={url} />
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
