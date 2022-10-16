import React from "react";
import { getWindow } from "../global";
import { HiOutlineArrowRight } from "react-icons/hi";

function handleLogin() {
  const window = getWindow();
  window.location.href = "http://localhost:3001/login";
}

export const Arrows = () => {
  return (
    <div className="h-20 pt-12 mx-auto max-w-max ">
      <button
        onClick={handleLogin}
        className="flex items-center px-8 rounded-full py-5 whitespace-nowrap text-[1.05rem] font-normal leading-snug  w-full tracking-tight border  gap-4 duration-150 max-w-max border-spotify-text/60 text-spotify-text/60 hover:text-spotify-text hover:border-spotify-text"
      >
        Connect with Spotify
        <HiOutlineArrowRight className="mx-auto text-2xl rounded-full text-inherit" />
      </button>
    </div>
  );
};
