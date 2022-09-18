import { FaSpotify } from "react-icons/fa";
import Artist from "./artist";
export default function Info() {
  return (
    <>
      <div className="relative z-20 w-full h-full mt-12">
        <div className="relative z-20 flex flex-col items-start gap-10">
          <h1 className="text-[5.3rem] font-medium tracking-tighter z-[-10] text-left text-spotify-text leading-tight">
            Share & Create.
            <br /> The processor for
            <br />
            playlist for everyone.
          </h1>
          {/* <button className="mt-5 relative flex items-center gap-4 px-10 py-4 text-[17px] font-normal leading-relaxed tracking-tight duration-200  bg-spotify-text text-spotify-bg hover:shadow-lg after:absolute after:content-[''] after:w-full after:h-full after:bottom-2 after:left-2 after:-z-10 after:bg-spotify-bg after:border-2 after:border-spotify-text hover:bg-spotify-green">
          Connect with Spotify
          <FaSpotify />
        </button> */}
        </div>
        <div className="relative grid w-full grid-cols-5 mt-12 gap-14">
          <div className="relative col-span-1 w-full h-full min-h-[250px]">
            <div className="absolute min-h-[250px] bottom-0 w-full bg-spotify-green/50 h-full rounded-[4rem] overflow-hidden flex items-center justify-center">
              Connect with Spotify
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full min-h-[250px]">
            <div className="absolute min-h-[635px] bottom-0 w-full bg-spotify-offset/50 h-full rounded-[4rem] overflow-hidden"></div>
          </div>
          <div className="relative col-span-1 w-full h-full min-h-[250px]">
            <div className="absolute min-h-[485px] bottom-0 w-full bg-spotify-text/10 h-full rounded-[4rem] overflow-hidden"></div>
          </div>
          <div className="relative col-span-1 w-full h-full min-h-[250px]">
            <div className="absolute min-h-[570px] bottom-0 w-full h-fulloverflow-hidden">
              <div className="absolute top-0 w-full h-[250px]">
                {/* <p className="text-[14px] font-medium text-spotify-text tracking-normal ">
                  Process playlists anywhere with our simplistic 3 step system built
                  with a user centered design.
                </p> */}
                <p className="w-full max-w-lg text-2xl font-normal leading-snug tracking-tight text-spotify-text">
                  Process your playlists, create, and share your music taste with
                  friends, and build a playlist that fits all.
                </p>
              </div>
              <div className="absolute bottom-0 bg-indigo-500/20 w-full h-[300px]  rounded-[4rem]"></div>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full min-h-[250px]">
            <div className="absolute min-h-[525px] bottom-0 w-full h-full rounded-[4rem] overflow-hidden">
              <Artist />
            </div>
          </div>
        </div>

        {/*connect, create, profit */}
        <div className="relative grid w-full grid-cols-5 my-12 gap-14">
          <div className="relative w-full h-full col-span-1 p-2">
            <h1 className="relative z-10 text-lg font-semibold leading-none tracking-tight text-spotify-text">
              Step 1: Connect
            </h1>
            <span className="w-full h-[1px]  bg-spotify-text/20 block my-4 rotate-[2deg]" />
            <p className="text-[14px] font-medium text-spotify-text tracking-normal ">
              Connect your spotify to our service, and we'll start working our magic.
            </p>
          </div>
          <div className="relative w-full h-full col-span-1 p-2">
            <h1 className="relative z-10 text-lg font-semibold leading-none tracking-tight text-spotify-text">
              Step 2: Create
            </h1>
            <span className="w-full h-[1px]  bg-spotify-text/20 block my-4 rotate-[-2deg]" />
            <p className="text-[14px] font-medium text-spotify-text tracking-normal ">
              Create your lobby, invite your friends, pick your favorites and create
              a playlist.
            </p>
          </div>
          <div className="relative w-full h-full col-span-1 p-2">
            <h1 className="relative z-10 text-lg font-semibold leading-none tracking-tight text-spotify-text">
              Step 3: Profit
            </h1>
            <span className="w-full h-[1px]  bg-spotify-text/20 block my-4 rotate-[2deg]" />
            <p className="text-[14px] font-medium text-spotify-text tracking-normal ">
              It's time to vibe, add the shuffled playlist to everyones spotify
              account.
            </p>
          </div>
          <div className="relative w-full h-full col-span-2 bg-spotify-text rounded-3xl"></div>
        </div>
      </div>
    </>
  );
}
