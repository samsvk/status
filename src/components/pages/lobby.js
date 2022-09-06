import Grid from "../grid";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  fetchUserDetails,
  fetchUserPlaylists,
  setUserCookie,
} from "../../api/actions";

export default function Lobby() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("at");
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (token) {
      setUserCookie(token);
      navigate("/lobby");
    }
  }, [token]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchUserDetails(setUserData);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  if (!userData) return null;
  console.log(userData);

  return (
    <>
      <Grid />
      <div className="flex w-full max-w-6xl gap-10 mx-auto my-10">
        <div className="flex-1 p-10 border-2 border-spotify-text bg-spotify-bg">
          <header className="relative flex items-center justify-center w-full mb-10 max-w-max">
            <div className="relative w-32 h-32 overflow-hidden rounded-full drop-shadow-md">
              <img
                alt=""
                src={`${userData.image}`}
                className="absolute top-0 left-0 object-cover object-center w-full h-full"
              />
            </div>
            <aside className="relative grid h-full ml-5 max-h-32">
              <h1 className="self-start font-medium leading-none tracking-tighter align-text-top text-start max-h-max text-7xl text-spotify-text">
                {userData.name}
              </h1>
              <span className="flex items-center text-left text-[14px] font-normal tracking-tight first-letter:uppercase whitespace-nowrap">
                {userData.playlists.length} Playlists Available
                {/* {userData} */}
              </span>
            </aside>
          </header>
          <div className="grid items-start justify-start grid-cols-2 gap-10 text-spotify-text w-max">
            {userData?.playlists?.map((playlist, index) => (
              <div
                key={playlist.id}
                className="relative flex-1 w-full col-span-1"
              >
                <div className="flex flex-row items-center min-w-0">
                  <div className="flex">
                    <div className="relative w-10 h-10 before:absolute before:content-[''] before:h-full before:w-full before:bg-spotify-bg before:bottom-1 before:right-1 before:border-2 before:border-spotify-text">
                      <img
                        src={playlist.image}
                        className="relative block object-cover w-10 h-10 min-h-10 min-w-10 drop-shadow-md"
                      />
                    </div>
                    <div className="inline-flex flex-col items-start justify-end ml-2 ">
                      <h3 className="w-[76px] block text-left text-[14px] font-normal tracking-tight first-letter:uppercase text-ellipsis whitespace-nowrap overflow-hidden">
                        {playlist.name}
                      </h3>
                      <p className="relative flex flex-wrap z-10 font-medium text-[10px] uppercase text-neutral-700/80  whitespace-nowrap">
                        Songs: #{playlist.length}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
