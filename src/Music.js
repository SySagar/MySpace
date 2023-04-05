import "./App.css";
import Player from "./Player";
import { useRef, useState, useEffect } from "react";
import lo1 from "./songs/aot.mp3";
import lo2 from "./songs/demonSlayer.mp3";
import lo3 from "./songs/erased.mp3";
import lo4 from "./songs/JJK.mp3";
import lo5 from "./songs/kimino.mp3";
import lo6 from "./songs/naruto.mp3";
import lo7 from "./songs/neverland.mp3";
import lo8 from "./songs/Norogami.mp3";
import lo9 from "./songs/parasyte.mp3";
import lo10 from "./songs/rumbling.mp3";
import lo11 from "./songs/takemichi.mp3";
import lo12 from "./songs/unravel.mp3";
import lo13 from "./songs/violet.mp3";
import lo14 from "./songs/yourlie.mp3";

const Music = () => {
  var TRACKLIST = [
    {
      id: 1,
      name: "Shinjo Sasageyo",
      anime: "Attack on Titan",
      source: lo1,
    },
    {
      id: 2,
      name: "Gurenge",
      anime: "Demon Slayer",
      source: lo2,
    },
    {
      id: 3,
      name: "Erased - theme",
      anime: "Erased",
      source: lo3,
    },
    {
      id: 4,
      name: "Kaikai Kitan",
      anime: "Jujutsu Kaisen",
      source: lo4,
    },
    {
      id: 5,
      name: "Kataware doki",
      anime: "Kimino na wa",
      source: lo5,
    },
    {
      id: 6,
      name: "Blue Bird",
      anime: "Naruto",
      source: lo6,
    },
    {
      id: 7,
      name: "Isabella's Lullaby",
      anime: "The Promised Neverland",
      source: lo7,
    },
    {
      id: 8,
      name: "Kyouran hey kids",
      anime: "Norogami Aragoto",
      source: lo8,
    },
    {
      id: 9,
      name: "Next to you",
      anime: "Parasyte",
      source: lo9,
    },
    {
      id: 10,
      name: "Rumbling",
      anime: "Attack on Titan",
      source: lo10,
    },
    {
      id: 11,
      name: "Cry Baby",
      anime: "Tokyo Revengers",
      source: lo11,
    },
    {
      id: 12,
      name: "Unravel",
      anime: "Tokyo Ghoul",
      source: lo12,
    },
    {
      id: 13,
      name: "Sincerely",
      anime: "Violet Evergarden",
      source: lo13,
    },
    {
      id: 14,
      name: "Hikaru nara",
      anime: "Your lie in April",
      source: lo14,
    },
  ];

  const [songs, setSongs] = useState(TRACKLIST);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(TRACKLIST[0]);

  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  return (
    <div className="Music">
      <audio
        src={currentSong.source}
        ref={audioElem}
        onTimeUpdate={onPlaying}
      />
      <Player
        songs={songs}
        setSongs={setSongs}
        isplaying={isplaying}
        setisplaying={setisplaying}
        audioElem={audioElem}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
};

export default Music;
