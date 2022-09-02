import { useEffect, useState } from "react";
import { fetchRandomArtist } from "../api/actions";
import { FaSpotify } from "react-icons/fa";
import useRender from "../hooks/useRender";
import { motion } from "framer-motion";
import { container, child } from "../global";

export default function Artist() {
  const [randomArtist, setRandomArtist] = useState();

  useEffect(() => {
    fetchRandomArtist(setRandomArtist);
    const interval = setInterval(() => {
      fetchRandomArtist(setRandomArtist);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  if (!randomArtist) return null;

  return (
    <motion.div
      variants={container}
      initial={"hidden"}
      animate={randomArtist && "visible"}
      className="flex flex-col pl-8 ml-8"
    >
      <motion.div
        variants={child}
        className="relative h-[440px] w-[350px] rounded-lg block after:absolute after:content-[''] after:h-full after:w-full after:bg-black/60 after:rounded-lg after:top-0 before:rounded-lg before:absolute before:content-[''] before:h-full before:w-full before:bg-spotify-bg before:bottom-2 before:left-2 before:border-2 before:border-spotify-text"
      >
        {/* start */}
        <motion.div
          variants={container}
          initial={"hidden"}
          animate={"visible"}
          className="absolute z-10 flex flex-col items-center justify-center w-full h-full m-auto top-[50%] translate-y-[-50%] translate-x-1/2"
        >
          <motion.div
            variants={child}
            custom={{ num: 65 }}
            className="mr-7 block rounded-lg max-w-[154px] relative z-50 before:rounded-lg before:absolute before:content-[''] before:h-full before:w-full before:bg-spotify-bg before:top-[-0.25rem] before:right-[-0.25rem] before:border-2 before:border-spotify-text before:-z-20 shadow-lg"
          >
            <div className="block overflow-hidden border-2 rounded-lg border-spotify-text">
              <div className="h-[144px] w-[154px] overflow-hidden relative">
                <div className="absolute z-20 w-full h-full bg-black/30" />
                <img
                  src={randomArtist.image}
                  className="absolute top-0 left-0 block object-cover object-center w-full h-full overflow-hidden"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={child}
            custom={{ num: 65 }}
            className="block rounded-lg max-w-[154px] min-w-[154px] w-full relative z-50 
          before:rounded-lg before:absolute before:content-[''] before:h-full before:w-full before:bg-spotify-green before:top-1 before:left-[-0.25rem] before:border-2 before:border-spotify-text before:-z-20 shadow-lg ml-12 mt-1.5"
          >
            <div className="block overflow-hidden border-2 rounded-lg border-spotify-text">
              <aside className="flex flex-col px-1.5 py-1.5 rounded-b-lg bg-spotify-bg">
                <h5 className="font-normal text-[14px] tracking-tight text-spotify-text text-neutral-700/80 underline">
                  Recent Track
                </h5>
                <div className="relative z-10 mt-0.5 mb-0.5 overflow-hidden text-base font-medium leading-none tracking-tight text-spotify-text whitespace-nowrap text-ellipsis ">
                  {randomArtist.name}
                </div>
              </aside>
            </div>
          </motion.div>
          <motion.div
            variants={child}
            custom={{ num: -65 }}
            className="block rounded-lg max-w-[154px] min-w-[154px]  w-full relative z-50 
          before:rounded-lg before:absolute before:content-[''] before:h-full before:w-full before:bg-spotify-offset before:top-1 before:left-1 before:border-2 before:border-spotify-text before:-z-20 shadow-lg mr-12  mt-2
          "
          >
            <div className="block overflow-hidden border-2 rounded-lg border-spotify-text">
              <aside className="flex flex-col px-1.5 py-1.5 rounded-b-lg bg-spotify-bg">
                <h5 className="font-normal text-[14px] tracking-tight text-spotify-text text-neutral-700/80 underline">
                  Popularity
                </h5>
                <div className="relative z-10 mt-0.5 mb-0.5 overflow-hidden text-base font-medium leading-none tracking-tight text-spotify-text whitespace-nowrap text-ellipsis ">
                  {randomArtist.name}
                </div>
              </aside>
            </div>
          </motion.div>
        </motion.div>
        {/* end */}
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
            <ul className="relative flex flex-wrap gap-2 z-10 font-medium tracking-[3px] text-[10px] uppercase text-spotify-bg">
              {randomArtist?.mainArtistInfo?.genres
                .slice(0, 3)
                .map((genre, index) => (
                  <li key={index}>
                    {randomArtist.mainArtistInfo.genres[
                      randomArtist.mainArtistInfo.genres.slice(
                        0,
                        3
                      ).length - 1
                    ] === genre ? (
                      <>{genre} </>
                    ) : (
                      <>{genre} /</>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        {/* clip-path: inset(0 100% 0 0); */}

        <img
          src={`${randomArtist.mainArtistInfo.image}`}
          className="absolute top-0 left-0 object-cover object-center w-full h-full rounded-lg shadow-lg"
        />
      </motion.div>
      {/* <div className="mt-3 overflow-hidden">
        <div className="h-[4px] max-w-[350px] bg-spotify-text/10 animate-x willchange-transform"></div>
      </div> */}
    </motion.div>
  );
}
