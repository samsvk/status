import { GoFlame } from "react-icons/go";

export default function Footer() {
  return (
    <div className="fixed bottom-0 grid w-full h-2 grid-cols-7 bg-orange-500">
      <div className="col-span-1 bg-pink-500"></div>
      <div className="grid-cols-1 bg-indigo-500"></div>
      <div className="col-span-2 bg-red-500"></div>
      <div className="grid-cols-1 bg-sky-500"></div>
      <div className="grid-cols-1 bg-blue-500"></div>
    </div>
  );
}
