import React from "react";

export default function Grid({ randomArtist }) {
  console.log(randomArtist);
  return (
    <div className="flex flex-col h-full min-h-screen col-span-2">
      <div className="grid h-full grid-cols-3 grid-rows-4 p-10 my-auto">
        <span className="block col-span-1 bg-spotify-green rounded-tr-[7rem] h-full w-full"></span>
        <span className="block col-span-1 bg-spotify-text/30 rounded-br-[7rem] h-full w-full"></span>
        <span className="col-span-1 bg-spotify-text rounded-tl-[7rem] h-full w-full flex">
          <p className="block w-full text-[17px] font-normal leading-snug tracking-snug text-spotify-bg mt-auto relative p-3">
            Our service is free
          </p>
        </span>
        <span className="block col-span-2 bg-transparent rounded-tl-[7rem] rounded-br-[7rem] h-full w-full relative overflow-hidden">
          <img
            src={randomArtist[0]?.image}
            className="absolute top-0 bottom-0 left-0 right-0 object-cover"
          />
        </span>
        <span className="block col-span-1 bg-spotify-green  rounded-bl-[7rem] h-full w-full"></span>
        <span className="flex col-span-1 bg-spotify-text rounded-tl-[7rem] h-full w-full p-5 flex-col">
          <p className="block w-full text-[17px] font-normal mb-auto leading-snug tracking-snug text-spotify-bg relative text-right">
            Songs
          </p>
          <p className="relative block w-full mt-auto text-4xl font-normal leading-snug text-right justify-self-end tracking-snug text-spotify-bg">
            70.1m
          </p>
        </span>
        <span className="block w-full h-full col-span-1 rounded-full bg-spotify-text/30"></span>
        <span className="relative block w-full h-full col-span-1 overflow-hidden bg-transparent rounded-tl-[7rem]">
          <img
            src={randomArtist[1]?.image}
            className="absolute top-0 bottom-0 left-0 right-0 object-cover"
          />
        </span>
        <span className="relative block w-full h-full col-span-1 overflow-hidden bg-transparent">
          <img
            src={randomArtist[2]?.image}
            className="absolute top-0 bottom-0 left-0 right-0 object-cover"
          />
        </span>
        <span className="flex flex-col w-full h-full col-span-1 p-5 bg-spotify-green">
          <p className="block w-full text-[17px] font-medium mb-auto leading-snug tracking-snug text-spotify-text relative text-left">
            Artists
          </p>
          <p className="relative block w-full mt-auto text-4xl font-medium leading-snug text-left justify-self-end tracking-snug text-spotify-text">
            8.2m
          </p>
        </span>
        <span className="block col-span-1 bg-spotify-text/30 rounded-bl-[7rem] rounded-tr-[7rem]  h-full w-full"></span>
      </div>
    </div>
  );
}
