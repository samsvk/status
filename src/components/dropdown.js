import { useState } from "react";
export const Dropdown = ({ children, icon, name }) => {
  console.log(children);
  const [show, setShow] = useState(false);
  return (
    <li
      className="relative z-20 flex items-center justify-center flex-1 gap-2 font-semibold text-[1.05rem] text-spotify-text whitespace-nowrap hover:cursor-pointer tracking-tight"
      onClick={() => setShow(!show)}
    >
      {icon}
      {name}
      {show && (
        <div className="absolute left-0 z-50 w-full h-max min-w-[550px] text-white bg-spotify-bg border-spotify-border border-2 max-w-max top-12 rounded-3xl overflow-hidden p-8 flex flex-col gap-3.5">
          {children}
        </div>
      )}
    </li>
  );
};
