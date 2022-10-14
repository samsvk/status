import React from "react";
import { BsMusicNote } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { VscArrowRight } from "react-icons/vsc";

import { AiFillPlayCircle } from "react-icons/ai";
export default function Grid({ randomArtist }) {
  return (
    <div className="flex flex-col w-full h-full gap-5 max-w-max">
      <div className="grid w-full grid-cols-1 gap-5">
        <div className="flex w-full max-w-lg grid-span-1 min-h-[75px] max-h-[75px] gap-5">
          <div className="flex items-center justify-start flex-1 h-full p-4 border-2 rounded-full border-spotify-border">
            <div className="w-8 h-8 rounded-full bg-spotify-border"></div>
          </div>
          <div className="flex items-center flex-1 min-w-[75px] min-h-[75px] justify-center border-2 rounded-full border-spotify-border max-w-max">
            <BsMusicNote size={26} className="text-spotify-border" />
          </div>
          <div className="flex-1 border-2 rounded-full border-spotify-border min-w-[240px]">
            {" "}
            <img
              src={randomArtist[3]?.image}
              className="box-border object-cover bg-black z-10 w-full h-[71px] rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-5">
        <div className="flex w-full max-w-lg grid-span-1 min-h-[75px] max-h-[75px] gap-5">
          <div className="relative flex items-center justify-center overflow-hidden rounded-full bg-spotify-border h-[75px] w-[75px] box-border">
            <img
              src={randomArtist[0]?.mainArtistInfo?.image}
              className="box-border object-cover bg-black z-10 w-[71px] h-[71px] rounded-full"
            />
          </div>
          <div className="flex-1 border-2 rounded-full border-spotify-border min-w-[275px] flex items-center justify-center px-5">
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-border text-center underline decoration-2">
              M
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-border text-center underline decoration-2">
              O
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-border text-center underline decoration-2">
              D
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-border text-center underline decoration-2">
              E
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-border text-center underline decoration-2">
              R
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-border text-center underline decoration-2">
              N
            </span>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-5">
        <div className="flex w-full max-w-lg grid-span-1 min-h-[75px] max-h-[75px] gap-5">
          <div className="flex items-center justify-start flex-1 h-full px-5 border-2 rounded-full border-spotify-border bg-[#fcd603]">
            <FaMicrophone size={26} className="text-spotify-border" />
            <div className="flex items-center gap-1 ml-5">
              <span className="w-[2px] h-[12px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[8px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[32px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[20px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[9px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[9px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[20px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[30px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[9px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[8px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[9px] block bg-spotify-border"></span>
            </div>
          </div>
          <div className="flex-1 px-5 border-2 rounded-full border-spotify-border bg-spotify-border"></div>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-5">
        <div className="flex w-full max-w-lg grid-span-1 min-h-[75px] max-h-[75px] gap-5">
          <div className="flex-1 border-2 rounded-full border-spotify-border min-w-[275px] flex items-center justify-center px-5">
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-border text-center underline decoration-2">
              S
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-border text-center underline decoration-2">
              O
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-border text-center underline decoration-2">
              L
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-border text-center underline decoration-2">
              U
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-border text-center underline decoration-2">
              T
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-border text-center underline decoration-2">
              I
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-border text-center underline decoration-2">
              O
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-border text-center underline decoration-2">
              N
            </span>
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-5">
        <div className="flex w-full max-w-lg grid-span-1 min-h-[75px] max-h-[75px] gap-5">
          <div className="flex items-center justify-center h-full min-w-[75px] min-h-[75px]  border-2 rounded-full border-spotify-border">
            <div className="w-6 h-6 -rotate-45 bg-spotify-border"></div>
          </div>
          <div className="flex items-center justify-start flex-1 h-full px-5 border-2 rounded-full border-spotify-border bg-spotify-green">
            <AiFillPlayCircle size={36} className="text-spotify-border" />
            <div className="flex items-center gap-1 ml-5">
              <span className="w-[2px] h-[12px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[9px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[20px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[30px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[8px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[32px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[20px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[9px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[9px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[20px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[30px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[18px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[9px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[12px] block bg-spotify-border"></span>
              <span className="w-[2px] h-[20px] block bg-spotify-border"></span>
            </div>
          </div>
          <div className="relative flex flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-spotify-border h-[75px] w-[75px] box-border">
            <img
              src={randomArtist[1]?.mainArtistInfo?.image}
              className="box-border object-cover bg-black z-10 w-[71px] h-[71px] rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-5">
        <div className="flex w-full max-w-lg grid-span-1 min-h-[75px] max-h-[75px] gap-5">
          <div className="flex-1 border-2 rounded-full border-spotify-border min-w-[275px] flex items-center justify-center px-5">
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-border text-center underline decoration-2">
              F
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-border text-center underline decoration-2">
              O
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-border text-center underline decoration-2">
              R
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-border text-center underline decoration-2"></span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-border text-center underline decoration-2">
              F
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-border text-center underline decoration-2">
              R
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-border text-center underline decoration-2">
              E
            </span>
            <span className="block w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-border text-center underline decoration-2">
              E
            </span>
          </div>
          <div className="flex items-center justify-center overflow-hidden rounded-full  h-[75px] w-[75px] bg-spotify-border/20">
            <VscArrowRight size={32} className="-rotate-45 text-spotify-border" />
          </div>
        </div>
      </div>
    </div>
  );
}
