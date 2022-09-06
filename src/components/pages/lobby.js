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
        <div className="flex-1 p-10 border-2 rounded-lg border-spotify-text bg-spotify-bg">
          <header>Name: {userData?.name}</header>
          <img
            src={userData?.image}
            className="h-[100px] w-[100px]  object-cover"
          />
          <div className="grid gap-5 text-spotify-text">
            <div className="grid grid-cols-3 grid-rows-1">
              <div># Title</div>
              <div>Owner</div>
              <div># Title</div>
            </div>
            {userData?.playlists?.map((playlist, index) => (
              <div
                key={playlist.id}
                className="relative grid flex-1 w-full grid-cols-3"
              >
                <div className="flex flex-row items-center">
                  <div className="flex">
                    <div className="relative w-10 h-10 before:absolute before:content-[''] before:h-full before:w-full before:bg-spotify-bg before:bottom-1 before:right-1 before:border-2 before:border-spotify-text">
                      <img
                        src={playlist.image}
                        className="relative block object-cover w-10 h-10 min-h-10 min-w-10 drop-shadow-md"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-end ml-2">
                      <h3 className="text-left text-[14px] font-normal  tracking-tight first-letter:uppercase">
                        {playlist.name}
                      </h3>
                      <p className="relative flex flex-wrap z-10 font-medium text-[10px] uppercase text-neutral-700/80">
                        Songs: #{playlist.length}{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-end">
                  <h3 className="text-left text-[14px] font-normal  tracking-tight first-letter:uppercase">
                    {playlist.owner.name}
                  </h3>
                </div>
                <div>123</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 invisible p-10 border-2 rounded-lg border-spotify-text bg-spotify-bg">
          <header>Name: {userData?.name}</header>
          <img
            src={userData?.image}
            className="h-[100px] w-[100px]  object-cover"
          />
          <div className="grid gap-5 text-spotify-text">
            <div className="grid grid-cols-3 grid-rows-1">
              <div># Title</div>
              <div>Owner</div>
              <div># Title</div>
            </div>
            {userData?.playlists?.map((playlist, index) => (
              <div
                key={playlist.id}
                className="relative grid flex-1 w-full grid-cols-3"
              >
                <div className="flex flex-row items-center">
                  <div className="flex">
                    <div className="relative w-10 h-10 before:absolute before:content-[''] before:h-full before:w-full before:bg-spotify-bg before:bottom-1 before:right-1 before:border-2 before:border-spotify-text">
                      <img
                        src={playlist.image}
                        className="relative block object-cover w-10 h-10 min-h-10 min-w-10 drop-shadow-md"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-end ml-2">
                      <h3 className="text-left text-[14px] font-normal  tracking-tight first-letter:uppercase">
                        {playlist.name}
                      </h3>
                      <p className="relative flex flex-wrap z-10 font-medium text-[10px] uppercase text-neutral-700/80">
                        Songs: #{playlist.length}{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-end">
                  <h3 className="text-left text-[14px] font-normal  tracking-tight first-letter:uppercase">
                    {playlist.owner.name}
                  </h3>
                </div>
                <div>123</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
