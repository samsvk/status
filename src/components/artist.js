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
    <div className="h-full col-span-2 p-10 mt-24">
      {/* <div className="relative grid grid-cols-2 gap-4">
        <div className="relative col-span-1 rounded-tl-[6rem] rounded-br-[6rem] bg-pink-500 h-full w-full min-h-[400px]">
          <div className="absolute left-0 right-0 w-full mx-auto bg-indigo-500 h-36 -bottom-40  rounded-br-[6rem]"></div>
        </div>
        <div className="relative col-span-1 rounded-tl-[6rem] rounded-br-[6rem] bg-pink-500 h-full w-full min-h-[400px]">
          <div className="absolute left-0 right-0 w-52 h-52 mx-auto bg-indigo-500 border-[14px] rounded-full -bottom-24 border-spotify-bg "></div>
        </div>
      </div> */}
      <div className="relative flex items-end justify-end col-span-2 -bottom-0">
        <div className="relative z-10 bg-white rounded-full h-60 w-60"></div>
        <div className="absolute rounded-full h-60 w-60 bg-spotify-text right-20"></div>
      </div>
    </div>
  );
}
