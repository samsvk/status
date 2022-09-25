import React from "react";

export default function Grid() {
  return (
    <div className="flex flex-col h-full min-h-screen col-span-2">
      <div className="grid h-full grid-cols-3 grid-rows-4 p-10 my-auto">
        <span className="block col-span-1 bg-[#f9ea65] rounded-tr-[7rem] h-full w-full"></span>
        <span className="block col-span-1 bg-[#e2b7e0] rounded-br-[7rem] h-full w-full"></span>
        <span className="col-span-1 bg-spotify-text rounded-tl-[7rem] h-full w-full flex">
          <p className="block w-full text-[17px] font-normal leading-snug tracking-snug text-spotify-bg mt-auto relative p-3">
            Our service is free
          </p>
        </span>
        <span className="block col-span-2 bg-spotify-offset rounded-tl-[7rem] rounded-br-[7rem] h-full w-full"></span>
        <span className="block col-span-1 bg-[#f9ea65]  rounded-bl-[7rem] h-full w-full"></span>
        <span className="flex col-span-1 bg-spotify-text rounded-tl-[7rem] h-full w-full p-3 flex-col">
          <p className="block w-full text-[17px] font-normal mb-auto leading-snug tracking-snug text-spotify-bg relative text-right">
            Songs
          </p>
          <p className="relative block w-full mt-auto text-4xl font-normal leading-snug text-right justify-self-end tracking-snug text-spotify-bg">
            70.1m
          </p>
        </span>
        <span className="block w-full h-full col-span-1 rounded-full bg-[#e2b7e0]"></span>
        <span className="block col-span-1 bg-spotify-offset rounded-tl-[7rem] h-full w-full"></span>
        <span className="block w-full h-full col-span-1 bg-spotify-offset"></span>
        <span className="flex col-span-1 bg-[#f9ea65]  rounded-tl-[7rem] h-full w-full p-3 flex-col">
          <p className="block w-full text-[17px] font-medium mb-auto leading-snug tracking-snug text-spotify-text relative text-right">
            Artists
          </p>
          <p className="relative block w-full mt-auto text-4xl font-medium leading-snug text-right justify-self-end tracking-snug text-spotify-text">
            8.2m
          </p>
        </span>
        <span className="block col-span-1 bg-[#e2b7e0] rounded-bl-[7rem] rounded-tr-[7rem]  h-full w-full"></span>
      </div>
    </div>
  );
}
