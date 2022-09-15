import React from "react";
import Grid from "../grid";
import { FaSpotify } from "react-icons/fa";
import Artist from "../artist";
import { motion, AnimatePresence } from "framer-motion";
import { container, child, getWindow } from "../../global";

export default function Home() {
  function handleLogin() {
    const window = getWindow();
    window.location.href = "http://localhost:3001/login";
  }

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col items-center justify-center w-full max-w-3xl p-12">
        <div className="flex flex-col items-start max-w-lg gap-10">
          <h1 className="text-6xl font-medium tracking-tighter z-[-10] text-left text-spotify-text leading-tight">
            Find, Share, Create. Good music, good mood.
          </h1>
          <p className="w-full max-w-md text-xl font-normal leading-relaxed tracking-tight text-spotify-text/50">
            Discover musicians from around the world. Boost your mood with a fresh
            playlist that fits all.
          </p>

          <button
            onClick={handleLogin}
            className="relative flex items-center gap-4 px-10 py-2.5 text-[17px] font-normal leading-relaxed tracking-tight duration-200  bg-spotify-text text-spotify-bg hover:shadow-lg after:absolute after:content-[''] after:w-full after:h-full after:bottom-2 after:left-2 after:-z-10 after:bg-spotify-bg after:border-2 after:border-spotify-text hover:bg-spotify-green"
          >
            Connect with Spotify
            <FaSpotify />
          </button>
        </div>
      </div>
      <div className="flex-1 p-8 bg-spotify-bg">
        <div className="h-full bg-black/5 rounded-3xl"></div>
      </div>
    </div>
  );
}
{
  /* 
<div className="flex flex-col flex-1 gap-10">
  <h1 className="text-6xl font-medium tracking-tighter z-[-10]text-left text-spotify-text leading-tight opacity-50">
    Create your new
    <br /> playlist in <span className="text-spotify-green">One Click</span>
  </h1>
  <p className="w-full max-w-lg text-2xl font-normal leading-relaxed tracking-tight text-spotify-text">
    Share, discover and boost your mood with music by building a playlist that fits
    all!
  </p>
  <div>
    <div>
      <button
        onClick={handleLogin}
        className="flex items-center gap-4 px-8 py-5 text-xl font-normal leading-relaxed tracking-tight rounded-lg bg-spotify-green relative text-spotify-bg
                 after:absolute after:content-[''] after:w-full after:h-full after:bottom-2 after:right-2 after:-z-10 after:rounded-lg after:bg-spotify-bg after:border-2 after:border-spotify-text
                 hover:shadow-lg duration-200
                 "
      >
        <FaSpotify />
        Connect to Spotify
      </button>
    </div>
  </div>
  <div>
    <p className="text-center mx-auto text-[14px] flex-1 leading-5 font-normal text-neutral-700/80  tracking-tight flex gap-1 items-center">
      <span className="underline">Don't understand how it works?</span>
      <span className="line-through">$0</span>
      It's completely <span className="font-medium text-black/80">free</span>
      forever.
    </p>
  </div>
</div>; */
}
