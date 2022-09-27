export default function Navbar() {
  return (
    <div className="flex w-full">
      <div className="relative w-full max-w-screen-sm">
        <div className="absolute flex items-center pr-10 bg-spotify-bg">
          <span className="relative z-10 block w-6 h-6 border-2 rounded-full bg-spotify-bg border-spotify-text" />
          <span className="relative z-0 block w-5 h-5 rounded-full right-3 bg-spotify-text border-spotify-text" />
          <h1 className="relative z-10 text-base font-medium tracking-normal text-spotify-text">
            Shuff.le
          </h1>
        </div>
      </div>
      <nav className="flex ml-auto">
        <ul className="flex items-start justify-start w-full gap-5">
          <li className="relative text-base font-medium tracking-normal text-spotify-text whitespace-nowrap after:absolute after:w-0 after:h-[2px] after:left-0 after:right-0 after:bottom-0 after:bg-spotify-text/5  hover:after:w-full after:duration-200 hover:cursor-pointer">
            Company
          </li>
          <li className="relative text-base font-medium tracking-normal text-spotify-text whitespace-nowrap after:absolute after:w-0 after:h-[2px] after:left-0 after:right-0 after:bottom-0 after:bg-spotify-text/5  hover:after:w-full after:duration-200 hover:cursor-pointer">
            Source
          </li>
        </ul>
      </nav>
    </div>
  );
}
