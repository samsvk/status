import Artist from "./artist";
import { FiArrowUpRight } from "react-icons/fi";
import { FaSpotify } from "react-icons/fa";
export default function Info() {
  return (
    <>
      <div className="relative z-20 w-full h-full mt-14">
        <div className="relative z-20 flex flex-col items-start gap-10">
          <h1 className="text-[4.5rem] font-semibold tracking-tight z-[-10] text-left text-spotify-text leading-tight mix-blend-difference">
            Share & Create.
            <br /> The processor for
            <br />
            playlist for everyone.
          </h1>
        </div>
        <div className="relative grid w-full grid-cols-5 gap-10 mt-14">
          <div className="relative w-full h-full col-span-1 duration-200 opacity-0 hover:drop-shadow-md hover:cursor-pointer">
            <div className="absolute flex items-center gap-3 justify-center max-h-[100px] bottom-0 w-full bg-spotify-green/50 h-full rounded-[3rem] overflow-hidden px-8 text-center">
              <FaSpotify className="text-3xl text-spotify-bg" />
              <span className="block w-full text-xl font-medium leading-snug tracking-normal text-spotify-bg">
                Connect with Spotify
              </span>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full min-h-[250px]">
            <div className="absolute min-h-[600px] bottom-0 w-full bg-spotify-offset/50 h-full rounded-[4rem] overflow-hidden">
              {" "}
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full min-h-[250px]">
            <div className="absolute min-h-[445px] bottom-0 w-full bg-spotify-text/10 h-full rounded-[4rem] overflow-hidden">
              {" "}
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full min-h-[250px]">
            <div className="absolute min-h-[570px] bottom-0 w-full h-full overflow-hidden">
              <div className="absolute top-0 w-full h-[250px]">
                <p className="w-full max-w-lg text-xl font-medium leading-snug tracking-normal text-spotify-text">
                  Process your playlists, create, and share your music taste with
                  friends, and build a playlist that fits all.
                </p>
              </div>
              <div className="absolute bottom-0 bg-indigo-500/20 w-full h-[300px]  rounded-[4rem] overflow-hidden"></div>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full min-h-[250px]">
            <div className="absolute min-h-[545px] bottom-0 w-full h-full rounded-[4rem] overflow-hidden bg-spotify-text/10">
              <Artist />
            </div>
          </div>
        </div>

        {/*connect, create, profit */}
        <div className="relative grid w-full grid-cols-5 my-10 gap-14">
          <div className="relative w-full h-full col-span-1 p-2">
            <h1 className="w-full text-xl font-medium leading-snug tracking-normal text-spotify-text">
              Connect
            </h1>
            <span className="w-full h-[1px]  bg-spotify-text/20 block my-4 rotate-[2deg]" />
            <p className="w-full text-[15px] font-medium leading-snug tracking-normal text-spotify-text">
              Connect your spotify to our service, and we'll start working our magic.
            </p>
          </div>
          <div className="relative w-full h-full col-span-1 p-2">
            <h1 className="w-full text-xl font-medium leading-snug tracking-normal text-spotify-text">
              Create
            </h1>
            <span className="w-full h-[1px]  bg-spotify-text/20 block my-4 rotate-[-2deg]" />
            <p className="w-full text-[15px] font-medium leading-snug tracking-normal text-spotify-text">
              Create your lobby, invite your friends, pick your favorites and create
              a playlist.
            </p>
          </div>
          <div className="relative w-full h-full col-span-1 p-2">
            <h1 className="w-full text-xl font-medium leading-snug tracking-normal text-spotify-text">
              Listen
            </h1>
            <span className="w-full h-[1px]  bg-spotify-text/20 block my-4 rotate-[2deg]" />
            <p className="w-full text-[15px] font-medium leading-snug tracking-normal text-spotify-text">
              It's time to vibe, add the shuffled playlist to everyones spotify
              account.
            </p>
          </div>
          <div className="relative w-full h-full col-span-2 bg-spotify-green rounded-[3rem] px-8 gap-5 flex items-center justify-center">
            <FaSpotify className="text-3xl text-spotify-bg" />
            <p className="w-full text-[15px] font-normal leading-snug tracking-normal text-spotify-bg">
              Connect your spotify with Shuff.le and begin shufflin' your playlists
              with your friends! Our algorithm is great we promise.
            </p>
            <button className="p-5 duration-300 rounded-full bg-spotify-bg hover:rotate-45 will-change-transform">
              <FiArrowUpRight className="text-2xl text-spotify-green" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
