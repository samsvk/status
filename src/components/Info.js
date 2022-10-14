import Grid from "./grid";
import { FaSpotify } from "react-icons/fa";
import { useState, useEffect } from "react";
import { fetchRandomArtist } from "../api/actions";
import { getWindow } from "../global";

export default function Info() {
  const [randomArtist, setRandomArtist] = useState([]);

  useEffect(() => {
    fetchRandomArtist(setRandomArtist);
  }, []);
  return (
    <>
      <div className="flex w-full gap-32 mx-auto max-w-screen-2xl">
        <Start />
        <Grid randomArtist={randomArtist.slice(1)} />
      </div>
    </>
  );
}

function Start() {
  function handleLogin() {
    const window = getWindow();
    window.location.href = "http://localhost:3001/login";
  }

  return (
    <div className="relative flex flex-col items-start w-full gap-16 -z-10 max-w-max">
      <h1 className="z-0 inline-block font-semibold leading-[1.15] tracking-tight text-left text-[5.3rem] text-spotify-text">
        Spotify playlist
        <br /> management
        <br />
        {/* <span className="relative inline-block z-10 before:-z-10 before:absolute before:content-[''] before:-rotate-2 before:h-1 before:w-full before:bg-spotify-green before:bottom-6 before:left-2">
          asynchronously
        </span> */}
        asynchronously
      </h1>
      <div className="flex flex-col w-full h-full max-w-screen-sm">
        <p className="block w-full max-w-lg text-[1.05rem] font-semibold leading-normal tracking-tight text-left text-spotify-border">
          Connect your friends, playlists, and songs in Shuff.le — so you can jam
          together; whenever.
        </p>
      </div>

      <button
        onClick={handleLogin}
        className="flex items-center pl-5 pr-8 rounded-full h-[75px] min-h-[75px] min-w-[75px] whitespace-nowrap text-[18px] font-medium leading-snug  hover:bg-spotify-bg hover:text-spotify-text w-full tracking-tight border-2 border-spotify-border gap-3 bg-spotify-green text-spotify-bg duration-150 max-w-max"
      >
        <FaSpotify className="mx-auto text-4xl rounded-full text-inherit" />
        Connect With Spotify
      </button>
    </div>
  );
}
