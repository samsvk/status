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
    <div className="relative w-full h-full">
      <img
        src={randomArtist[0].mainArtistInfo.image}
        className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full opacity-50"
      />
    </div>
  );
}
