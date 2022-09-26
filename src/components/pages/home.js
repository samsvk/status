import React from "react";
import Grid from "../grid";
import { FaSpotify } from "react-icons/fa";
import Artist from "../artist";
import { motion, AnimatePresence } from "framer-motion";
import { container, child, getWindow } from "../../global";
import Navbar from "../navbar";
import Info from "../Info";
import { AiFillGithub } from "react-icons/ai";

export default function Home() {
  function handleLogin() {
    const window = getWindow();
    window.location.href = "http://localhost:3001/login";
  }

  return (
    <div className="relative flex flex-col items-start h-full min-h-screen mx-auto overflow-hidden max-w-max">
      <Navbar />
      <Info />

      <div className="absolute left-0 right-0 flex mx-auto pr-60 -bottom-20 w-max">
        <div className="min-h-[180px] min-w-[180px] w-[180px] h-[180px] bg-spotify-text rounded-full"></div>
        <div className="flex absolute flex-col overflow-hidden left-16 -top-3 min-h-[180px] min-w-[180px] w-[180px] h-[180px] bg-spotify-bg border-2 border-spotify-text rounded-full">
          <p className="block text-center w-full text-[18px] font-medium mt-10 leading-normal tracking-snug text-spotify-text max-w-sm">
            Our source
          </p>
          <p className="inline-block text-center w-full text-[18px] font-medium leading-normal tracking-snug text-spotify-text max-w-sm">
            available on
            <AiFillGithub className="inline-block mb-1 ml-1 align-middle" />
          </p>
        </div>
      </div>
    </div>
  );
}
