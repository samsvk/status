import { useEffect, useState } from "react";
import { fetchRandomArtist } from "../api/actions";
import { FaSpotify } from "react-icons/fa";
import useRender from "../hooks/useRender";
import { motion, AnimatePresence } from "framer-motion";
import { container, child, item, small } from "../global";

const images = [
  "https://images.unsplash.com/photo-1658171757201-41b9aa2b3651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1658184145200-3358c3338585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  "https://images.unsplash.com/photo-1658186309018-1e3b880acd0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1658193624919-50e49d7847e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
];

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      // scale: 0.5,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    // scale: 1,
    // transition: 'ease-in',
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      // scale: 0.5,
      // transition: 'ease-in',
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    };
  },
};

export default function Artist() {
  const [randomArtist, setRandomArtist] = useState();

  useEffect(() => {
    fetchRandomArtist(setRandomArtist);
  }, []);

  console.log(randomArtist);

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function nextStep() {
    setDirection(1);
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function prevStep() {
    setDirection(-1);
    if (index === 0) {
      setIndex(images.length - 1);
      return;
    }
    setIndex(index - 1);
  }

  console.log(randomArtist[0]);
  if (!randomArtist) return null;

  return (
    <div className="flex flex-col items-start justify-start w-full h-full pl-8 ml-8 overflow-hidden bg-orange-500">
      <div className="relative m-auto oveflow-hidden min-h-[440px] w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className="absolute top-0 left-0 w-full h-full]"
            variants={variants}
            animate="animate"
            initial="initial"
            exit="exit"
            key={index}
            custom={direction}
          >
            {randomArtist[index].name}
            {/* <motion.img
              variants={variants}
              src={images[index]}
              alt="slides"
              className="slides"
            /> */}
          </motion.div>
        </AnimatePresence>
        <br />
        <button className="prevButton" onClick={prevStep}>
          ◀
        </button>
        <button className="nextButton" onClick={nextStep}>
          ▶
        </button>
      </div>
    </div>
  );
}

// return (
//   <div className="flex flex-col pl-8 ml-8" t>
//     <motion.div
//       animate={{
//         opacity: 1,
//         y: 0,
//         transition: {
//           delay: 0.35,
//           ease: [0.34, 0.53, 0.37, 1.02],
//           duration: 0.4,
//         },
//       }}
//       initial={{
//         opacity: 0,
//         y: 150,
//       }}
//       className="
//     relative h-[440px] w-[350px] rounded-lg block after:absolute after:content-[''] after:h-full after:w-full after:rounded-lg after:top-0 before:rounded-lg before:absolute before:content-[''] before:h-full before:w-full before:bg-spotify-bg before:bottom-2 before:left-2 before:border-2 before:border-spotify-text"
//     >
//       <motion.div
//         variants={container}
//         initial={"hidden"}
//         animate={"visible"}
//         className="h-[440px]"
//       >
//         <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full m-auto top-[50%] translate-y-[-50%] translate-x-1/2">
//           <motion.div
//             variants={child}
//             className="mr-7 block rounded-lg max-w-[154px] relative z-50 before:rounded-lg before:absolute before:content-[''] before:h-full before:w-full before:bg-spotify-bg before:top-[-0.25rem] before:right-[-0.25rem] before:border-2 before:border-spotify-text before:-z-20 shadow-lg"
//           >
//             <div className="block overflow-hidden border-2 rounded-lg border-spotify-text">
//               <div className="h-[144px] w-[154px] overflow-hidden relative">
//                 <div className="absolute z-20 w-full h-full bg-black/30" />
//                 <img
//                   src={randomArtist.image}
//                   className="absolute top-0 left-0 block object-cover object-center w-full h-full overflow-hidden"
//                 />
//               </div>
//             </div>
//           </motion.div>
//           <motion.div
//             variants={child}
//             className="block rounded-lg max-w-[154px] min-w-[154px] w-full relative z-50
//           before:rounded-lg before:absolute before:content-[''] before:h-full before:w-full before:bg-spotify-green before:top-1 before:left-[-0.25rem] before:border-2 before:border-spotify-text before:-z-20 shadow-lg ml-12 mt-1.5"
//           >
//             <div className="block overflow-hidden border-2 rounded-lg border-spotify-text">
//               <aside className="flex flex-col px-1.5 py-1.5 rounded-b-lg bg-spotify-bg">
//                 <h5 className="font-normal text-[14px] tracking-tight text-spotify-text text-neutral-700/80 underline">
//                   Recent Track
//                 </h5>
//                 <div className="relative z-10 mt-0.5 mb-0.5 overflow-hidden text-base font-medium leading-none tracking-tight text-spotify-text whitespace-nowrap text-ellipsis ">
//                   {randomArtist.name}
//                 </div>
//               </aside>
//             </div>
//           </motion.div>
//           <motion.div
//             variants={child}
//             className="block rounded-lg max-w-[154px] min-w-[154px]  w-full relative z-50
//           before:rounded-lg before:absolute before:content-[''] before:h-full before:w-full before:bg-spotify-offset before:top-1 before:left-1 before:border-2 before:border-spotify-text before:-z-20 shadow-lg mr-12  mt-2
//           "
//           >
//             <div className="block overflow-hidden border-2 rounded-lg border-spotify-text">
//               <aside className="flex flex-col px-1.5 py-1.5 rounded-b-lg bg-spotify-bg">
//                 <h5 className="font-normal text-[14px] tracking-tight text-spotify-text text-neutral-700/80 underline">
//                   Popularity
//                 </h5>
//                 <div className="relative z-10 mt-0.5 mb-0.5 overflow-hidden text-base font-medium leading-none tracking-tight text-spotify-text whitespace-nowrap text-ellipsis ">
//                   {randomArtist.mainArtistInfo.followers.toString()
//                     .length > 6
//                     ? "World Famous"
//                     : randomArtist.mainArtistInfo.followers.toString()
//                         .length > 4
//                     ? "Well known"
//                     : "Low-key"}
//                 </div>
//               </aside>
//             </div>
//           </motion.div>
//         </div>
//         <div className="relative flex flex-col w-full h-full p-5 overflow-hidden">
//           <div className="flex flex-1">
//             <span className="relative z-10 block text-xl text-spotify-bg">
//               <FaSpotify />
//             </span>
//           </div>
//           <div className="flex flex-col items-start justify-end flex-1 mt-auto">
//             <h2 className="relative z-10 text-2xl font-medium leading-relaxed text-spotify-bg">
//               {randomArtist.mainArtistInfo.name}
//             </h2>
//             <ul className="relative flex flex-wrap gap-2 z-10 font-medium tracking-[3px] text-[10px] uppercase text-spotify-bg">
//               {randomArtist?.mainArtistInfo?.genres
//                 .slice(0, 2)
//                 .map((genre, index) => (
//                   <li key={index}>
//                     {randomArtist.mainArtistInfo.genres[
//                       randomArtist.mainArtistInfo.genres.slice(
//                         0,
//                         2
//                       ).length - 1
//                     ] === genre ? (
//                       <>{genre} </>
//                     ) : (
//                       <>{genre} /</>
//                     )}
//                   </li>
//                 ))}
//             </ul>
//           </div>
//         </div>
//         <img
//           src={`${randomArtist.mainArtistInfo.image}`}
//           className="absolute top-0 left-0 object-cover object-center w-full h-full rounded-lg shadow-lg"
//         />
//       </motion.div>
//     </motion.div>
//   </div>
// );
