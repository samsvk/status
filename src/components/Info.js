import { FaSpotify } from "react-icons/fa";
export default function Info() {
  return (
    <div className="mt-32">
      <div className="flex flex-col items-start max-w-2xl gap-10">
        <h1 className="text-7xl font-medium tracking-tighter z-[-10] text-left text-spotify-text leading-tight">
          Share & Create.
          <br /> A playlist processor <br />
          that satisifies all users.
        </h1>
        <p className="w-full max-w-md text-xl font-normal leading-tight tracking-tight text-spotify-text/50">
          Discover musicians from around the world. Boost your mood with a fresh
          playlist that fits all.
        </p>

        <button className="mt-5 relative flex items-center gap-4 px-10 py-2.5 text-[17px] font-normal leading-relaxed tracking-tight duration-200  bg-spotify-text text-spotify-bg hover:shadow-lg after:absolute after:content-[''] after:w-full after:h-full after:bottom-2 after:left-2 after:-z-10 after:bg-spotify-bg after:border-2 after:border-spotify-text hover:bg-spotify-green">
          Connect with Spotify
          <FaSpotify />
        </button>
      </div>
    </div>
  );
}
