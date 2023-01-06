import './App.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PauseIcon from '@mui/icons-material/Pause';
import React, { useState } from "react";import Navbar from './Navbar';
import { useRef } from 'react';

export default function Player({audioElem, isplaying, setisplaying, currentSong, setCurrentSong, songs}) {

    const clickRef = useRef();

    const PlayPause = ()=>
    {
      setisplaying(!isplaying);
  
    }
  
  
    const checkWidth = (e)=>
    {
      let width = clickRef.current.clientWidth;
      const offset = e.nativeEvent.offsetX;
  
      const divprogress = offset / width * 100;
      audioElem.current.currentTime = divprogress / 100 * currentSong.length;
  
    }
  
    const skipBack = ()=>
    {
      const index = songs.findIndex(x=>x.name == currentSong.name);
      if (index == 0)
      {
        setCurrentSong(songs[songs.length - 1])
      }
      else
      {
        setCurrentSong(songs[index - 1])
      }
      audioElem.current.currentTime = 0;
      
    }
  
  
    const skiptoNext = ()=>
    {
      const index = songs.findIndex(x=>x.name == currentSong.name);
  
      if (index == songs.length-1)
      {
        setCurrentSong(songs[0])
      }
      else
      {
        setCurrentSong(songs[index + 1])
      }
      audioElem.current.currentTime = 0;
      
    }
  
    


    return (
        <div class="card">
        
        <div class="content">
            <div>
                <h3>{currentSong.name}<br/> <span>{currentSong.anime}</span></h3>
                <br/>
                <ul class="sci">
                    <li><a onClick={skipBack} ><SkipPreviousIcon style={{color:'black'} }/></a></li>
                    <li><a onClick={PlayPause} >{isplaying ? <PlayCircleIcon style={{color:'black'}}/> : <PauseIcon style={{color:'black'}}/>}</a></li>
                    <li><a onClick={skiptoNext} ><SkipNextIcon style={{color:'black'}}/></a></li>
                </ul>
            </div>
        </div>
    </div>
    );
}