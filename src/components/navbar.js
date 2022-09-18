export default function Navbar() {
  return (
    <div className="flex w-full p-5 mt-14">
      <div className="relative flex items-center">
        <span className="relative z-10 block w-6 h-6 border-2 rounded-full bg-spotify-bg border-spotify-text"></span>
        <span className="absolute z-0 block w-5 h-5 mr-6 rounded-full left-4 bg-spotify-text border-spotify-text"></span>
        <span className="relative block left-4">
          <h1 className="relative z-10 text-lg font-semibold leading-none tracking-tight text-spotify-text">
            Shuff/le
          </h1>
        </span>
      </div>
    </div>
  );
}
