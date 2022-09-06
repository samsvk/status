import useRender from "../hooks/useRender";
import { useEffect, useState } from "react";
import { fetchRandomArtist } from "../api/actions";
import { FaSpotify } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { container, child, variants } from "../global";

export default function Artist() {
  const [randomArtist, setRandomArtist] = useState();

  useEffect(() => {
    fetchRandomArtist(setRandomArtist);
  }, []);

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function nextStep() {
    setDirection(1);
    if (index === randomArtist.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function prevStep() {
    setDirection(-1);
    if (index === 0) {
      setIndex(randomArtist.length - 1);
      return;
    }
    setIndex(index - 1);
  }

  if (!randomArtist) return null;

  function onStart() {
    const x = setTimeout(() => {
      nextStep();
      return () => clearTimeout(x);
    }, 7000);
  }

  function possibleNextArtist() {
    if (index === randomArtist.length - 1) {
      return randomArtist[0];
    }
    return randomArtist[index + 1] || randomArtist[0];
  }

  function generatePreviousArtist() {
    if (index === 0) {
      return randomArtist[randomArtist.length - 1];
    }
    return randomArtist[index - 1];
  }
  return (
    <motion.div
      variants={container}
      initial={"hidden"}
      animate={"visible"}
      className="relative flex flex-col items-center justify-center w-full h-full pl-8 ml-8"
    >
      <motion.div
        variants={child}
        className="w-full h-full max-w-[550px] overflow-hidden"
      >
        {/*bgorange for dev */}
        <div className="relative min-h-[550px] max-w-[453px] mx-auto items-center justify-center flex">
          {/*bgblack for dev */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              className="absolute left-0 right-0 w-full h-full mx-auto top-3"
              variants={variants}
              animate="animate"
              initial="initial"
              exit="exit"
              key={index}
              custom={direction}
            >
              <div className="relative h-[440px] w-[350px] rounded-lg block after:absolute after:content-[''] after:h-full after:w-full after:rounded-lg after:top-0 before:rounded-lg before:absolute before:content-[''] before:h-full before:w-full before:bg-spotify-bg before:bottom-2 before:left-2 before:border-2 before:border-spotify-text">
                <div className="h-[440px] relative">
                  <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full m-auto top-[50%] translate-y-[-50%] translate-x-1/2">
                    <div className="block rounded-lg max-w-[154px] min-w-[154px] w-full relative z-50 before:rounded-lg before:absolute before:content-[''] before:h-full before:w-full before:bg-spotify-green before:top-1 before:left-[-0.25rem] before:border-2 before:border-spotify-text before:-z-20 shadow-lg ml-12 mt-1.5">
                      <div className="block overflow-hidden border-2 rounded-lg border-spotify-text">
                        <aside className="flex flex-col px-1.5 py-1.5 rounded-b-lg bg-spotify-bg">
                          <h5 className="font-normal text-[14px] tracking-tight text-spotify-text text-neutral-700/80 underline">
                            Recent Track
                          </h5>
                          <div className="relative z-10 mt-0.5 mb-0.5 overflow-hidden text-base font-medium leading-none tracking-tight text-spotify-text whitespace-nowrap text-ellipsis ">
                            {randomArtist[index].name}
                          </div>
                        </aside>
                      </div>
                    </div>
                    <div className="block rounded-lg max-w-[154px] min-w-[154px]  w-full relative z-50 before:rounded-lg before:absolute before:content-[''] before:h-full before:w-full before:bg-spotify-offset before:top-1 before:left-1 before:border-2 before:border-spotify-text before:-z-20 shadow-lg mr-12 mt-2">
                      <div className="block overflow-hidden border-2 rounded-lg border-spotify-text">
                        <aside className="flex flex-col px-1.5 py-1.5 rounded-b-lg bg-spotify-bg">
                          <h5 className="font-normal text-[14px] tracking-tight text-spotify-text text-neutral-700/80 underline">
                            Popularity
                          </h5>
                          <div className="relative z-10 mt-0.5 mb-0.5 overflow-hidden text-base font-medium leading-none tracking-tight text-spotify-text whitespace-nowrap text-ellipsis ">
                            {randomArtist[
                              index
                            ].mainArtistInfo.followers.toString()
                              .length > 6
                              ? "World Famous"
                              : randomArtist[
                                  index
                                ].mainArtistInfo.followers.toString()
                                  .length > 4
                              ? "Well known"
                              : "Low-key"}
                          </div>
                        </aside>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex flex-col w-full h-full p-5 overflow-hidden">
                    <div className="flex flex-1">
                      <span className="relative z-10 block text-xl text-spotify-bg">
                        <FaSpotify />
                      </span>
                    </div>
                    <div className="flex flex-col items-start justify-end flex-1 mt-auto">
                      <h2 className="relative z-10 text-2xl font-medium leading-relaxed text-spotify-bg">
                        {randomArtist[index].mainArtistInfo.name}
                      </h2>
                      <ul className="relative flex flex-wrap z-10 font-medium tracking-[3px] text-[10px] uppercase text-spotify-bg">
                        {randomArtist[index].mainArtistInfo
                          ?.genres?.length > 0 && (
                          <>
                            <li>
                              {
                                randomArtist[index]
                                  .mainArtistInfo.genres[0]
                              }
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                  <img
                    alt=""
                    src={`${randomArtist[index].mainArtistInfo.image}`}
                    className="absolute top-0 left-0 object-cover object-center w-full h-full rounded-lg drop-shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <motion.div
            variants={child}
            className="absolute bottom-4 left-0 max-w-[350px] min-w-[350px] flex items-center justify-center"
          >
            <div className="min-h-[74px] min-w-[74px] max-w-[60px] max-h-[60px] w-full h-full rounded-full flex items-center justify-center relative b">
              <AnimatePresence>
                <svg
                  height="78"
                  width="78"
                  className="absolute overflow-visible rotate-[-90deg]"
                >
                  <circle
                    cx="39"
                    cy="39"
                    r="36"
                    className="opacity-50 stroke-neutral-700/80"
                    fill="none"
                    strokeWidth="1"
                  />

                  <motion.circle
                    key={index}
                    initial={{
                      strokeDasharray: 300,
                      strokeDashoffset: 300,
                    }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                    }}
                    onAnimationStart={onStart}
                    cx="39"
                    cy="39"
                    r="36"
                    fill="none"
                    strokeWidth="2"
                    className="stroke-spotify-text"
                  />
                </svg>
              </AnimatePresence>
              <AnimatePresence
                initial={false}
                custom={direction}
              >
                <motion.div
                  className="absolute right-[5.5rem]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  key={index}
                  custom={direction}
                >
                  <div>
                    <img
                      alt=""
                      className="block min-h-[30px] min-w-[30px] max-w-[30px] max-h-[30px] relative w-full h-full bg-black rounded-full m-auto drop-shadow-sm "
                      src={`${
                        generatePreviousArtist().mainArtistInfo
                          .image
                      }`}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
              <AnimatePresence
                initial={false}
                custom={direction}
              >
                <motion.div
                  className="absolute"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  key={index}
                  custom={direction}
                >
                  <div>
                    <img
                      alt=""
                      className="block min-h-[60px] min-w-[60px] max-w-[60px] max-h-[60px] relative w-full h-full bg-black rounded-full m-auto drop-shadow-sm"
                      src={`${randomArtist[index].mainArtistInfo.image}`}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
              <AnimatePresence
                initial={false}
                custom={direction}
              >
                <motion.div
                  className="absolute left-[5.5rem]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  key={index}
                  custom={direction}
                >
                  <div>
                    <img
                      alt=""
                      className="block min-h-[30px] min-w-[30px] max-w-[30px] max-h-[30px] relative w-full h-full bg-black rounded-full m-auto drop-shadow-sm"
                      src={`${
                        possibleNextArtist(1).mainArtistInfo
                          .image
                      }`}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
