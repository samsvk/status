import useRender from "../hooks/useRender";
import { useEffect, useState } from "react";
import { fetchRandomArtist } from "../api/actions";
import { FaSpotify } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { container, child, variants } from "../global";

export default function Artist() {
  const [randomArtist, setRandomArtist] = useState();

  useEffect(() => {
    fetchRandomArtist(setRandomArtist);
  }, []);

  console.log(randomArtist);

  if (!randomArtist) return null;

  return (
    <div className="relative flex items-center justify-center gap-5 p-5 max-h-max h-max">
      <div className="relative flex flex-col flex-1">
        <div className="bg-black rounded-lg max-h-[275px] min-h-[365px]">123</div>
      </div>
      <div className="relative flex flex-col flex-1 gap-5">
        <div className="bg-black rounded-lg max-h-[275px] min-h-[365px]">123</div>{" "}
        <div className="bg-black rounded-lg max-h-[275px] min-h-[365px]">123</div>
      </div>
      <div className="relative flex flex-col flex-1 gap-5">
        <div className="bg-black rounded-lg max-h-[275px] min-h-[365px]">123</div>{" "}
        <div className="bg-black rounded-lg max-h-[275px] min-h-[365px]">123</div>
      </div>
      <div className="relative flex flex-col flex-1">
        <div className="bg-black rounded-lg max-h-[275px] min-h-[365px]">123</div>{" "}
      </div>
    </div>
  );
}
