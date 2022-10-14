import { useState } from "react";
export const Dropdown = ({ icon, name }) => {
  const [show, setShow] = useState(false);
  console.log(show, name);
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
        <div className="absolute left-0 z-50 w-20 h-48 bg-pink-500 top-12"></div>
      )}
    </li>
  );
};
