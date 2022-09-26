import { useState, useEffect } from "react";
import Artist from "./artist";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { FaSpotify } from "react-icons/fa";
import { BiShuffle } from "react-icons/bi";
import Grid from "./grid";
import { RiYoutubeFill } from "react-icons/ri";
import { fetchRandomArtist } from "../api/actions";

export default function Info() {
  const [randomArtist, setRandomArtist] = useState([]);

  useEffect(() => {
    fetchRandomArtist(setRandomArtist);
  }, []);

  if (!randomArtist) return null;

  return (
    <>
      <div className="flex w-full py-20">
        <div className="flex flex-col w-full col-span-1 gap-5 max-w-[282px]">
          <div className="relative w-full h-full max-w-full mx-auto border-2 border-spotify-text bg-[#f3d152]"></div>
          <div className="relative w-full h-full max-w-full border-2 max-auto border-spotify-text  bg-[#ef87d0]"></div>
        </div>
        <div className="relative flex flex-col justify-center w-full max-w-screen-md mx-auto">
          <h1 className="z-20 block mb-16 font-normal leading-tight tracking-tight text-8xl text-spotify-text">
            <span>Explore</span> new playlists async.
          </h1>
          <div className="flex flex-col h-full max-w-md min-h-[200px]">
            <p className="block w-full text-[18px] font-normal leading-snug tracking-snug text-spotify-text">
              Explore new music, deepen your passion and get lost in creativity. What
              you'll find from your friends might suprrise you.{" "}
            </p>
            <button className="w-max gap-3 px-8 py-4 mt-auto bg-spotify-text h-max text-[17px] font-normal leading-snug tracking-snug text-spotify-bg flex items-center min-h-[65px]">
              <FaSpotify className="text-2xl" />
              Connect with Spotify
            </button>
          </div>
        </div>
        <Grid randomArtist={randomArtist.slice(1)} />
      </div>
    </>
  );
}
