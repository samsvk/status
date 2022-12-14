import Navbar from "../navbar";
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
import Profile from "../profile";

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

  return (
    <>
      {/* <div className="flex gap-10 max-w-[1850px] px-1.5 mx-auto  fixed top-0 bg-black text-white">
        <button onClick={() => SOCKET.logUsers()}>log users</button>
        <button onClick={() => SOCKET.logLobbies()}>log lobbies</button>

        <button
          onClick={() =>
            SOCKET.sendPlaylistTracks({
              id: lobbyData.id  ,
              playlistTunes,
            })
          }
        >
          send playlist
        </button>
      </div> */}
      <div className="max-w-screen-xl mx-auto my-20">
        <Navbar />
        <Profile user={userData} users={lobbyUsers} />
        <div className="max-w-[1280px] mx-auto p-1.5">
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
            <div>
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
                          className="block relative z-10 p-0 leading-none
                      max-w-[185px] overflow-hidden whitespace-nowrap text-ellipsis
                      text-base font-medium tracking-normal text-spotify-text
                      "
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

              <button
                className="block px-5 py-1 mt-10 border rounded-3xl border-spotify-text max-w-max"
                onClick={() =>
                  createUserPlaylist({
                    ...userData,
                    playlistTunes: lobbyData.tracks,
                  })
                }
              >
                {" "}
                create playlist on account
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
