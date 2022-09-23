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
    <div className="relative grid content-center w-full h-full grid-cols-3 gap-5">
      <div className="pb-5 my-auto text-center">
        <img
          src={randomArtist[0].mainArtistInfo.image}
          className="rounded-lg drop-shadow-md h-[300px] object-cover"
        />
      </div>
      <div className="flex flex-col gap-5 pt-10 my-auto text-center">
        <div className="my-auto text-center">
          <img
            src={randomArtist[1].mainArtistInfo.image}
            className="rounded-lg drop-shadow-md h-[300px] object-cover"
          />
        </div>
        <div className="my-auto text-center">
          <img
            src={randomArtist[2].mainArtistInfo.image}
            className="rounded-lg drop-shadow-md h-[300px] object-cover"
          />
        </div>
      </div>
      <div className="my-auto text-center">
        <img
          src={randomArtist[8].mainArtistInfo.image}
          className="rounded-lg drop-shadow-md h-[300px] object-cover"
        />
      </div>
    </div>
  );
}
