import { FaShareAlt } from "react-icons/fa";
import { IoLink } from "react-icons/io5";
import { Dropdown } from "./dropdown";
import { AiOutlineTwitter, AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { TbCopy } from "react-icons/tb";
import { useState } from "react";

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
    <div className="fixed top-0 flex w-full py-10 pl-2">
      <div className="relative flex items-center w-24 pl-8">
        <div className="absolute flex items-center pr-8 bg-spotify-bg">
          <span className="relative block w-6 h-6 border-2 rounded-full z-8 bg-spotify-bg border-spotify-text" />
          <span className="relative z-0 block w-5 h-5 rounded-full right-3 bg-spotify-text border-spotify-text" />
        </div>
      </div>
      <nav className="flex">
        <ul className="flex items-center justify-center w-full gap-8">
          <Dropdown
            icon={<IoLink size={28} />}
            name="About"
            setShowId={setShowId}
            show={show}
          >
            <h1 className="z-0 inline-block text-3xl font-bold leading-none tracking-tight text-left text-spotify-text animate-[tx_0.5s_ease_0.3s_both] will-change-transform">
              About the app
            </h1>
            <p
              className="block w-full max-w-lg text-[1.05rem] font-semibold leading-normal tracking-tight text-left text-spotify-border whitespace-normal  will-change-transform
                animate-[tx_0.5s_ease_0.4s_both]"
            >
              <span className="text-spotify-text">Company: </span>Shuff.le is a song
              analysis and music discovery tool for Spotify users that is built on{" "}
              <ExternalLink link="http://spotify.com">
                Spotify's Web API
              </ExternalLink>
            </p>
            <p
              className="block w-full max-w-lg text-[1.05rem] font-semibold leading-normal tracking-tight text-left text-spotify-border whitespace-normal  will-change-transform
             animate-[tx_0.5s_ease_0.5s_both]"
            >
              <span className="text-spotify-text">Privacy: </span>
              Shuff.le requires access to some of your Spotify account data but not
              to worry, we do NOT store any data on any server. Once your playlist is
              created, we then cleanup and delete all data (Still not at eases? Our
              code is{" "}
              <ExternalLink link="http://github.com">Open Source</ExternalLink>)
            </p>
            <p
              className="block w-full max-w-lg text-[1.05rem] font-semibold leading-normal tracking-tight text-left text-spotify-border whitespace-normal   will-change-transform
              animate-[tx_0.5s_ease_0.6s_both]"
            >
              <span className="text-spotify-text ">Version: </span>
              Shuff.le is in early alpha: 0.0.4
            </p>{" "}
            <div
              className="flex items-center justify-center col-span-1 overflow-hidden bg-spotify-border/5 rounded-2xl max-w-max    will-change-transform
              animate-[tx_0.5s_ease_0.7s_both]"
            >
              <span className="px-3 py-4 bg-spotify-text">
                <AiFillGithub className="mx-auto text-4xl text-spotify-bg" />
              </span>
              <p className="block w-full max-w-lg text-[1.05rem] font-semibold leading-normal tracking-tight text-left text-spotify-border pl-4 pr-6">
                <span className="block text-spotify-text">Source Code: </span>
                Available free
              </p>
            </div>
          </Dropdown>
          <Dropdown
            icon={<FaShareAlt size={20} />}
            name="Share"
            setShowId={setShowId}
            show={show}
          >
            <h1 className="z-0 inline-block text-3xl font-bold leading-none tracking-tight text-left text-spotify-text  animate-[tx_0.5s_ease_0.3s_both] will-change-transform">
              Share Shuff.le
            </h1>
            <p className="block w-full max-w-lg text-[1.05rem] font-semibold leading-normal tracking-tight text-left text-spotify-border  animate-[tx_0.5s_ease_0.4s_both] will-change-transform">
              Choose your prefered social platform
            </p>
            <div className="grid grid-cols-3 gap-6">
              <span className="flex flex-col items-center justify-center col-span-1 py-10 bg-spotify-border/5 rounded-2xl  animate-[tx_0.5s_ease_0.5s_both] will-change-transform">
                <AiOutlineTwitter className="mx-auto text-4xl text-[#1DA1F2]" />
                <p className="block w-full max-w-lg text-[1.05rem] font-semibold leading-normal tracking-tight text-center text-spotify-border">
                  Twitter
                </p>
              </span>
              <span className="flex flex-col items-center justify-center col-span-1 py-10 bg-spotify-border/5 rounded-2xl  animate-[tx_0.5s_ease_0.6s_both] will-change-transform">
                <AiOutlineMail className="mx-auto text-4xl text-[#ff0050]" />
                <p className="block w-full max-w-lg text-[1.05rem] font-semibold leading-normal tracking-tight text-center text-spotify-border">
                  Email
                </p>
              </span>
              <span className="flex flex-col items-center justify-center col-span-1 py-10 bg-spotify-border/5 rounded-2xl  animate-[tx_0.5s_ease_0.7s_both] will-change-transform">
                <TbCopy className="mx-auto text-4xl text-spotify-text" />
                <p className="block w-full max-w-lg text-[1.05rem] font-semibold leading-normal tracking-tight text-center text-spotify-border">
                  Copy Link
                </p>
              </span>
            </div>
          </Dropdown>
        </ul>
      </nav>
    </div>
  );
}
