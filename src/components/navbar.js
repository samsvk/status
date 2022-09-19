export default function Navbar() {
  return (
    <div className="grid flex-row items-center w-full grid-cols-5 gap-10 py-5">
      <div className="relative w-full h-[1px]  bg-spotify-text/20 col-span-3">
        <div className="absolute flex items-center -top-3.5 bg-spotify-bg pr-10">
          <span className="relative z-10 block w-6 h-6 border-2 rounded-full bg-spotify-bg border-spotify-text" />
          <span className="relative z-0 block w-5 h-5 rounded-full right-2 bg-spotify-text border-spotify-text" />
          <h1 className="relative z-10 text-xl font-medium leading-snug tracking-normal text-spotify-text">
            Shuff.le
          </h1>
        </div>
      </div>
      <nav className="col-span-1 ml w-max">
        <ul className="flex items-center justify-center gap-5">
          <li className="text-[15px] font-medium text-spotify-text tracking-normal whitespace-nowrap">
            Company
          </li>
          <li className="text-[15px] font-medium text-spotify-text tracking-normal whitespace-nowrap">
            Source
          </li>
          <li className="text-[15px] font-medium text-spotify-text tracking-normal whitespace-nowrap">
            Donate & Support
          </li>
        </ul>
      </nav>
    </div>
  );
}
