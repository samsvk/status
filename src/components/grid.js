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
          <div className="flex items-center justify-start flex-1 h-full p-4 border-2 rounded-full border-spotify-text">
            <div className="w-8 h-8 rounded-full bg-spotify-text"></div>
          </div>
          <div className="flex items-center flex-1 min-w-[75px] min-h-[75px] justify-center border-2 rounded-full border-spotify-text max-w-max">
            <BsMusicNote size={26} className="text-spotify-text" />
          </div>
          <div className="flex-1 border-2 rounded-full border-spotify-text min-w-[240px]">
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
          <div className="relative flex items-center justify-center overflow-hidden rounded-full bg-spotify-text h-[75px] w-[75px] box-border">
            <img
              src={randomArtist[0]?.mainArtistInfo?.image}
              className="box-border object-cover bg-black z-10 w-[71px] h-[71px] rounded-full"
            />
          </div>
          <div className="flex-1 border-2 rounded-full border-spotify-text min-w-[275px] flex items-center justify-center px-5">
            <span className="block w-full first-letter:text-[1.05rem] font-semibold leading-normal tracking-tight text-center text-spotify-text">
              M
            </span>
            <span className="block w-full first-letter:text-[1.05rem] font-semibold leading-normal tracking-tight text-center text-spotify-text">
              O
            </span>
            <span className="block w-full first-letter:text-[1.05rem] font-semibold leading-normal tracking-tight text-center text-spotify-text">
              D
            </span>
            <span className="block w-full first-letter:text-[1.05rem] font-semibold leading-normal tracking-tight text-center text-spotify-text">
              E
            </span>
            <span className="block w-full first-letter:text-[1.05rem] font-semibold leading-normal tracking-tight text-center text-spotify-text">
              R
            </span>
            <span className="block w-full first-letter:text-[1.05rem] font-semibold leading-normal tracking-tight text-center text-spotify-text">
              N
            </span>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-5">
        <div className="flex w-full max-w-lg grid-span-1 min-h-[75px] max-h-[75px] gap-5">
          <div className="flex items-center justify-start flex-1 h-full px-5 border-2 rounded-full border-spotify-text bg-[#fcd603]">
            <FaMicrophone size={26} className="text-spotify-text" />
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
        <div className="flex w-full max-w-lg grid-span-1 min-h-[75px] max-h-[75px] gap-5">
          <div className="flex-1 border-2 rounded-full border-spotify-text min-w-[275px] flex items-center justify-center px-5">
            <span className="block w-full first-letter:text-[1.05rem] font-semibold leading-normal tracking-tight text-center text-spotify-text">
              S
            </span>
            <span className="block w-full first-letter:text-[1.05rem] font-semibold leading-normal tracking-tight text-center text-spotify-text">
              O
            </span>
            <span className="block w-full first-letter:text-[1.05rem] font-semibold leading-normal tracking-tight text-center text-spotify-text">
              L
            </span>
            <span className="block w-full first-letter:text-[1.05rem] font-semibold leading-normal tracking-tight text-center text-spotify-text">
              U
            </span>
            <span className="block w-full first-letter:text-[1.05rem] font-semibold leading-normal tracking-tight text-center text-spotify-text">
              T
            </span>
            <span className="block w-full first-letter:text-[1.05rem] font-semibold leading-normal tracking-tight text-center text-spotify-text">
              I
            </span>
            <span className="block w-full first-letter:text-[1.05rem] font-semibold leading-normal tracking-tight text-center text-spotify-text">
              O
            </span>
            <span className="block w-full first-letter:text-[1.05rem] font-semibold leading-normal tracking-tight text-center text-spotify-text">
              N
            </span>
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-5">
        <div className="flex w-full max-w-lg grid-span-1 min-h-[75px] max-h-[75px] gap-5">
          <div className="flex items-center justify-center h-full min-w-[75px] min-h-[75px]  border-2 rounded-full border-spotify-text">
            <div className="w-6 h-6 -rotate-45 bg-spotify-text"></div>
          </div>
          <div className="flex items-center justify-start flex-1 h-full px-5 border-2 rounded-full border-spotify-text bg-spotify-green">
            <AiFillPlayCircle size={36} className="text-spotify-text" />
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
              <span className="w-[2px] h-[20px] block bg-spotify-text"></span>
            </div>
          </div>
          <div className="relative flex flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-spotify-text h-[75px] w-[75px] box-border">
            <img
              src={randomArtist[1]?.mainArtistInfo?.image}
              className="box-border object-cover bg-black z-10 w-[71px] h-[71px] rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-5">
        <div className="flex w-full max-w-lg grid-span-1 min-h-[75px] max-h-[75px] gap-5">
          <div className="flex-1 border-2 rounded-full border-spotify-text min-w-[275px] flex items-center justify-center px-5">
            <span className="block w-full first-letter:text-[1.05rem] font-semibold leading-normal tracking-tight text-center text-spotify-text">
              F
            </span>
            <span className="block w-full first-letter:text-[1.05rem] font-semibold leading-normal tracking-tight text-center text-spotify-text">
              O
            </span>
            <span className="block w-full first-letter:text-[1.05rem] font-semibold leading-normal tracking-tight text-center text-spotify-text">
              R
            </span>
            <span className="block w-full first-letter:text-[1.05rem] font-semibold leading-normal tracking-tight text-center text-spotify-text"></span>
            <span className="block w-full first-letter:text-[1.05rem] font-semibold leading-normal tracking-tight text-center text-spotify-text">
              F
            </span>
            <span className="block w-full first-letter:text-[1.05rem] font-semibold leading-normal tracking-tight text-center text-spotify-text">
              R
            </span>
            <span className="block w-full first-letter:text-[1.05rem] font-semibold leading-normal tracking-tight text-center text-spotify-text">
              E
            </span>
            <span className="block w-full first-letter:text-[1.05rem] font-semibold leading-normal tracking-tight text-center  text-spotify-text">
              E
            </span>
          </div>
          <div className="flex items-center justify-center overflow-hidden rounded-full  h-[75px] w-[75px] bg-spotify-text/20">
            <VscArrowRight size={32} className="-rotate-45 text-spotify-text" />
          </div>
        </div>
      </div>
    </div>
  );
}
