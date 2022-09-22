import Artist from "./artist";
import { FiArrowUpRight } from "react-icons/fi";
import { FaSpotify } from "react-icons/fa";
export default function Info() {
  return (
    <>
      <div className="relative z-20 w-full h-full pb-10 mt-48">
        <div className="relative z-20 flex flex-col items-start gap-10">
          <h1 className="text-8xl font-semibold tracking-tight z-[-10] text-left text-spotify-text leading-tight mix-blend-difference">
            Shuffle playlists, <br />
            create and share.
            <br />
          </h1>
          <p className="max-w-md text-2xl leading-normal tracking-normal">
            Process your playlists, create, and share your music taste with friends,
            and build a playlist that fits all.
          </p>
          <button className="px-10 py-5 border-2 w-max border-spotify-text">
            Connect with Spotify
          </button>
        </div>
      </div>
    </>
  );
}
