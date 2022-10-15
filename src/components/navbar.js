import { FaShareAlt } from "react-icons/fa";
import { IoLink } from "react-icons/io5";
import { Dropdown } from "./dropdown";
import { AiOutlineTwitter, AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { TbCopy } from "react-icons/tb";
import { useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { SiKofi, SiPatreon, SiPaypal } from "react-icons/si";

function ExternalLink(props) {
  return (
    <a
      target="_blank"
      href={props.link}
      rel="noreferrer"
      className="font-medium hover:cursor-pointer text-spotify-green"
    >
      {props.children}
    </a>
  );
}

export default function Navbar() {
  const [show, setShow] = useState(false);

  function setShowId(id) {
    if (show === id) setShow(false);
    else setShow(id);
  }

  return (
    <div className="fixed top-0 z-30 flex w-full px-8 mx-auto py-14 max-w-screen-2xl">
      <div className="relative flex items-center justify-center w-max">
        <div className="flex items-center justify-center">
          <span className="relative block w-6 h-6 border-2 rounded-full z-8 bg-spotify-bg border-spotify-text" />
          <span className="relative z-0 block w-5 h-5 rounded-full right-3 bg-spotify-text border-spotify-text" />
          <p className="block text-[1.05rem] font-normal leading-normal tracking-tight text-spotify-text whitespace-normal">
            Shuffle
          </p>
        </div>
      </div>
      <nav className="flex ml-auto">
        <ul className="flex items-center justify-center w-full gap-12">
          <Dropdown name="About" setShowId={setShowId} show={show}>
            <h1 className="z-0 inline-block text-3xl font-bold leading-none tracking-tight text-left text-spotify-text animate-[tx_0.5s_ease_0.3s_both] will-change-transform">
              About the app
            </h1>
            <p
              className="w-full max-w-lg text-[1.05rem] font-normal leading-normal tracking-tight text-left  text-spotify-text/60 whitespace-normal  will-change-transform
                animate-[tx_0.5s_ease_0.4s_both]
                "
            >
              <span className="w-full text-spotify-text">
                Company:
                <br />{" "}
              </span>
              Shuff.le is a song analysis and music discovery tool for Spotify users
              that is built on{" "}
              <ExternalLink link="http://spotify.com">
                Spotify's Web API
              </ExternalLink>
            </p>
            <p
              className="block w-full max-w-lg text-[1.05rem] font-normal leading-normal tracking-tight text-left  whitespace-normal  will-change-transform
             animate-[tx_0.5s_ease_0.5s_both] text-spotify-text/60"
            >
              <span className="text-spotify-text">
                Privacy: <br />
              </span>
              Shuff.le requires access to some of your Spotify account data but not
              to worry, we do NOT store any data on any server. Once your playlist is
              created, we then cleanup and delete all data (Still not at eases? Our
              code is{" "}
              <ExternalLink link="http://github.com">Open Source</ExternalLink>)
            </p>
            <p
              className="block w-full max-w-lg text-[1.05rem] font-normal leading-normal tracking-tight text-left text-spotify-text/60 whitespace-normal   will-change-transform
              animate-[tx_0.5s_ease_0.6s_both]"
            >
              <span className="text-spotify-text ">
                Version: <br />
              </span>
              Shuff.le is in early alpha: 0.0.4
            </p>{" "}
          </Dropdown>
          <Dropdown name="Share" setShowId={setShowId} show={show}>
            <h1 className="z-0 inline-block text-3xl font-bold leading-none tracking-tight text-left text-spotify-text  animate-[tx_0.5s_ease_0.3s_both] will-change-transform">
              Share Shuff.le
            </h1>
            <p className="block w-full max-w-lg text-[1.05rem] font-normal text-spotify-text/60 leading-normal tracking-tight text-left    animate-[tx_0.5s_ease_0.4s_both] will-change-transform">
              Choose your prefered social platform
            </p>
            <div className="grid grid-cols-3 gap-6">
              <span className="flex flex-col items-center justify-center col-span-1 py-10 bg-spotify-border/5 rounded-2xl bg-spotify-bg animate-[tx_0.5s_ease_0.5s_both] will-change-transform">
                <AiOutlineTwitter className="mx-auto text-4xl text-[#1DA1F2]" />
                <p className="block w-full max-w-lg text-[1.05rem] font-normal leading-normal tracking-tight text-center text-spotify-text">
                  Twitter
                </p>
              </span>
              <span className="flex flex-col items-center justify-center col-span-1 py-10 bg-spotify-border/5 rounded-2xl  bg-spotify-bg  animate-[tx_0.5s_ease_0.6s_both] will-change-transform">
                <AiOutlineMail className="mx-auto text-4xl text-[#ff0050]" />
                <p className="block w-full max-w-lg text-[1.05rem] font-normal leading-normal tracking-tight text-center  text-spotify-text">
                  Email
                </p>
              </span>
              <span className="flex flex-col items-center justify-center col-span-1 py-10 bg-spotify-border/5 rounded-2xl  bg-spotify-bg   animate-[tx_0.5s_ease_0.7s_both] will-change-transform">
                <TbCopy className="mx-auto text-4xl text-spotify-text" />
                <p className="block w-full max-w-lg text-[1.05rem] font-normal leading-normal tracking-tight text-center  text-spotify-text">
                  Copy Link
                </p>
              </span>
            </div>
          </Dropdown>
          <Dropdown name="Donate" setShowId={setShowId} show={show}>
            <div className="grid grid-cols-3 gap-6">
              <span className="flex flex-col items-center justify-center col-span-1 py-10 bg-spotify-border/5 rounded-2xl bg-spotify-bg animate-[tx_0.5s_ease_0.5s_both] will-change-transform">
                <SiKofi className="mx-auto text-3xl text-spotify-text/60" />
                <p className="block w-full max-w-lg text-[1.05rem] font-normal leading-normal tracking-tight text-center text-spotify-text">
                  Kofi
                </p>
              </span>
              <span className="flex flex-col items-center justify-center col-span-1 py-10 bg-spotify-border/5 rounded-2xl  bg-spotify-bg  animate-[tx_0.5s_ease_0.6s_both] will-change-transform">
                <SiPatreon className="mx-auto text-3xl text-spotify-text/60" />
                <p className="block w-full max-w-lg text-[1.05rem] font-normal leading-normal tracking-tight text-center  text-spotify-text">
                  Patreon
                </p>
              </span>
              <span className="flex flex-col items-center justify-center col-span-1 py-10 bg-spotify-border/5 rounded-2xl  bg-spotify-bg   animate-[tx_0.5s_ease_0.7s_both] will-change-transform">
                <SiPaypal className="mx-auto text-3xl text-spotify-text/60" />
                <p className="block w-full max-w-lg text-[1.05rem] font-normal leading-normal tracking-tight text-center  text-spotify-text">
                  PayPal
                </p>
              </span>
            </div>
          </Dropdown>
          <li
            className="relative z-20 flex items-center justify-center flex-1 gap-2 whitespace-nowrap hover:cursor-pointer 
           text-[1.05rem] font-normal leading-normal tracking-tight text-spotify-text/60"
          >
            <span className="flex items-center justify-center gap-2 text-center">
              Community
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
