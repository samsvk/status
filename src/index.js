import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import Grid from "./components/grid";
import { FaSpotify } from "react-icons/fa";
import Artist from "./components/artist";

function App() {
  return (
    <>
      <Grid />
      <div className="min-h-screen h-full max-w-[1250px] w-full mx-auto flex items-center gap-5">
        <div className="flex flex-col flex-1 gap-10">
          <h1 className="text-7xl font-medium tracking-tighter z-[-10]text-left text-spotify-text leading-tight">
            Create your new
            <br /> playlist in{" "}
            <span className="text-spotify-green">One Click</span>
          </h1>
          <p className="w-full max-w-lg text-2xl font-normal leading-relaxed tracking-tight text-spotify-text">
            Share your music taste with friends, and build a
            playlist that fits everyone!
          </p>
          <div>
            <button
              className="flex items-center gap-4 px-8 py-5 text-xl font-normal leading-relaxed tracking-tight rounded-lg bg-spotify-green relative text-spotify-bg first-letter:
            after:absolute after:content-[''] after:w-full after:h-full after:bottom-2 after:right-2 after:-z-10 after:rounded-lg after:bg-spotify-bg after:border-2 after:border-spotify-text
            hover:shadow-lg duration-200
            "
            >
              <FaSpotify />
              Connect to Spotify
            </button>
          </div>
          <div>
            <p className="text-center mx-auto text-[14px] flex-1 leading-5 font-normal text-neutral-700/80  tracking-tight flex gap-1 items-center">
              <span className="underline">
                Don't understand how it works?
              </span>
              <span className="line-through">$0</span>
              It's completely{" "}
              <span className="font-medium text-black/80">
                free
              </span>
              forever.
            </p>
          </div>
        </div>
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
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
