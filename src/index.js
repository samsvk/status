import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { createNewEmail } from "./api/actions";
import { useState } from "react";
import Grid from "./components/grid";

function App() {
  const [returnedValue, setReturnedValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    createNewEmail(
      {
        parentEmail: "hi",
      },
      setReturnedValue
    );
  }

  return (
    <>
      <Grid />
      <div className="max-w-[1200px] w-full mx-auto px-6 flex items-center justify-center flex-col">
        <h1 className="text-6xl font-semibold tracking-tight z-[-10] mb-0 text-center text-spotify-green">
          Enter Your Email
        </h1>
        <p className="text-[18px] text-center leading-7 font-normal tracking-tight text-neutral-700/60 my-8 max-w-[660px] w-full">
          For the last time ever enter your email - gain access
          to a healthier digital footprint, online-ecosystem and
          protect your inbox.
        </p>
        {returnedValue}
        <form
          onSubmit={(e) => handleSubmit(e)}
          className=" max-w-[440px] mx-auto w-full bg-gray-200/50 flex focus:outline focus:outline-offset-0 hover:outline hover:outline-offset-0 outline-gray-200 outline-2 hover:cursor-pointer min-h-[35px] rounded-full px-1 py-1 "
        >
          <p className="flex-1 px-4 pt-1 pb-1.5 flex items-center bg-transparent min-h-[35px] focus:outline-none focus:outline-offset-0 hover:outline-none hover:outline-offset-0 placeholder:text-base placeholder:text-[14px] placeholder:font-medium placeholder:tracking-tight placeholder:text-left placeholder:text-black/80 text-base text-[14px] font-medium tracking-tight text-left text-black/80 ">
            Login with Spotify
          </p>
          <button
            className="px-6 py-2 bg-black rounded-full text-[14px] leading-6 font-normal text-white hover:cursor-pointer hover:bg-black/80 duration-200"
            type="submit"
          >
            Create Lobby
          </button>
        </form>
        <div>
          <p className="text-center mx-auto text-[14px] flex-1 mt-12 leading-5 font-normal text-neutral-700/80 my-10 tracking-tight flex gap-1 items-center">
            <span className="underline">
              Don't understand how it works?
            </span>
            <span className="line-through">$25</span>
            now only{" "}
            <span className="font-medium text-black/80">
              $15
            </span>
            for unlimited masks.
          </p>
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
