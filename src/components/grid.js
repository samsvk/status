import React from "react";
import { BsMusicNote } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";

export default function Grid({ randomArtist }) {
  console.log(randomArtist);
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-md min-h-screen col-span-2 gap-3">
      <div className="grid w-full grid-cols-1 gap-5">
        <div className="flex w-full max-w-lg grid-span-1 min-h-[60px] max-h-[60px] gap-3">
          <div className="flex items-center justify-start flex-1 h-full p-4 border-2 rounded-full border-spotify-text">
            <div className="w-8 h-8 rounded-full bg-spotify-text"></div>
          </div>
          <div className="flex items-center flex-1 p-4 border-2 rounded-full border-spotify-text max-w-max">
            <BsMusicNote size={26} />
          </div>
          <div className="flex-1 border-2 rounded-full border-spotify-text min-w-[240px]"></div>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-5">
        <div className="flex w-full max-w-lg grid-span-1 min-h-[60px] max-h-[60px] gap-3">
          <div className="flex items-center justify-start overflow-hidden border-2 rounded-full border-spotify-text h-[60px] w-[60px]">
            <img src={randomArtist[0]?.mainArtistInfo?.image} />
          </div>
          <div className="flex-1 border-2 rounded-full border-spotify-text min-w-[260px] flex items-center justify-center px-3">
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-text text-center underline decoration-2">
              M
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-text text-center underline decoration-2">
              O
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-text text-center underline decoration-2">
              D
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-text text-center underline decoration-2">
              E
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-text text-center underline decoration-2">
              R
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-text text-center underline decoration-2">
              N
            </span>
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-5">
        <div className="flex w-full max-w-lg grid-span-1 min-h-[60px] max-h-[60px] gap-3">
          <div className="flex-1 border-2 rounded-full border-spotify-text min-w-[260px] flex items-center justify-center px-3">
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-text text-center underline decoration-2">
              S
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-text text-center underline decoration-2">
              O
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-text text-center underline decoration-2">
              L
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-text text-center underline decoration-2">
              U
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-text text-center underline decoration-2">
              T
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-text text-center underline decoration-2">
              I
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-text text-center underline decoration-2">
              O
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-text text-center underline decoration-2">
              N
            </span>
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-5">
        <div className="flex w-full max-w-lg grid-span-1 min-h-[60px] max-h-[60px] gap-3">
          <div className="flex items-center justify-start flex-1 h-full px-5 border-2 rounded-full border-[#ffed48] bg-[#ffed48]">
            <FaMicrophone size={26} />
          </div>
          <div className="flex-1 px-5 border-2 rounded-full border-spotify-text bg-spotify-text"></div>
        </div>
      </div>
    </div>
  );
}
