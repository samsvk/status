import { useEffect, useState } from "react";
import { fetchRandomArtist } from "../api/actions";
import { FaSpotify } from "react-icons/fa";

export default function Artist() {
  const [randomArtist, setRandomArtist] = useState();

  useEffect(() => {
    fetchRandomArtist(setRandomArtist);
  }, []);
  if (!randomArtist) return null;

  console.log(randomArtist.mainArtistInfo.genres);
  return (
    <div className="flex flex-col pl-8 ml-8">
      <div
        className="relative h-[440px] w-[350px] rounded-lg block after:absolute after:content-[''] after:h-full after:w-full after:bg-black/60 after:rounded-lg after:top-0
      
      before:rounded-lg before:absolute before:content-[''] before:h-full before:w-full before:bg-spotify-bg before:bottom-2 before:left-2 before:border-2 before:border-spotify-text
      "
      >
        <div className="relative flex flex-col w-full h-full p-5 overflow-hidden">
          <div className="flex flex-1">
            <span className="relative z-10 block text-xl text-spotify-bg">
              <FaSpotify />
            </span>
          </div>
          <div className="flex flex-col items-start justify-end flex-1">
            <h2 className="relative z-10 text-2xl font-medium leading-relaxed text-spotify-bg">
              {randomArtist.mainArtistInfo.name}
            </h2>
            <ul className="relative flex gap-2 z-10 font-medium tracking-[3px] text-[10px] uppercase text-spotify-bg">
              {randomArtist?.mainArtistInfo?.genres
                .slice(0, 3)
                .map((genre, index) => (
                  <li key={index}>
                    {randomArtist.mainArtistInfo.genres[
                      randomArtist.mainArtistInfo.genres.length -
                        1
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
          src={`${randomArtist.mainArtistInfo.image}`}
          className="absolute top-0 left-0 object-cover object-center w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
}
