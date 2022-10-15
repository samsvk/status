import { HiPlusSm } from "react-icons/hi";
export const Dropdown = ({ children, icon, name, setShowId, show }) => {
  return (
    <li
      className="relative z-20 flex items-center justify-center flex-1 gap-2 whitespace-nowrap hover:cursor-pointer 
    text-[1.05rem] font-normal leading-normal tracking-tight text-spotify-text/60
    "
    >
      <span
        onClick={() => setShowId(name)}
        className="flex items-center justify-center gap-2 text-center"
      >
        {name}
        <HiPlusSm size={16} />
      </span>
      {show === name && (
        <div
          className={`${
            show === name && "animate-[clip_0.4s_ease_0.15s_both]"
          } delay-300 absolute right-0 z-50 w-full h-max min-w-[550px] text-white bg-spotify-offset  max-w-max top-12 rounded-3xl overflow-hidden p-8 flex flex-col gap-5 `}
        >
          {children}
        </div>
      )}
    </li>
  );
};
