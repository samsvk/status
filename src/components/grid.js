import React from "react";
import { BsMusicNote } from "react-icons/bs";

export default function Grid({ randomArtist }) {
  console.log(randomArtist);
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-lg min-h-screen col-span-2 gap-3">
      <div className="grid w-full grid-cols-1 gap-5">
        <div className="flex w-full max-w-lg grid-span-1 min-h-[60px] max-h-[60px] gap-3">
          <div className="flex items-center justify-start flex-1 h-full p-4 border-2 rounded-full border-spotify-text">
            <div className="w-8 h-8 rounded-full bg-spotify-text"></div>
          </div>
          <div className="flex items-center flex-1 p-4 border-2 rounded-full border-spotify-text max-w-max">
            <BsMusicNote size={26} />
          </div>
          <div className="flex-1 border-2 rounded-full border-spotify-text min-w-[260px]"></div>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-5">
        <div className="flex w-full max-w-lg grid-span-1 min-h-[60px] max-h-[60px] gap-3">
          <div className="flex items-center justify-start overflow-hidden border-2 rounded-full border-spotify-text h-[60px] w-[60px]">
            <img src={randomArtist[0].mainArtistInfo.image} />
          </div>
          <div className="flex-1 border-2 rounded-full border-spotify-text min-w-[260px]"></div>
        </div>
      </div>
    </div>
  );
}
