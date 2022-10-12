import { GoFlame } from "react-icons/go";
import { useState, useEffect } from "react";
import { fetchRandomArtist } from "../api/actions";

export default function Footer() {
  const [randomArtist, setRandomArtist] = useState([]);

  useEffect(() => {
    fetchRandomArtist(setRandomArtist);
  }, []);

  if (!randomArtist) return null;

  return (
    <div className="fixed bottom-0 grid items-end w-full grid-cols-7">
      <div className="flex flex-col col-span-1 bg-pink-500 h-max">
        <div className="bg-black min-h-[480px]"></div>
      </div>
      <div className="grid-cols-1 bg-indigo-500 h-max">
        <div className="bg-black min-h-[300px]"></div>
      </div>
      <div className="relative col-span-2 bg-red-500 min-h-[220px] overflow-hidden">
        <img
          src={randomArtist[0]?.mainArtistInfo?.image}
          className="box-border absolute top-0 bottom-0 left-0 right-0 z-10 object-cover w-full h-full bg-black"
        />
      </div>
      <div className="grid-cols-1 bg-sky-500 h-max">
        <div className="bg-black min-h-[180px]"></div>
      </div>
      <div className="grid-cols-1 bg-blue-500 h-max">
        <div className="bg-black min-h-[440px]"></div>
      </div>
      <div className="flex flex-col grid-cols-1 h-full min-h-[520px]">
        <div className="flex flex-col flex-1 bg-red-500">
          <div className="flex h-full">
            <div className="w-1/2 bg-spotify-green"></div>
            <div className="w-3/4 bg-black"></div>
          </div>
          <div className="w-full bg-spotify-offset h-3/4"></div>
        </div>
        <div className="bg-pink-500 flex-[2] relative">
          <img
            src={randomArtist[3]?.mainArtistInfo?.image}
            className="box-border absolute top-0 bottom-0 left-0 right-0 z-10 object-cover w-full h-full bg-black"
          />
        </div>
      </div>
    </div>
  );
}
