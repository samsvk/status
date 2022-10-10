export default function Navbar() {
  return (
    <div className="flex w-full border-b border-spotify-text/20">
      <div className="relative w-full max-w-screen-sm">
        <div className="absolute flex items-center pr-8 bg-spotify-bg">
          <span className="relative block w-6 h-6 border-2 rounded-full z-8 bg-spotify-bg border-spotify-text" />
          <span className="relative z-0 block w-5 h-5 rounded-full right-3 bg-spotify-text border-spotify-text" />
          <h1 className="relative text-base font-medium tracking-normal z-8 text-spotify-text">
            Shuff.le
          </h1>
        </div>
      </div>
      <nav className="flex ml-auto">
        <ul className="flex items-start justify-start w-full">
          <li
            className="flex-1 px-8 relative text-base font-medium tracking-normal text-spotify-text whitespace-nowrap after:absolute after:w-0 after:h-[2px] after:left-0 after:right-0 after:bottom-0 after:bg-spotify-text/5  hover:after:w-full after:duration-200 hover:cursor-pointer
            py-8 border-l border-r border-spotify-text/20 flex items-center justify-center
          "
          >
            Company
          </li>
          <li
            className="flex-1 px-8 relative text-base font-medium tracking-normal text-spotify-text whitespace-nowrap after:absolute after:w-0 after:h-[2px] after:left-0 after:right-0 after:bottom-0 after:bg-spotify-text/5  hover:after:w-full after:duration-200 hover:cursor-pointer
            py-8  border-r border-spotify-text/20 flex items-center justify-center
          "
          >
            Company
          </li>
          <li
            className="flex-1 px-8 relative text-base font-medium tracking-normal text-spotify-text whitespace-nowrap after:absolute after:w-0 after:h-[2px] after:left-0 after:right-0 after:bottom-0 after:bg-spotify-text/5  hover:after:w-full after:duration-200 hover:cursor-pointer
            py-8  border-r border-spotify-text/20 flex items-center justify-center
          "
          >
            Company
          </li>
          <li
            className="flex-1 px-8 relative text-base font-medium tracking-normal text-spotify-text whitespace-nowrap after:absolute after:w-0 after:h-[2px] after:left-0 after:right-0 after:bottom-0 after:bg-spotify-text/5  hover:after:w-full after:duration-200 hover:cursor-pointer
            py-8  border-r border-spotify-text/20 flex items-center justify-center
          "
          >
            Company
          </li>
        </ul>
      </nav>
    </div>
  );
}
