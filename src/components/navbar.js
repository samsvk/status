export default function Navbar() {
  return (
    <div className="flex flex-row items-center w-full gap-10 py-5 mt-14">
      <div className="relative flex items-center">
        <span className="relative z-10 block w-6 h-6 border-2 rounded-full bg-spotify-bg border-spotify-text" />
        <span className="relative z-0 block w-5 h-5 rounded-full right-2 bg-spotify-text border-spotify-text" />
        <h1 className="relative z-10 text-lg font-semibold leading-none tracking-tight text-spotify-text">
          Shuff.le
        </h1>
      </div>
      <div className="w-full h-[1px] max-w-screen-md bg-spotify-text/5"></div>
      <nav className="w-max">
        <ul className="flex gap-5">
          <li className="text-[14px] font-medium text-spotify-text tracking-normal whitespace-nowrap">
            Company
          </li>
          <li className="text-[14px] font-medium text-spotify-text tracking-normal whitespace-nowrap">
            Terms of Service
          </li>
          <li className="text-[14px] font-medium text-spotify-text tracking-normal whitespace-nowrap">
            Source
          </li>
        </ul>
      </nav>
      <div className="w-full h-[1px] max-w-sm bg-spotify-text/5"></div>
      <nav className="flex w-max">
        <ul className="flex gap-5">
          <li className="text-[14px] font-medium text-spotify-text tracking-normal">
            Support
          </li>
          <li className="text-[14px] font-medium text-spotify-text tracking-normal">
            Login
          </li>
        </ul>
      </nav>
    </div>
  );
}
