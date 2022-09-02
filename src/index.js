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
      <div className="mt-[20vh] max-w-[1150px] w-full mx-auto flex items-center">
        <div className="flex flex-col flex-1">
          <h1 className="text-7xl font-medium tracking-tighter z-[-10] mb-0 text-left text-spotify-text leading-[1.3]">
            Create your new
            <br /> playlist in{" "}
            <span className="text-spotify-green">
              One Click.
            </span>
          </h1>
          <p className="w-full my-8 text-2xl font-normal leading-7 tracking-tight text-left text-neutral-700/60">
            Share your music taste with friends, and build a
            playlist that suits all.
          </p>
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
        <div className="flex flex-col flex-1">123</div>
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
