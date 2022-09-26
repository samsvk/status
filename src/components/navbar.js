export default function Navbar() {
  return (
    <div className="grid flex-row items-center w-full grid-cols-5 gap-10 py-5 pt-10">
      <div className="relative col-span-3 bg-spotify-text">
        <div className="absolute flex items-center -top-3.5 bg-spotify-bg pr-10">
          <span className="relative z-10 block w-6 h-6 border-2 rounded-full bg-spotify-bg border-spotify-text" />
          <span className="relative z-0 block w-5 h-5 rounded-full right-3 bg-spotify-text border-spotify-text" />
          <h1 className="relative z-10 text-xl font-semibold tracking-tight text-spotify-text">
            Shuff.le
          </h1>
        </div>
      </div>
      <nav className="col-span-1 ml w-max">
        <ul className="flex items-center justify-center gap-5">
          <li className="text-base font-medium tracking-normal text-spotify-text whitespace-nowrap">
            Company
          </li>
          <li className="text-base font-medium tracking-normal text-spotify-text whitespace-nowrap">
            Source
          </li>
          <li className="text-base font-medium tracking-normal text-spotify-text whitespace-nowrap">
            Donate & Support
          </li>
        </ul>
      </nav>
    </div>
  );
}
