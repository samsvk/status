import { useState, useEffect } from "react";
import Artist from "./artist";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { FaSpotify } from "react-icons/fa";
import { BiShuffle } from "react-icons/bi";
import Grid from "./grid";
import { RiYoutubeFill } from "react-icons/ri";
import { fetchRandomArtist } from "../api/actions";
import { getWindow } from "../global";
import { ImDiamonds, ImStarFull } from "react-icons/im";

export default function Info() {
  const [randomArtist, setRandomArtist] = useState([]);

  useEffect(() => {
    fetchRandomArtist(setRandomArtist);
  }, []);

  if (!randomArtist) return null;

  return (
    <>
      <div className="flex flex-col items-center w-full gap-32 pb-16 justiyf-center pt-14">
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
    <div className="relative flex flex-col items-start w-full gap-16">
      <h1 className="z-20 inline-block max-w-4xl mx-auto font-medium leading-[1.1] tracking-tighter text-center text-7xl text-spotify-text">
        Leader in management for your spotify playlists asynchronously.
      </h1>
      <div className="flex flex-col w-full h-full max-w-screen-sm mx-auto">
        <p className="block w-full max-w-sm text-base font-medium leading-normal tracking-normal text-spotify-text">
          Explore new music, deepen your passion and get lost in creativity. What
          you'll find from your friends might suprrise you.{" "}
        </p>
      </div>
      <div className="flex items-center">
        <button
          onClick={handleLogin}
          className="flex items-center pl-5 pr-8 rounded-full h-[65px] min-h-[65px] min-w-[65px] whitespace-nowrap text-[18px] font-medium leading-snug tracking-normal text-spotify-text max-w-sm w-full uppercase  border-2 border-spotify-text gap-3 hover:bg-spotify-green hover:text-spotify-bg duration-150"
        >
          <FaSpotify className="mx-auto text-4xl rounded-full text-inherit" />
          Connect With Spotify
        </button>
      </div>
    </div>
  );
}
