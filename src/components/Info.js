import { FaSpotify } from "react-icons/fa";
export default function Info() {
  return (
    <>
      <div className="relative z-20 w-full h-full mt-16">
        <div className="relative z-20 flex flex-col items-start gap-10">
          <h1 className="text-7xl font-medium tracking-tighter z-[-10] text-left text-spotify-text leading-snug">
            Share & Create.
            <br /> The playlist processor
            <br />
            that satisfies everyone.
          </h1>
          {/* <button className="mt-5 relative flex items-center gap-4 px-10 py-4 text-[17px] font-normal leading-relaxed tracking-tight duration-200  bg-spotify-text text-spotify-bg hover:shadow-lg after:absolute after:content-[''] after:w-full after:h-full after:bottom-2 after:left-2 after:-z-10 after:bg-spotify-bg after:border-2 after:border-spotify-text hover:bg-spotify-green">
          Connect with Spotify
          <FaSpotify />
        </button> */}
        </div>
        <div className="relative grid w-full grid-cols-5 mt-24 gap-14">
          <div className="relative col-span-1 w-full h-full min-h-[250px]">
            <div className="absolute min-h-[300px] bottom-0 w-full bg-spotify-green/50 h-full rounded-[4rem] overflow-hidden">
              12312312312313123
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full min-h-[250px]">
            <div className="absolute min-h-[650px] bottom-0 w-full bg-spotify-offset/50 h-full rounded-[4rem] overflow-hidden">
              12312312312313123
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full min-h-[250px]">
            <div className="absolute min-h-[500px] bottom-0 w-full bg-spotify-text/10 h-full rounded-[4rem] overflow-hidden"></div>
          </div>
          <div className="relative col-span-1 w-full h-full min-h-[250px]">
            <div className="absolute min-h-[600px] bottom-0 w-full h-fulloverflow-hidden">
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
              <div className="absolute bottom-0 bg-indigo-500/20 w-full h-[250px]  rounded-[4rem]"></div>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full min-h-[250px]">
            <div className="absolute min-h-[525px] bottom-0 w-full bg-spotify-green h-full rounded-[4rem] overflow-hidden">
              12312312312313123
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
