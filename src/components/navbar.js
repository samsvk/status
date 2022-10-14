import { FaShareAlt } from "react-icons/fa";
import { IoLink } from "react-icons/io5";
import { Dropdown } from "./dropdown";

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
          <Dropdown icon={<IoLink size={28} />} name="About">
            <h1 className="z-0 inline-block text-4xl font-bold leading-none tracking-tight text-left text-spotify-bg">
              Share Shuff.le
            </h1>
            <p className="whitespace-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s.
            </p>
          </Dropdown>
          <Dropdown icon={<FaShareAlt size={20} />} name="Share">
            <h1 className="z-0 inline-block text-3xl font-bold leading-none tracking-tight text-left text-spotify-text">
              Share Shuff.le
            </h1>
            <p className="block w-full max-w-lg text-[1.05rem] font-semibold leading-normal tracking-tight text-left text-spotify-border">
              Choose your prefered social platform
            </p>
            <div className="grid grid-cols-3 gap-3.5">
              <span className="block col-span-1 p-10 bg-spotify-border/5 rounded-2xl"></span>
              <span className="block col-span-1 p-10 bg-orange-500"></span>
              <span className="block col-span-1 p-10 bg-orange-500"></span>
            </div>
          </Dropdown>
        </ul>
      </nav>
    </div>
  );
}
