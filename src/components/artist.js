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
    <div className="relative w-full h-full">
      <div className="absolute top-0 bottom-0 left-0 right-0 z-10 flex px-4 py-2 mt-auto text-spotify-bg h-max w-max rounded-2xl items-center justify-center bg-[#e9e9e9] gap-5 drop-md">
        <div className="flex gap-3">
          <div className="text-spotify-text">
            <RiStarSFill className="text-3xl" />
          </div>
          <div className="flex flex-col items-start">
            <h6 className="text-sm font-semibold leading-snug text-right whitespace-nowrap tracking-snug text-spotify-text">
              {randomArtist[0].mainArtistInfo.name}
            </h6>
            <ul className="ml-auto">
              <li className="text-xs font-semibold leading-snug text-right uppercase whitespace-nowrap tracking-snug text-spotify-text/50">
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
      <div className="text-spotify-bg absolute top-0 bottom-0 left-0 right-0 z-10 h-max w-max ml-auto my-auto rounded-[3rem] py-2 px-4 bg-spotify-text">
        {randomArtist[0].mainArtistInfo.name}
      </div>
      <img
        src={randomArtist[0].mainArtistInfo.image}
        className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full rounded-[3rem]"
      />
    </div>
  );
}
