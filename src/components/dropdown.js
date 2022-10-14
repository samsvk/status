import { useState } from "react";
export const Dropdown = ({ children, icon, name }) => {
  console.log(children);
  const [show, setShow] = useState(false);
  return (
    <li
      className="relative z-20 flex items-center justify-center flex-1 gap-2 text-base font-medium tracking-normal text-spotify-text whitespace-nowrap hover:cursor-pointer"
      onClick={() => setShow(!show)}
    >
      <span
        className={`${show ? "bg-green-500" : "bg-red-500"} h-2 w-2 rounded-full`}
      />
      {icon}
      {name}
      {show && (
        <div className="absolute left-0 z-50 w-full h-max min-w-[550px] text-white bg-spotify-text max-w-max top-12 rounded-3xl overflow-hidden p-8 flex flex-col gap-5">
          {children}
        </div>
      )}
    </li>
  );
};
