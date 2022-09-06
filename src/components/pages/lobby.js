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
      <div className="relative flex w-full gap-10 mx-auto my-10 max-w-max">
        <div className="relative z-50 flex items-end flex-1 gap-12 p-10 border-2 border-spotify-text bg-spotify-green before:absolute before:content-[''] before:h-full before:w-full before:bg-spotify-bg before:top-[-0.25rem] before:left-1 before:border-2 before:border-spotify-text before:-z-20">
          <header className="flex flex-col items-end justify-end bg-orange-500 text-spotify-text w-max">
            <div className="relative w-28 h-28 before:absolute before:content-[''] before:h-full before:w-full before:bg-spotify-bg before:bottom-1 before:right-1 before:border-2 before:border-spotify-text">
              <img
                src={userData.image}
                className="relative block object-cover w-full h-full drop-shadow-md"
              />
            </div>
          </header>

          <div className="grid items-start grid-cols-3 gap-8 justify-evenly text-spotify-text w-max">
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
