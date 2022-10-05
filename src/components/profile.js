import React from "react";
import { ImDiamonds } from "react-icons/im";

const Profile = ({ user, users }) => {
  console.log(users);
  return (
    <div className="flex-1 max-w-screen-xl mx-auto my-12">
      {" "}
      <p className="block w-full max-w-sm text-base font-medium leading-normal tracking-normal text-spotify-text">
        Hi, {user.name} your lobby currently has {users?.length} users online.
      </p>
      <ul className="flex">
        {users.map((u, i) => (
          <li key={i}>
            <div className="relative flex items-center justify-center overflow-hidden rounded-full bg-spotify-bg h-[65px] w-[65px] box-border">
              <img
                src={u?.image}
                className="box-border object-cover bg-black z-10 w-[61px] h-[61px] rounded-full absolute"
              />
            </div>
          </li>
        ))}
        <li>
          <div>
            <img />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
