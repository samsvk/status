import React from "react";
import { getWindow } from "../global";
import { FaSpotify } from "react-icons/fa";

function handleLogin() {
  const window = getWindow();
  window.location.href = "http://localhost:3001/login";
}

export const Arrows = () => {
  return (
    <div className="h-20 pt-12 mx-auto max-w-max ">
      <button
        onClick={handleLogin}
        className="flex items-center pl-5 pr-8 rounded-full py-4 whitespace-nowrap text-[1.05rem] font-normal leading-snug  w-full tracking-tight border border-spotify-text/60 gap-3 duration-150 max-w-max border-spotify-text text-spotify-text hover:border-spotify-green"
      >
        <FaSpotify className="mx-auto text-3xl rounded-full text-inherit" />
        Connect with Spotify
      </button>
    </div>
  );
};
