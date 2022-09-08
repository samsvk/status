import Grid from "../grid";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  fetchUserDetails,
  fetchUserPlaylists,
  setUserCookie,
  getUserPlaylistTracks,
  createUserPlaylist,
} from "../../api/actions";
import { IoPeopleSharp } from "react-icons/io5";
import SOCKET from "../../api/socket";

export default function Lobby() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("at");
  const [userData, setUserData] = useState();
  const [lobbyData, setLobbyData] = useState({
    id: 1,
    users: [],
  });
  const [selected, setSelected] = useState([]);
  const [playlistTunes, setPlaylistTunes] = useState([]);

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

  function addSelected(name) {
    if (!selected.some((item) => item.id == name.id)) {
      setSelected((_) => [..._, name]);
    } else {
      setSelected((_) =>
        _.filter((item) => item.id !== name.id)
      );
    }
  }

  useEffect(() => {
    SOCKET.updateLobbyData(setLobbyData);
  }, [SOCKET]);

  if (!userData) return null;
  console.log(userData);

  return (
    <>
      <button
        onClick={() =>
          SOCKET.joinLobby({
            userData,
            lobbyData,
          })
        }
      >
        Join
      </button>
      <Grid />
      {selected.map((item) => (
        <span>{item.name}</span>
      ))}
      <div className="flex gap-10">
        <button
          onClick={() =>
            getUserPlaylistTracks(selected, setPlaylistTunes)
          }
        >
          {" "}
          get playlists
        </button>
        <button
          onClick={() =>
            createUserPlaylist({ ...userData, playlistTunes })
          }
        >
          {" "}
          create playlist
        </button>
      </div>

      <div className="relative">
        {playlistTunes.map((item, index) => (
          <div
            className="absolute left-10"
            style={{ top: index * 20 }}
          >
            {item.name}
          </div>
        ))}
      </div>

      <div className="relative max-w-[1250px] w-full mx-auto my-12 grid grid-cols-10 p-10">
        <div className="fixed col-span-5 max-w-[600px] w-full">
          <h1 className="text-7xl font-medium tracking-tighter z-[-10]text-left text-spotify-text leading-tight">
            Welcome to Shuff.le,{" "}
            <span className=" first-letter:uppercase text-spotify-green">
              {userData.name}!
            </span>
          </h1>
          <p className="w-full max-w-lg mt-10 text-2xl font-normal leading-relaxed tracking-tight text-spotify-text">
            You have {userData.playlists.length} playlists
            available for shufflin', invite your friends and
            we'll work our magic!
          </p>
          <button className="mt-10 flex items-center gap-4 px-8 py-5 text-xl font-normal leading-relaxed tracking-tight rounded-lg bg-spotify-green relative text-spotify-bg after:absolute after:content-[''] after:w-full after:h-full after:bottom-2 after:right-2 after:-z-10 after:rounded-lg after:bg-spotify-bg after:border-2 after:border-spotify-text hover:shadow-lg duration-200">
            <IoPeopleSharp size={27} />
            Invite your friends
          </button>
          <p className="text-center mx-auto mt-10 text-[14px] flex-1 leading-5 font-normal text-neutral-700/80  tracking-tight flex gap-1 items-center">
            <span className="underline">
              Don't have their email?
            </span>
            Invite via this:
            <span className="font-medium text-black/80 hover:cursor-pointer hover:underline">
              Link
            </span>
          </p>
        </div>
        <div className="flex items-start w-full col-span-5 ml-[600px]">
          {lobbyData?.users?.map((user, index) => {
            if (user == null) return null;
            return (
              <aside className="">
                <div className="relative mx-auto mb-5 min-w-[120px] max-w-[120px] min-h-[50px]">
                  <div className="absolute z-20 w-full h-full">
                    <span className="absolute right-0 block w-2 h-2 scale-50 bg-yellow-500 rounded-full top-1 rotate-12" />
                    <span className="absolute block w-2 h-2 scale-75 bg-pink-500 rounded right-12 rotate-12 bottom-12" />
                    <span className="absolute block w-2 h-2 scale-75 bg-indigo-500 rounded right-4 rotate-12 top-8" />
                    <span className="absolute left-[-.5rem] block w-2 h-2 rounded bg-sky-500 top-1.5 rotate-12" />
                    <span className="absolute left-[-1rem] block w-2 h-2 rounded bg-yellow-500 top-9 rotate-12 scale-50" />
                    <span className="absolute right-[-1rem] block w-2 h-2 rounded bg-emerald-500 top-9 rotate-12 scale-50" />
                    <span className="absolute block w-2 h-2 scale-75 bg-orange-500 rounded left-3 top-7 rotate-12" />
                  </div>
                  <span className="z-50 block px-0 mx-0 mt-1 text-base font-medium leading-normal tracking-tight text-center align-text-top text-spotify-text first-letter:uppercase">
                    {user.name}'s Profile
                  </span>
                  <p className="block relative z-50 px-0 mx-0 mt-[-5px] text-[14px] font-normal text-neutral-700/80 tracking-tight text-center leading-normal hover:cursor-pointer hover:underline">
                    <a
                      href={`${user.href}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Spotify
                    </a>
                  </p>
                </div>
                <div className="w-full px-4 mx-auto">
                  <div className="relative z-10 w-40 mx-auto border-2 h-36 border-spotify-text bg-spotify-bg ">
                    <img
                      src={user.image}
                      className="block object-cover w-full h-full blur-[0.035rem] p-1  z-50 relative bg-spotify-bg"
                    />
                    <div className="absolute right-0 block w-full h-full scale-95 rotate-0 border-2 -z-30 top-3 left-3 border-spotify-text" />
                  </div>
                </div>

                <div className="w-full h-full">
                  <div className="flex flex-col items-center justify-center gap-8 mx-auto mt-8 text-spotify-text max-w-max">
                    {user?.playlists?.map((playlist, index) => {
                      const sel = selected.some(
                        (item) => item.id === playlist.id
                      );

                      return (
                        <div
                          key={playlist.id}
                          className="relative flex flex-col flex-1 w-full col-span-1"
                        >
                          <div className="flex flex-row">
                            <div
                              onClick={() =>
                                addSelected({
                                  name: playlist.name,
                                  id: playlist.id,
                                  length: playlist.length,
                                })
                              }
                              className={`
                          relative w-14 h-14 before:absolute before:content-[''] before:h-full before:w-full before:bg-spotify-bg before:bottom-1 before:right-1 before:border-2 ${
                            sel
                              ? "before:border-spotify-text before:bg-spotify-green"
                              : "before:border-spotify-text"
                          }`}
                            >
                              <img
                                src={playlist.image}
                                className="relative block object-cover w-14 h-14 min-h-14 min-w-14 drop-shadow-lg"
                              />
                            </div>
                            <div className="inline-flex flex-col items-start justify-end ml-2">
                              <h3 className="block text-left text-[14px] font-normal tracking-tight first-letter:uppercase text-ellipsis whitespace-nowrap overflow-hidden">
                                {playlist.name}
                              </h3>
                              <p className="relative flex flex-wrap z-10 font-medium text-[10px] uppercase text-neutral-700/80  whitespace-nowrap">
                                Songs: #{playlist.length}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </aside>
            );
          })}
        </div>
      </div>
    </>
  );
}
