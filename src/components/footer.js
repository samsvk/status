import { GoFlame } from "react-icons/go";

export default function Footer() {
  return (
    <div className="flex w-full pt-4">
      <div className="flex items-center flex-1 gap-3">
        <div className="relative inline-block w-6 h-6 ml-3 overflow-visible rounded-full bg-spotify-text/20">
          <GoFlame className="absolute overflow-visible text-2xl text-spotify-text -left-2 bottom-1.5" />
        </div>
        <p className="inline-block w-full max-w-sm text-base font-medium leading-normal tracking-normal text-spotify-text">
          Shuff.le is now free!
        </p>
      </div>
    </div>
  );
}
