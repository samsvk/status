import { useState } from "react";
import Artist from "./artist";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { FaSpotify } from "react-icons/fa";
import { BiShuffle } from "react-icons/bi";
import { RiYoutubeFill } from "react-icons/ri";

export default function Info() {
  return (
    <>
      <div className="grid grid-cols-5 gap-10 mt-auto mb-24">
        <div className="flex flex-col col-span-3">
          <h1 className="block text-[6rem] font-semibold mb-16 tracking-tight text-left text-spotify-text/95 leading-tight z-20">
            Share and shuffle your playlists with total control of your data.
          </h1>
          <div className="flex w-full gap-[5rem]">
            <div className="relative block text-[18px] font-medium leading-snug tracking-snug text-spotify-text">
              <Artist />
            </div>
            <div className="flex flex-col h-full max-w-md col-span-2">
              <p className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-text">
                Explore new music, deepen your passion and get lost in creativity.
                What you'll find from your friends might suprrise you.
              </p>
              <button className="w-max gap-3 px-8 py-4 mt-auto bg-spotify-text h-max text-[18px] font-normal leading-snug tracking-snug text-spotify-bg flex items-center">
                <FaSpotify className="text-2xl" />
                Connect with Spotify
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
