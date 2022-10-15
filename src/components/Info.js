import Grid from "./grid";
import { FaSpotify } from "react-icons/fa";
import { useState, useEffect } from "react";
import { fetchRandomArtist } from "../api/actions";
import { getWindow } from "../global";

export default function Info() {
  const [randomArtist, setRandomArtist] = useState([]);

  useEffect(() => {
    fetchRandomArtist(setRandomArtist);
  }, []);
  return (
    <>
      <div className="flex w-full min-h-screen max-w-screen-2xl">
        <div className="animate-[tx_0.5s_ease_0.3s_both] will-change-transform relative w-full max-h-max my-auto">
          <p className="text-6xl font-normal leading-tight tracking-tight text-center text-spotify-text/60 animate-[leading_0.5s_ease_0.3s_both] relative w-full">
            Shuff.le is a streaming{" "}
            <span className="text-spotify-text/90">analysis</span> and{" "}
            <span className="text-spotify-text/90">discovery</span> tool that uses{" "}
            <span className="text-spotify-text/90">asynchronous</span> technology
            using <span className="text-spotify-text/90">Spotify's Web API.</span>{" "}
            You'll discover tons of new artists like *insert img* to already famous
            artists like *insert img*. Our algorithm was developed to help form
            playlists between multiple people to keep the good vibes going.
          </p>
        </div>
      </div>
    </>
  );
}
