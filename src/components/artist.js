import { useEffect, useState } from "react";
import { fetchRandomArtist } from "../api/actions";
import { FaSpotify } from "react-icons/fa";

export default function Artist() {
  const [randomArtist, setRandomArtist] = useState();

  useEffect(() => {
    fetchRandomArtist(setRandomArtist);
  }, []);

  // console.log(randomArtist);
  if (!randomArtist) return null;

  console.log(randomArtist);
  return (
    <div className="flex flex-col pl-8 ml-8">
      <div className="relative h-[440px] w-[350px] rounded-lg block overflow-hidden after:absolute after:content-[''] after:h-full after:w-full after:bg-black/60 after:top-0">
        <div className="relative flex flex-col w-full h-full p-5">
          <div className="flex flex-1">
            <span className="relative z-10 block text-xl text-white">
              <FaSpotify />
            </span>
          </div>
          <div className="flex flex-col items-start justify-end flex-1">
            <h2 className="relative z-10 text-2xl font-medium leading-relaxed text-spotify-bg">
              {randomArtist.name}
            </h2>
            <ul className="relative flex gap-2 z-10 font-medium tracking-[3px] text-[10px] uppercase text-spotify-bg">
              {randomArtist.genres
                .slice(0, 3)
                .map((genre, index) => (
                  <li key={index}>
                    {randomArtist.genres[
                      randomArtist.genres.length - 1
                    ] === genre ? (
                      genre
                    ) : (
                      <>genre /</>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <img
          src={`${randomArtist?.images[0]?.url}`}
          className="absolute top-0 left-0 object-cover object-center w-full h-full "
        />
      </div>
    </div>
  );
}
