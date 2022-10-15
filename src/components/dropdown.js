export const Dropdown = ({ children, icon, name, setShowId, show }) => {
  return (
    <li className="relative z-20 flex items-center justify-center flex-1 gap-2 font-semibold text-[1.05rem] text-spotify-text whitespace-nowrap hover:cursor-pointer tracking-tight">
      <span
        onClick={() => setShowId(name)}
        className="flex items-center justify-center gap-2"
      >
        {icon}
        {name}
      </span>
      {show === name && (
        <div
          className={`${
            show === name && "animate-[clip_0.4s_ease_0.15s_both]"
          } delay-300 absolute left-0 z-50 w-full h-max min-w-[550px] text-white bg-spotify-bg  max-w-max top-12 rounded-3xl overflow-hidden p-8 flex flex-col gap-5 border border-spotify-border/5`}
        >
          {children}
        </div>
      )}
    </li>
  );
};
