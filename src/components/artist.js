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
    <div className="relative flex items-center justify-center">
      <div className="absolute w-16 h-16 mx-auto mt-auto rounded-3xl top-12 left-20 bg-spotify-text/10 "></div>

      <div className="absolute z-10 h-16 mx-auto mt-auto -right-20 max-w-max rounded-3xl top-34 bg-spotify-text">
        12312310238713 aosjdas jakld jaslkd jalksd kajsd
      </div>
      <div className="relative min-h-[600px] h-full w-full max-w-[325px]">
        <img
          src={randomArtist[0].mainArtistInfo.image}
          className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full rounded-[3rem]"
        />
      </div>

      <div className="absolute -bottom-28 z-10  mx-auto mt-auto max-w-full rounded-3xl top-34 bg-spotify-text h-[150px]">
        12312310238713 aosjdas jakld jaslkd jalksd kajsd
      </div>
      <div className="h-[600px] w-[600px] rounded-full bg-spotify-text/10 absolute top-0 left-0 right-0 -bottom-20 -z-10 mt-auto mx-auto"></div>
    </div>
  );
}
