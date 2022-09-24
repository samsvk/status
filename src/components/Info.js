import { useState } from "react";
import Artist from "./artist";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { FaSpotify } from "react-icons/fa";
import { BiShuffle } from "react-icons/bi";
import { RiYoutubeFill } from "react-icons/ri";

export default function Info() {
  return (
    <>
      <div className="grid grid-cols-5 gap-10">
        <div className="relative col-span-3 z-20 grid w-full h-full max-w-[1100px] grid-cols-5 gap-10 pt-20">
          <h1 className="block text-[6.5rem] font-semibold tracking-tight text-left text-spotify-text/95 leading-tight col-span-5 z-20">
            Shuffle your songs
            <br /> and jam together.
          </h1>

          <div className="flex flex-col items-start h-full col-span-2 mt-13 gap-14">
            <p className="w-full max-w-lg text-[18px] font-medium leading-snug tracking-snug text-spotify-text">
              Good music, good mood. The free open-source playlist processor. working
              best with spoitfy
            </p>
            <button className="px-16 py-4 bg-spotify-text text-spotify-bg">
              Connect with Spotify
            </button>
            <div className="">
              <p className="text-sm font-medium leading-snug whitespace-nowrap tracking-snug text-spotify-text/50">
                Working best with
              </p>
              <ul className="flex items-center gap-5 mt-3">
                <li className="flex items-center gap-2 mb-auto text-[18px] font-medium leading-snug whitespace-nowrap tracking-snug text-spotify-text">
                  <FaSpotify className="my-auto text-2xl" />
                  Spotify
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="relative flex items-end justify-end col-span-2 bg-[#cbb9ef] h-max rounded-[3rem]">
            <div className="relative z-10 bg-white rounded-full h-52 w-52"></div>
            <div className="absolute rounded-full h-52 w-52 bg-spotify-text right-20"></div>
          </div> */}
        </div>
        {/* <Artist />
         */}
        <div className="grid w-full grid-cols-2 col-span-2 gap-10 mt-24 h-max">
          <div className="col-span-1 ">
            <div className="relative col-span-1 -bottom-0">
              <div className="absolute z-10 flex flex-col items-center justify-center bg-white rounded-full h-52 w-52 left-24">
                <h1 className="z-20 block col-span-5 text-5xl font-semibold leading-tight tracking-tight text-left text-spotify-text/95">
                  70.1M
                </h1>
                <p className="mt-1.5 w-full text-[18px]  text-center font-medium leading-snug tracking-snug text-spotify-text">
                  Songs
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-full left-20 h-52 w-52 bg-spotify-text"></div>
            </div>
          </div>
          <div className="col-span-1 my-auto ">
            <p className="w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-text">
              Explore new music, deepen your passion and get lost in creativity. What
              you'll find from your friends might suprrise you.
            </p>
            <span className="flex items-center mt-5 text-sm font-medium leading-snug whitespace-nowrap tracking-snug text-spotify-text/50">
              See More <FiArrowRight className="ml-4 text-md" />
            </span>
          </div>
          <div className="relative items-center col-span-1 mt-24 right-20 opacity-1 jusity-center">
            <p className="w-full text-[18px] font-medium leading-snug tracking-snug text-spotify-text">
              Intersted in sharing your music with other people? Join other
              music-heads by joining our Discord community.
            </p>
            <span className="flex items-center mt-5 text-sm font-medium leading-snug whitespace-nowrap tracking-snug text-spotify-text/50">
              Join <FiArrowRight className="ml-4 -rotate-45 text-md" />
            </span>
          </div>
          <div className="col-span-1 mt-20 rounded-[4rem] min-h-[375px] w-3/4  bg-spotify-text/10">
            <Artist />
          </div>
        </div>
      </div>
    </>
  );
}

{
  {
    /* <div className="flex items-center gap-5 mt-24">
    <h1 className="z-20 col-span-3 text-5xl font-bold leading-tight tracking-tight text-left text-spotify-text/95">
      70.1M+
    </h1>
    <span className="block h-[1px] w-full bg-spotify-text/20"></span>
    <p className="text-sm font-medium leading-snug whitesvpace-nowrap tracking-snug text-spotify-text/52">
      Songs for <br />
      Selection
    </p>
  </div> */
  }
  /* <div className="relative grid w-full min-h-[550px] grid-cols-5 gap-5 bg-orange-500 ">
  <div className="relative w-full h-full col-span-1 duration-200 hover:drop-shadow-md hover:cursor-pointer ">
    <div className="flex items-center content-center justify-center w-full gap-3 overflow-hidden text-center">
      <div className="relative flex items-center justify-center w-full h-full gap-5 py-5 bg-spotify-offset rounded-2xl">
        <div className="relative">
          <span className="absolute block w-5 h-5 rounded-full top-1 left-0.5 bg-spotify-text" />
          <FaSpotify className="relative text-2xl text-spotify-green" />
        </div>
        <p className="text-base font-medium tracking-normal text-spotify-text">
          Connect your Spotify
        </p>
      </div>
    </div>
  </div>
  <div className="relative col-span-1 w-full h-full min-h-[250px]">
    <div className="absolute min-h-[520px] bottom-0 w-full bg-spotify-offset h-full rounded-2xl overflow-hidden"></div>
  </div>
  <div className="relative col-span-1 w-full h-full min-h-[250px]">
    <div className="absolute min-h-[445px] bottom-0 w-full bg-spotify-offset h-full rounded-2xl overflow-hidden"></div>
  </div>
  <div className="relative col-span-1 w-full h-full min-h-[250px]">
    <div className="absolute min-h-[570px] bottom-0 w-full h-full overflow-hidden">
      <div className="absolute top-0 w-full h-[250px]">
        <p className="w-full max-w-lg text-[17px] font-normal  leading-snug tracking-snug text-spotify-text/40">
          Process your playlists, create, and share your music taste with
          friends, and build a playlist that fits all.
        </p>
      </div>
      <div className="absolute bottom-0 bg-spotify-offset w-full h-[300px]  rounded-2xl overflow-hidden"></div>
    </div>
  </div>
  <div className="relative col-span-1 w-full h-full min-h-[250px]">
    <div className="absolute min-h-[545px] bottom-0 w-full h-full rounded-2xl overflow-hidden bg-spotify-text/20">
      <Artist />
    </div>
  </div>
</div> */
}
{
  /* <div className="col-span-2">
  <p className="w-full  text-[18px] font-medium leading-snug tracking-snug text-spotify-text">
    Our algorithm is systematically processes playlists creates, and shares users
    favorite songs from each playlist and relatively creates a playlist that
    represents each of those genres appropriately.
  </p>
</div>; */
}
