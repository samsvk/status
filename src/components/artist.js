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
      <div className="relative flex flex-col flex-1 top-10">
        <div className="bg-black max-h-[275px] min-h-[275px] overflow-hidden relative border border-grey-100 drop-shadow-sm z-40">
          <div className="relative z-50 text-white">
            <p className="relative block max-w-[150px] text-white overflow-hidden text-base font-medium leading-none tracking-tight whitespace-nowrap text-ellipsis">
              {randomArtist[0].name} askjdfhasdkjfh askdjfh askjdfh askjdfh
              askjdfhaskdjfhasdkjfha sdkjafdh akjsfdhjk
            </p>
          </div>
          <div className="absolute top-0 z-40 w-full h-full bg-black/50" />
          <img
            src={randomArtist[0].image}
            className="absolute top-0 block object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="relative flex flex-col flex-1 gap-5 top-6">
        <div className="bg-black max-h-[275px] min-h-[275px] overflow-hidden relative  border border-grey-100 drop-shadow-sm">
          <img
            src={randomArtist[1].image}
            className="absolute block object-cover w-full h-full"
          />
        </div>
        <div className="bg-black max-h-[275px] min-h-[275px] overflow-hidden relative  border border-grey-100 drop-shadow-sm">
          <img
            src={randomArtist[2].image}
            className="absolute block object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="relative flex flex-col flex-1 gap-5">
        <div className="bg-black max-h-[275px] min-h-[275px] overflow-hidden relative  border border-grey-100 drop-shadow-sm">
          <img
            src={randomArtist[3].image}
            className="absolute block object-cover w-full h-full"
          />
        </div>
        <div className="bg-black max-h-[275px] min-h-[275px] overflow-hidden relative  border border-grey-100 drop-shadow-sm">
          <img
            src={randomArtist[4].image}
            className="absolute block object-cover w-full h-full"
          />
        </div>
        <div className="bg-black max-h-[275px] min-h-[275px] overflow-hidden relative  border border-grey-100 drop-shadow-sm">
          <img
            src={randomArtist[5].image}
            className="absolute block object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="relative flex flex-col flex-1 gap-5 bottom-20">
        <div className="bg-black max-h-[275px] min-h-[275px] overflow-hidden relative border border-grey-100 drop-shadow-sm ">
          <img
            src={randomArtist[6].image}
            className="absolute block object-cover w-full h-full"
          />
        </div>{" "}
        <div className="bg-black max-h-[275px] min-h-[275px] overflow-hidden relative  border border-grey-100 drop-shadow-sm">
          <img
            src={randomArtist[7].image}
            className="absolute block object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="relative flex flex-col flex-1 bottom-8">
        <div className="bg-black max-h-[275px] min-h-[275px] overflow-hidden relative  border border-grey-100 drop-shadow-sm">
          <img
            src={randomArtist[8].image}
            className="absolute block object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
