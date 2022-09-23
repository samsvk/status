import useRender from "../hooks/useRender";
import { useEffect, useState } from "react";
import { fetchRandomArtist } from "../api/actions";
import { motion, AnimatePresence } from "framer-motion";
import { container, child, variants } from "../global";

export default function Artist() {
  const [randomArtist, setRandomArtist] = useState();

  useEffect(() => {
    fetchRandomArtist(setRandomArtist);
  }, []);

  if (!randomArtist) return null;
  return (
    <div className="relative flex w-full h-full">
      <div className="relative flex-1 h-full">
        <img
          src={randomArtist[0].mainArtistInfo.image}
          className="relative top-0 bottom-0 left-0 right-0 block object-cover w-full h-full -z-0"
        />
      </div>
      <div className="flex flex-col flex-1 h-full bg-indigo-500">
        <div className="relative flex-1 bg-slate-200">
          <img
            src={randomArtist[1].mainArtistInfo.image}
            className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full"
          />
        </div>
        <div className="relative flex-1 bg-neutral-500">
          <img
            src={randomArtist[2].mainArtistInfo.image}
            className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
