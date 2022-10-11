import { GoFlame } from "react-icons/go";

export default function Footer() {
  return (
    <div className="fixed bottom-0 grid items-end w-full grid-cols-7">
      <div className="flex flex-col col-span-1 bg-pink-500 h-max">
        <div className="bg-black min-h-[500px]"></div>
      </div>
      <div className="grid-cols-1 bg-indigo-500 h-max">
        {" "}
        <div className="bg-black min-h-[300px]"></div>
      </div>
      <div className="col-span-2 bg-red-500 h-max">
        {" "}
        <div className="bg-black min-h-[220px]"></div>
      </div>
      <div className="grid-cols-1 bg-sky-500 h-max">
        {" "}
        <div className="bg-black min-h-[180px]"></div>
      </div>
      <div className="grid-cols-1 bg-blue-500 h-max">
        {" "}
        <div className="bg-black min-h-[440px]"></div>
      </div>
      <div className="grid-cols-1 bg-stone-500 h-max">
        <div className="bg-black min-h-[580px]"></div>
      </div>
    </div>
  );
}
