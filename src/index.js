import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import Grid from "./components/grid";
import { FaSpotify } from "react-icons/fa";
import Artist from "./components/artist";
import { motion, AnimatePresence } from "framer-motion";

export const container = {
  hidden: {
    opacity: 1,
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: i * 0.3,
    },
  }),
};

export const child = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.34, 0.53, 0.37, 1.02],
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: 150,
    transition: {
      ease: [0.34, 0.53, 0.37, 1.02],
      duration: 0.5,
    },
  },
};

function App() {
  return (
    <>
      <Grid />
      <div className="min-h-screen h-full max-w-[1250px] w-full mx-auto flex items-center gap-5">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            variants={container}
            initial={"hidden"}
            animate={"visible"}
          >
            <div className="flex flex-col flex-1 gap-10">
              <motion.h1
                variants={child}
                className="text-7xl font-medium tracking-tighter z-[-10]text-left text-spotify-text leading-tight"
              >
                Create your new
                <br /> playlist in{" "}
                <span className="text-spotify-green">
                  One Click
                </span>
              </motion.h1>
              <motion.p
                variants={child}
                className="w-full max-w-lg text-2xl font-normal leading-relaxed tracking-tight text-spotify-text"
              >
                Share your music taste with friends, and build a
                playlist that fits everyone!
              </motion.p>
              <div>
                <motion.div variants={child}>
                  <button
                    variants={child}
                    className="flex items-center gap-4 px-8 py-5 text-xl font-normal leading-relaxed tracking-tight rounded-lg bg-spotify-green relative text-spotify-bg first-letter:
                  after:absolute after:content-[''] after:w-full after:h-full after:bottom-2 after:right-2 after:-z-10 after:rounded-lg after:bg-spotify-bg after:border-2 after:border-spotify-text
                  hover:shadow-lg duration-200
                  "
                  >
                    <FaSpotify />
                    Connect to Spotify
                  </button>
                </motion.div>
              </div>
              <div>
                <motion.p
                  variants={child}
                  className="text-center mx-auto text-[14px] flex-1 leading-5 font-normal text-neutral-700/80  tracking-tight flex gap-1 items-center"
                >
                  <span className="underline">
                    Don't understand how it works?
                  </span>
                  <span className="line-through">$0</span>
                  It's completely{" "}
                  <span className="font-medium text-black/80">
                    free
                  </span>
                  forever.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex flex-col flex-1">
          <Artist />
        </div>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
