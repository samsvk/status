import Artist from "./artist";
import { FiArrowUpRight } from "react-icons/fi";
import { FaSpotify } from "react-icons/fa";
export default function Info() {
  return (
    <>
      <div className="relative z-20 w-full h-full pt-20">
        <div className="relative z-20 flex flex-col items-start gap-10">
          <h1 className="text-[4.5rem] font-semibold tracking-tight z-[-10] text-left text-spotify-text leading-tight mix-blend-difference">
            Share & Create.
            <br /> The processor for
            <br />
            playlist for everyone.
          </h1>
        </div>
        <div className="relative grid w-full grid-cols-5 gap-10 mt-14">
          <div className="relative w-full h-full col-span-1 duration-200 hover:drop-shadow-md hover:cursor-pointer">
            <div className="absolute flex items-center gap-3 justify-center max-h-[100px] bottom-0 w-full h-full  overflow-hidden text-center">
              <div className="relative flex items-center justify-center w-full h-full gap-3 px-8 bg-spotify-text rounded-3xl">
                <div className="relative">
                  <span className="absolute block w-6 h-6 rounded-full top-1 left-0.5 bg-spotify-text" />
                  <FaSpotify className="relative text-3xl text-spotify-bg" />
                </div>
                <p className="w-full text-[17px] font-normal leading-snug tracking-snug text-spotify-bg whitespace-nowrap">
                  Connect with Spotify
                </p>
                <button className="p-1.5 duration-300 rounded-full text-spotify-bg hover:rotate-45 will-change-transform">
                  <FiArrowUpRight className="text-xl text-spotify-bg" />
                </button>
              </div>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full min-h-[250px]">
            <div className="absolute min-h-[600px] bottom-0 w-full bg-spotify-text/20 h-full rounded-[4rem] overflow-hidden">
              {" "}
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full min-h-[250px]">
            <div className="absolute min-h-[445px] bottom-0 w-full bg-spotify-text/20 h-full rounded-[4rem] overflow-hidden">
              {" "}
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full min-h-[250px]">
            <div className="absolute min-h-[570px] bottom-0 w-full h-full overflow-hidden">
              <div className="absolute top-0 w-full h-[250px]">
                <p className="w-full max-w-lg text-[17px] font-medium leading-snug tracking-snug text-spotify-text">
                  Process your playlists, create, and share your music taste with
                  friends, and build a playlist that fits all.
                </p>
              </div>
              <div className="absolute bottom-0 bg-spotify-text/20 w-full h-[300px]  rounded-[4rem] overflow-hidden"></div>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full min-h-[250px]">
            <div className="absolute min-h-[545px] bottom-0 w-full h-full rounded-[4rem] overflow-hidden bg-spotify-text/20">
              <Artist />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
