import Artist from "./artist";
import { FiArrowUpRight } from "react-icons/fi";
import { FaSpotify } from "react-icons/fa";
export default function Info() {
  return (
    <>
      <div className="relative z-20 w-full h-full pt-20">
        <div className="relative z-20 flex flex-col items-start gap-10">
          <h1 className="text-[4.5rem] font-semibold tracking-tight z-[-10] text-left text-spotify-text/95 leading-tight mix-blend-difference">
            Share & Create.
            <br /> The processor for
            <br />
            playlist for everyone.
          </h1>
        </div>
        <div className="relative grid w-full grid-cols-5 gap-5 mt-14">
          <div className="relative w-full h-full col-span-1 duration-200 hover:drop-shadow-md hover:cursor-pointer">
            <div className="absolute bottom-0 flex items-center justify-center w-full gap-3 overflow-hidden text-center max-h-max">
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
            <div className="absolute min-h-[600px] bottom-0 w-full bg-spotify-offset h-full rounded-2xl overflow-hidden">
              {" "}
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full min-h-[250px]">
            <div className="absolute min-h-[445px] bottom-0 w-full bg-spotify-offset h-full rounded-2xl overflow-hidden">
              {" "}
            </div>
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
        </div>
      </div>
    </>
  );
}
