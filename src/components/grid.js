import React from "react";
import { BsMusicNote } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { VscArrowRight } from "react-icons/vsc";

import { AiFillPlayCircle } from "react-icons/ai";
export default function Grid({ randomArtist }) {
  console.log(randomArtist);
  return (
    <div className="flex flex-col items-end justify-start w-full h-full max-w-lg gap-5 mx-auto mt-8">
      <div className="grid w-full grid-cols-1 gap-5">
        <div className="flex w-full max-w-lg grid-span-1 min-h-[65px] max-h-[65px] gap-3">
          <div className="flex items-center justify-start flex-1 h-full p-4 border-2 rounded-full border-spotify-text">
            <div className="w-8 h-8 rounded-full bg-spotify-text"></div>
          </div>
          <div className="flex items-center flex-1 min-w-[65px] min-h-[65px] justify-center border-2 rounded-full border-spotify-text max-w-max">
            <BsMusicNote size={26} />
          </div>
          <div className="flex-1 border-2 rounded-full border-spotify-text min-w-[240px]">
            {" "}
            <img
              src={randomArtist[3]?.image}
              className="box-border object-cover bg-black z-10 w-full h-[61px] rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-5">
        <div className="flex w-full max-w-lg grid-span-1 min-h-[65px] max-h-[65px] gap-3">
          <div className="relative flex items-center justify-center overflow-hidden rounded-full bg-spotify-text h-[65px] w-[65px] box-border">
            <img
              src={randomArtist[0]?.mainArtistInfo?.image}
              className="box-border object-cover bg-black z-10 w-[61px] h-[61px] rounded-full"
            />
          </div>
          <div className="flex-1 border-2 rounded-full border-spotify-text min-w-[265px] flex items-center justify-center px-5">
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
        <div className="flex w-full max-w-lg grid-span-1 min-h-[65px] max-h-[65px] gap-3">
          <div className="flex items-center justify-start flex-1 h-full px-5 border-2 rounded-full border-spotify-text bg-[#fcd603]">
            <FaMicrophone size={26} />
            <div className="flex items-center gap-1 ml-5">
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[8px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[32px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[20px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[9px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[9px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[20px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[30px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[9px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[8px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[9px] block bg-spotify-text"></span>
            </div>
          </div>
          <div className="flex-1 px-5 border-2 rounded-full border-spotify-text bg-spotify-text"></div>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-5">
        <div className="flex w-full max-w-lg grid-span-1 min-h-[65px] max-h-[65px] gap-3">
          <div className="flex-1 border-2 rounded-full border-spotify-text min-w-[265px] flex items-center justify-center px-5">
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
        <div className="flex w-full max-w-lg grid-span-1 min-h-[65px] max-h-[65px] gap-3">
          <div className="flex items-center justify-center h-full min-w-[65px] min-h-[65px]  border-2 rounded-full border-spotify-text">
            <div className="w-6 h-6 -rotate-45 bg-spotify-text"></div>
          </div>
          <div className="flex items-center justify-start flex-1 h-full px-5 border-2 rounded-full border-spotify-text bg-spotify-green">
            <AiFillPlayCircle size={36} />
            <div className="flex items-center gap-1 ml-5">
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[9px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[20px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[30px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[9px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[8px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[32px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[20px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[9px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[9px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[20px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[30px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[9px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[20px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[30px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-text"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-text"></span>
            </div>
          </div>
          <div className="relative flex items-center justify-center overflow-hidden rounded-full bg-spotify-text h-[65px] w-[65px] box-border">
            <img
              src={randomArtist[1]?.mainArtistInfo?.image}
              className="box-border object-cover bg-black z-10 w-[61px] h-[61px] rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-5">
        <div className="flex w-full max-w-lg grid-span-1 min-h-[65px] max-h-[65px] gap-3">
          <div className="flex-1 border-2 rounded-full border-spotify-text min-w-[265px] flex items-center justify-center px-5">
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-text text-center underline decoration-2">
              F
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-text text-center underline decoration-2">
              O
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-text text-center underline decoration-2">
              R
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-text text-center underline decoration-2"></span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-text text-center underline decoration-2">
              F
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-text text-center underline decoration-2">
              R
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-text text-center underline decoration-2">
              E
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-text text-center underline decoration-2">
              E
            </span>
          </div>
          <div className="flex items-center justify-center overflow-hidden rounded-full  h-[65px] w-[65px] bg-spotify-text/20">
            <VscArrowRight size={32} className="-rotate-45" />
          </div>
        </div>
      </div>
    </div>
  );
}
