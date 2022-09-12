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
import { millsToMins } from "../../global";

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
  const [lobbyUsers, setLobbyUsers] = useState([]);

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
      setSelected((_) => _.filter((item) => item.id !== name.id));
    }
  }

  useEffect(() => {
    SOCKET.updateLobbyData(setLobbyData);
    SOCKET.setLobbyUsers(setLobbyUsers);
  }, [SOCKET]);

  useEffect(() => {
    if (userData) {
      SOCKET.joinLobby(
        {
          ...userData,
          lobbyId: lobbyData.id,
        },
        1000
      );
    }
  }, [SOCKET, userData]);

  useEffect(() => {
    if (playlistTunes && userData && playlistTunes.length > 0) {
      SOCKET.sendPlaylistTracks({
        id: lobbyData.id,
        playlistTunes,
      });
    }
  }, [playlistTunes]);

  if (!userData) return null;

  console.log(lobbyData);

  return (
    <>
      <Grid />
      <div className="flex gap-10">
        <button onClick={() => SOCKET.logUsers()}>log users</button>
        <button onClick={() => SOCKET.logLobbies()}>log lobbies</button>

        <button
          onClick={() =>
            SOCKET.sendPlaylistTracks({
              id: lobbyData.id,
              playlistTunes,
            })
          }
        >
          send playlist
        </button>
      </div>

      <div className="max-w-[1280px] mx-auto">
        <p>
          {lobbyUsers.length}'s users in this lobby with the ID: {lobbyData.id}
        </p>
        <ul>{lobbyUsers.map((item) => item.name).join(", ")}</ul>

        <div className="mt-10">
          {userData.playlists.map((playlist, index) => (
            <div
              key={index}
              onClick={() =>
                addSelected({
                  name: playlist.name,
                  id: playlist.id,
                  length: playlist.length,
                })
              }
            >
              {playlist.name}
            </div>
          ))}
        </div>
        <div className="flex-col mt-10 bg-green-500 fkex">
          {userData.name}'s selected playlist(s):
          {selected.map((item, index) => (
            <span className="block" key={index}>
              {item.name}
            </span>
          ))}
          <span
            onClick={() => {
              getUserPlaylistTracks(selected, setPlaylistTunes);
            }}
            className="block px-5 py-1 mt-5 border rounded-3xl border-spotify-text max-w-max"
          >
            Submit Songs
          </span>
        </div>
        {lobbyData?.tracks?.length > 0 && (
          <ul className="flex flex-col gap-2 mt-10 rounded-md">
            <li className="grid grid-cols-5 py-2 border-b border-spotify-text/1">
              <div className="flex col-span-2 gap-4">
                <span className="w-4 my-auto text-xl font-medium text-right h-max text-spotify-text racking-tight" />
                <div className="relative h-full">
                  <h2
                    className="block relative z-10 p-0 text-base font-medium leading-none tracking-tight align-text-top text-spotify-text
                   max-w-[185px] overflow-hidden whitespace-nowrap text-ellipsis"
                  >
                    Title
                  </h2>
                </div>
              </div>

              <div className="col-span-1 h-max my-auto text-[14px] font-normal text-neutral-700/80 tracking-tight text-center">
                <h2
                  className="block  relative z-10 p-0 text-base font-medium leading-none tracking-tight align-text-top text-spotify-text
                   max-w-[185px] overflow-hidden whitespace-nowrap text-ellipsis text-left"
                >
                  Album
                </h2>
              </div>
              <div className="col-span-1 h-max my-auto text-[14px] font-normal text-neutral-700/80 tracking-tight text-right">
                <h2 className="relative z-10 block p-0 text-base font-medium leading-none tracking-tight text-right align-text-top text-spotify-text">
                  Date
                </h2>
              </div>
              <div className="col-span-1 h-max my-auto text-[14px] font-normal text-neutral-700/80 tracking-tight text-right mr-5">
                <h2 className="relative z-10 block p-0 text-base font-medium leading-none tracking-tight text-right align-text-top text-spotify-text">
                  Time
                </h2>
              </div>
            </li>
            {lobbyData?.tracks?.map((item, index) => (
              <li className="grid grid-cols-5" key={index}>
                <div className="flex col-span-2 gap-4">
                  <span className="w-4 h-max my-auto text-[14px] font-normal text-neutral-700/80 tracking-tight text-right">
                    {index + 1}
                  </span>
                  <img className="object-fill w-10 h-10" src={item.image} />
                  <div className="relative h-full">
                    <h2
                      className="block relative z-10 p-0 text-base font-medium leading-none tracking-tight align-text-top text-spotify-text
                   max-w-[185px] overflow-hidden whitespace-nowrap text-ellipsis"
                    >
                      {item.name}
                    </h2>
                    <ul className="flex gap-1 mx-auto text-[14px] flex-1 leading-5 font-normal mt-1 text-neutral-700/80 tracking-tight">
                      {item.artists.map((artist, index) => (
                        <li key={index} className="whitespace-nowrap">
                          {artist === item.artists[item.artists.length - 1]
                            ? `${artist}`
                            : `${artist},`}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="col-span-1 h-max my-auto text-[14px] font-normal text-neutral-700/80 tracking-tight text-center">
                  <p className="text-left max-w-[185px] overflow-hidden whitespace-nowrap text-ellipsis block">
                    {item.album}
                  </p>
                </div>
                <div className="col-span-1 h-max my-auto text-[14px] font-normal text-neutral-700/80 tracking-tight text-right">
                  {item.added.slice(0, 10).split("-").reverse().join("/")}
                </div>
                <div className="col-span-1 h-max my-auto text-[14px] font-normal text-neutral-700/80 tracking-tight text-right mr-5">
                  {millsToMins(item.length)}
                </div>
              </li>
            ))}
          </ul>
        )}

        <button
          className="block px-5 py-1 mt-10 border rounded-3xl border-spotify-text max-w-max"
          onClick={() =>
            createUserPlaylist({ ...userData, playlistTunes: lobbyData.tracks })
          }
        >
          {" "}
          create playlist on account
        </button>
      </div>

      {/* <div className="relative max-w-[1250px] w-full mx-auto my-12 grid grid-cols-10 p-10">
        <div className="fixed col-span-5 max-w-[600px] w-full h-full">
          <h1 className="text-7xl font-medium tracking-tighter z-[-10]text-left text-spotify-text leading-tight">
            Welcome to Shuff.le,
            <span className=" first-letter:uppercase text-spotify-green">
              {" "}
              {userData.name}
            </span>
          </h1>
          <p className="w-full max-w-lg mt-10 text-2xl font-normal leading-relaxed tracking-tight text-spotify-text">
            You have {userData.playlists.length} playlists available for shufflin',
            invite your friends and we'll work our magic!
          </p>
          <button className="mt-10 flex items-center gap-4 px-8 py-5 text-xl font-normal leading-relaxed tracking-tight rounded-lg bg-spotify-green relative text-spotify-bg after:absolute after:content-[''] after:w-full after:h-full after:bottom-2 after:right-2 after:-z-10 after:rounded-lg after:bg-spotify-bg after:border-2 after:border-spotify-text hover:shadow-lg duration-200">
            <IoPeopleSharp size={27} />
            Invite your friends
          </button>
          <p className="text-center mx-auto mt-10 text-[14px] flex-1 leading-5 font-normal text-neutral-700/80  tracking-tight flex gap-1 items-center">
            <span className="underline">Don't have their email?</span>
            Invite via this:
            <span className="font-medium text-black/80 hover:cursor-pointer hover:underline">
              Link
            </span>
          </p>

          <ul className="overflow-y -scroll">
            {lobbyData?.tracks?.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-start w-full col-span-5 ml-[600px]">
          {lobbyData?.users?.map((user, index) => {
            if (user == null) return null;
            return (
              <aside className="" key={index}>
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
                    {user.userData.name}'s Profile
                  </span>
                  <p className="block relative z-50 px-0 mx-0 mt-[-5px] text-[14px] font-normal text-neutral-700/80 tracking-tight text-center leading-normal hover:cursor-pointer hover:underline">
                    <a
                      href={`${user.userData.href}`}
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
                      src={user.userData.image}
                      className="block object-cover w-full h-full blur-[0.035rem] p-1  z-50 relative bg-spotify-bg"
                    />
                    <div className="absolute right-0 block w-full h-full scale-95 rotate-0 border-2 -z-30 top-3 left-3 border-spotify-text" />
                  </div>
                </div>

                <div className="w-full h-full">
                  <div className="flex flex-col items-center justify-center gap-8 mx-auto mt-8 text-spotify-text max-w-max">
                    {user.userData?.playlists?.map((playlist, index) => {
                      const sel = selected.some((item) => item.id === playlist.id);

                      return (
                        <div
                          key={index}
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
                    <button
                      onClick={() => {
                        getUserPlaylistTracks(selected, setPlaylistTunes);
                      }}
                      className="mt-10 flex items-center gap-4 px-4 py-1 text[14px] font-normal leading-relaxed tracking-tight rounded-lg 
                      bg-spotify-green relative text-spotify-bg"
                    >
                      <IoPeopleSharp size={27} />
                      Ready Up
                    </button>
                  </div>
                </div>
              </aside>
            );
          })}
        </div>
      </div> */}
    </>
  );
}
