import useRender from "../hooks/useRender";
import { useEffect, useState } from "react";
import { fetchRandomArtist } from "../api/actions";
import { motion, AnimatePresence } from "framer-motion";
import { container, child, variants } from "../global";
import { RiStarSFill } from "react-icons/ri";

export default function Artist({ randomArtist }) {
  return (
    <div className="relative items-center justify-center w-full h-full min-h-[200px] max-w-[160px] min-w-[160px]">
      <img
        src={randomArtist?.mainArtistInfo?.image}
        className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full mx-auto shadow-lg"
      />
      <div className="absolute w-full h-full bg-spotify-text left-0 -z-10 rotate-[6deg] max-h-[300px] bottom-0"></div>

      {/* <div className="absolute w-[120px] h-full bg-spotify-text left-6  mr-auto z-10 rotate-[-40deg] max-h-[2px] top-3 m-auto mt-auto -translate-x-1/2"></div> */}
    </div>
  );
}
