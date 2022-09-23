import Artist from "./artist";
import { FiArrowUpRight } from "react-icons/fi";
import { FaSpotify } from "react-icons/fa";
import { BiShuffle } from "react-icons/bi";

export default function Info() {
  return (
    <>
      <div className="relative z-20 w-full h-full pt-20">
        <div className="grid grid-cols-5 gap-10">
          <h1 className="text-[6.85rem] font-semibold tracking-tight text-left text-spotify-text/95 leading-tight col-span-3 z-20">
            Shuffle your playlist
            <br /> and jam together.
          </h1>
          <div className="flex col-span-2 gap-20">
            <div className="flex-1 my-auto max-w-[250px] w-full">
              <BiShuffle className="m-auto -rotate-45 text-7xl text-spotify-text/95 willchange-transform" />
            </div>
            <div className="flex flex-col w-full gap-5">
              <div className="flex-1 w-full bg-spotify-green ">1</div>
              <div className="flex-1 w-full bg-spotify-green ">2</div>
            </div>
          </div>
          <div className="min-h-[400px] col-span-3 grid grid-cols-3 gap-10">
            <div className="flex items-center h-full col-span-1">
              <p className="w-full max-w-lg text-[18px] font-medium leading-snug tracking-snug text-spotify-text">
                Process your playlists, create, and share your music taste with
                friends, and build a playlist that fits all.
              </p>
            </div>
            <div className="relative h-full col-span-2">
              {/* <div className="relative w-full h-full col-span-1">
                <div className="absolute min-h-[438px] bottom-0 w-full bg-spotify-offset h-full overflow-hidden">
                  <Artist />
                </div>
              </div> */}
            </div>
          </div>

          <div className="col-span-2 bg-black"></div>
        </div>
        {/* <div className="relative grid w-full min-h-[550px] grid-cols-5 gap-5 bg-orange-500 ">
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
            <div className="absolute min-h-[600px] bottom-0 w-full bg-spotify-offset h-full rounded-2xl overflow-hidden"></div>
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
        </div> */}
      </div>
    </>
  );
}
