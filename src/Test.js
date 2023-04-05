import React from 'react'
import { Avatar } from '@mui/material'
import { useState } from 'react'
import { storage } from './firebase/firebaseConfig'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function Test() {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);
    
    const handleImageChange = (e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }

    const handleSubmit = ()=>{
        const imageRef = ref(storage, 'images/' + image.name);
        uploadBytesResumable(imageRef, image).then(()=>{
            getDownloadURL(imageRef).then((url)=>{
                setUrl(url)
            }).catch((error)=>{
                console.log(error.message,"error getting image");
            }).catch((error)=>{
                console.log(error.message,"error uploading image");
            })
            setImage(null);
        });
    }
  return (
    <div>
      <input type="file" alt="" onChange={handleImageChange}/>
      <button onClick={handleSubmit}>Submit</button>
      <Avatar 
      src={url} 
      sx={{
        width: 150, height: 150}}/>
    </div>
  )
}
