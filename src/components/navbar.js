import { BsArrowRight } from "react-icons/bs";
import { FaShareAlt } from "react-icons/fa";
import { IoLink } from "react-icons/io5";
export default function Navbar() {
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
          <li className="relative flex items-center justify-center flex-1 gap-2 text-base font-medium tracking-normal text-spotify-text whitespace-nowrap ">
            <IoLink size={28} />
            Share
          </li>
          <li className="relative flex items-center justify-center flex-1 gap-2 text-base font-medium tracking-normal text-spotify-text whitespace-nowrap ">
            <FaShareAlt size={20} />
            Share
          </li>
        </ul>
      </nav>
    </div>
  );
}
