import Grid from "./grid";
import { FaSpotify } from "react-icons/fa";
import { useState, useEffect } from "react";
import { fetchRandomArtist } from "../api/actions";
import { getWindow } from "../global";
import { Arrows } from "./arrows";

export default function Info() {
  const [randomArtist, setRandomArtist] = useState([]);

  useEffect(() => {
    fetchRandomArtist(setRandomArtist);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen max-w-screen-2xl">
        <div className="animate-[tx_0.5s_ease_0.3s_both] will-change-transform relative w-full max-h-max">
          <div className="text-6xl font-normal leading-tight tracking-tight text-center text-spotify-text/60 animate-[leading_0.5s_ease_0.3s_both] relative w-full">
            Shuffle is a streaming{" "}
            <span className="text-spotify-text/95">analysis</span> and{" "}
            <span className="text-spotify-text/95">discovery</span> using{" "}
            <span className="text-spotify-text/95">asynchronous</span> technology
            through <span className="text-spotify-text/90">Spotify's Web API.</span>{" "}
            We help you discover artists like{" "}
            <span className="inline-flex items-center w-36 my-auto bg-black h-14 animate-[leadingImage_0.6s_ease_0.8s_both] relative align-middle">
              <img
                src={randomArtist[0]?.mainArtistInfo.image}
                className="box-border absolute top-0 bottom-0 left-0 right-0 z-10 object-cover object-center w-full h-full bg-black animate-[scale_0.4s_ease_0.9s_both]"
              />
            </span>{" "}
            and complex playlist integration <span></span>
            <span className="font-['Tinos'] underline text-spotify-text/95 decoration-2 underline-offset-4">
              Super Easy
            </span>
          </div>
          {/* <Grid randomArtist={randomArtist.slice(1)} /> */}
          <Arrows />
        </div>
      </div>
    </>
  );
}
