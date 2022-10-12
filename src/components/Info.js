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
  return (
    <>
      <div className="flex w-full gap-24 pt-24 max-w-max">
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
    <div className="relative flex flex-col items-start w-full gap-16 max-w-max">
      <h1 className="z-20 inline-block font-bold leading-[1.15] tracking-tight text-left text-7xl text-spotify-text">
        Spotify playlist
        <br /> management
        <br />
        <span className="relative inline-block z-10 before:-z-10 before:absolute before:content-[''] before:-rotate-2 before:h-1 before:w-full before:bg-spotify-green before:bottom-6 before:left-2">
          asynchronously
        </span>
      </h1>
      <div className="flex flex-col w-full h-full max-w-screen-sm">
        <p className="block w-full max-w-lg text-lg font-normal leading-normal tracking-normal text-left text-spotify-text/80">
          Explore new music, deepen your passion and get lost in creativity. What
          you'll find from your friends might suprrise you.{" "}
        </p>
      </div>

      <button
        onClick={handleLogin}
        className="flex items-center pl-5 pr-8 rounded-full h-[65px] min-h-[65px] min-w-[65px] whitespace-nowrap text-[18px] font-medium leading-snug tracking-normal hover:bg-spotify-bg hover:text-spotify-text w-full uppercase border-2 border-spotify-text gap-3 bg-spotify-green text-spotify-bg duration-150 max-w-max"
      >
        <FaSpotify className="mx-auto text-4xl rounded-full text-inherit" />
        Connect With Spotify
      </button>
    </div>
  );
}
