import useRender from "../hooks/useRender";
import { useEffect, useState } from "react";
import { fetchRandomArtist } from "../api/actions";
import { motion, AnimatePresence } from "framer-motion";
import { container, child, variants } from "../global";
import { RiStarSFill } from "react-icons/ri";

export default function Artist() {
  const [randomArtist, setRandomArtist] = useState();

  useEffect(() => {
    fetchRandomArtist(setRandomArtist);
  }, []);

  if (!randomArtist) return null;

  console.log(randomArtist[0]);
  return (
    <div className="relative items-center justify-center w-full h-full">
      <div
        className="absolute z-10 flex items-center justify-center gap-5 px-5 py-2.5 m-auto mt-auto -translate-x-1/2 bg-white bottom-12
      text-spotify-bg h-max w-max rounded-2xl shadow-md"
      >
        <div className="flex gap-3">
          <div className="flex flex-col items-start">
            <h6 className="block w-[115px] overflow-hidden text-ellipsis text-sm font-semibold leading-snug text-left whitespace-nowrap tracking-snug text-spotify-text">
              {randomArtist[0].name}
            </h6>
            <ul className="mt-0.5">
              <li className="text-xs font-semibold leading-snug text-left uppercase whitespace-nowrap tracking-snug text-spotify-text/50">
                {randomArtist[0].mainArtistInfo.genres[0]}
              </li>
            </ul>
          </div>
          <img
            src={randomArtist[0].image}
            className="object-cover w-10 h-10 rounded-full"
          />
        </div>
      </div>

      <div className="absolute z-10 flex items-center justify-center w-full gap-5 m-auto mt-auto translate-x-1/2 top-12 text-spotify-bg h-max">
        <div className="px-5 py-2.5 bg-white rounded-2xl shadow-md">
          <h6 className="block max-w-[200px] overflow-hidden text-ellipsis text-sm font-semibold leading-snug text-left whitespace-nowrap tracking-snug text-spotify-text">
            {randomArtist[0].mainArtistInfo.name}
          </h6>
        </div>
      </div>

      <img
        src={randomArtist[0].mainArtistInfo.image}
        className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full rounded-[3rem] mx-auto shadow-lg"
      />
    </div>
  );
}
