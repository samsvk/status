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

  const tracks = [
    {
      added: "2022-08-24T14:26:16Z",
      url: "https://open.spotify.com/track/7hoLG1AYY3zwkLdWLO57Of",
      name: "One's Own",
      image: "https://i.scdn.co/image/ab67616d0000b27336a5035c6076518f3e5558c8",
      id: "7hoLG1AYY3zwkLdWLO57Of",
      artists: ["Koven"],
      uri: "spotify:track:7hoLG1AYY3zwkLdWLO57Of",
      length: 266404,
      album: "Sometimes We Are",
    },
    {
      added: "2022-08-24T14:29:17Z",
      url: "https://open.spotify.com/track/03HEvpOcpBuIV1QAonZt8t",
      name: "On My Mind",
      image: "https://i.scdn.co/image/ab67616d0000b273d2a0863bcae0479dda466b7d",
      id: "03HEvpOcpBuIV1QAonZt8t",
      artists: ["Macca", "Loz Contreras"],
      uri: "spotify:track:03HEvpOcpBuIV1QAonZt8t",
      length: 338428,
      album: "Point of Origin, Vol. 2",
    },
    {
      added: "2022-08-24T14:28:53Z",
      url: "https://open.spotify.com/track/4FIVgd968FSqR0ourgJ1V4",
      name: "Your Way",
      image: "https://i.scdn.co/image/ab67616d0000b27317bdd6e3bdd6b32e44993400",
      id: "4FIVgd968FSqR0ourgJ1V4",
      artists: ["Netsky"],
      uri: "spotify:track:4FIVgd968FSqR0ourgJ1V4",
      length: 360000,
      album: "Your Way / Daydreamin",
    },
    {
      added: "2022-08-24T11:56:52Z",
      url: "https://open.spotify.com/track/6tWYDHCH8isT5MEjjQQGrE",
      name: "Ember - Hybrid Minds Remix",
      image: "https://i.scdn.co/image/ab67616d0000b2738af1203bd1f85fee3012b738",
      id: "6tWYDHCH8isT5MEjjQQGrE",
      artists: ["Camo & Krooked", "Hybrid Minds"],
      uri: "spotify:track:6tWYDHCH8isT5MEjjQQGrE",
      length: 342857,
      album: "MOSAIK REMIXED",
    },
    {
      added: "2022-08-24T14:28:17Z",
      url: "https://open.spotify.com/track/07NuQwlM6mQqpYQspsfcaA",
      name: "Emerald Waters - Zazu Remix",
      image: "https://i.scdn.co/image/ab67616d0000b273f66688e5a602f6da94d65762",
      id: "07NuQwlM6mQqpYQspsfcaA",
      artists: ["Chinensis", "ZAZU"],
      uri: "spotify:track:07NuQwlM6mQqpYQspsfcaA",
      length: 282083,
      album: "Liquicity Drum & Bass 2017",
    },
    {
      added: "2022-08-24T14:25:55Z",
      url: "https://open.spotify.com/track/6bsmYFwAy2Y8e5fkzOLPLR",
      name: "Like The Sun",
      image: "https://i.scdn.co/image/ab67616d0000b27325865536e2540c31cb61dd45",
      id: "6bsmYFwAy2Y8e5fkzOLPLR",
      artists: ["Fred V & Grafix"],
      uri: "spotify:track:6bsmYFwAy2Y8e5fkzOLPLR",
      length: 227586,
      album: "Oxygen",
    },
    {
      added: "2022-08-24T14:31:10Z",
      url: "https://open.spotify.com/track/5baQLiHIcy4Fsslxhvfo5V",
      name: "Visionary",
      image: "https://i.scdn.co/image/ab67616d0000b273454ddc31ae0fa1370183d52a",
      id: "5baQLiHIcy4Fsslxhvfo5V",
      artists: ["Rameses B"],
      uri: "spotify:track:5baQLiHIcy4Fsslxhvfo5V",
      length: 297639,
      album: "Visionary",
    },
    {
      added: "2022-08-24T11:57:06Z",
      url: "https://open.spotify.com/track/0zLtlhG9ael9NXiugonW7k",
      name: "Face To Face Again (The Joy) - Seba Remix",
      image: "https://i.scdn.co/image/ab67616d0000b273c9330a83492217ec635606ed",
      id: "0zLtlhG9ael9NXiugonW7k",
      artists: ["Kirsty Hawkshaw", "Seba"],
      uri: "spotify:track:0zLtlhG9ael9NXiugonW7k",
      length: 384398,
      album: "Face To Face Again (The Joy)",
    },
    {
      added: "2022-08-24T11:58:46Z",
      url: "https://open.spotify.com/track/200UULqHYtwIYleXNZgTGK",
      name: "Don't Let Go - Polygon Remix",
      image: "https://i.scdn.co/image/ab67616d0000b27315fe7c4be0867d63b2387e04",
      id: "200UULqHYtwIYleXNZgTGK",
      artists: ["Raise Spirit", "Polygon"],
      uri: "spotify:track:200UULqHYtwIYleXNZgTGK",
      length: 344046,
      album: "Don't Let Go (Polygon Remix)",
    },
    {
      added: "2022-08-24T14:29:32Z",
      url: "https://open.spotify.com/track/5ZTjnks2CsIIyByksjhix7",
      name: "Under The Sun - Original Mix",
      image: "https://i.scdn.co/image/ab67616d0000b273595e826853a7d74407e55e3e",
      id: "5ZTjnks2CsIIyByksjhix7",
      artists: ["Seba"],
      uri: "spotify:track:5ZTjnks2CsIIyByksjhix7",
      length: 373028,
      album: "Sine Language",
    },
    {
      added: "2022-08-24T14:31:47Z",
      url: "https://open.spotify.com/track/3Sx7CXto3iQWslynRFzRvn",
      name: "I Need the Night",
      image: "https://i.scdn.co/image/ab67616d0000b2736a38ee1a6106e9ffb23d4ee5",
      id: "3Sx7CXto3iQWslynRFzRvn",
      artists: ["Loadstar"],
      uri: "spotify:track:3Sx7CXto3iQWslynRFzRvn",
      length: 253793,
      album: "I Need the Night",
    },
    {
      added: "2022-08-27T16:12:31Z",
      url: "https://open.spotify.com/track/426PBf18jsetDLMztk1MMM",
      name: "Dreamcatcher",
      image: "https://i.scdn.co/image/ab67616d0000b273aa9bb894dc4453ea0d819453",
      id: "426PBf18jsetDLMztk1MMM",
      artists: ["Edlan", "Ella Noël"],
      uri: "spotify:track:426PBf18jsetDLMztk1MMM",
      length: 274489,
      album: "Dreamcatcher",
    },
    {
      added: "2022-08-29T17:08:08Z",
      url: "https://open.spotify.com/track/3QMR4TRPeeJLztrs71kLRm",
      name: "Avalon - VIP",
      image: "https://i.scdn.co/image/ab67616d0000b273ef083b1a9969bf2134779020",
      id: "3QMR4TRPeeJLztrs71kLRm",
      artists: ["Maduk"],
      uri: "spotify:track:3QMR4TRPeeJLztrs71kLRm",
      length: 290296,
      album: "Escapism - (Liquicity Presents)",
    },
    {
      added: "2022-08-24T11:58:33Z",
      url: "https://open.spotify.com/track/6SgI2TrZnKUindNeujSAW6",
      name: "Halcyon",
      image: "https://i.scdn.co/image/ab67616d0000b273d34bf8cb1d8ba9f9dd0fcac2",
      id: "6SgI2TrZnKUindNeujSAW6",
      artists: ["Hybrid Minds", "Grimm"],
      uri: "spotify:track:6SgI2TrZnKUindNeujSAW6",
      length: 341538,
      album: "Mountains",
    },
    {
      added: "2022-08-27T16:12:28Z",
      url: "https://open.spotify.com/track/5VxyIwQRhDMX08RPzkxQz6",
      name: "Take It In - Hybrid Minds Remix",
      image: "https://i.scdn.co/image/ab67616d0000b273293d8dc5d5699610c53db3a8",
      id: "5VxyIwQRhDMX08RPzkxQz6",
      artists: ["Feint", "Hybrid Minds", "Koven"],
      uri: "spotify:track:5VxyIwQRhDMX08RPzkxQz6",
      length: 320914,
      album: "Liquicity Drum & Bass 2017",
    },
    {
      added: "2022-08-28T13:12:23Z",
      url: "https://open.spotify.com/track/52fb3usXUKzxPy7unqwfLs",
      name: "Paradise Lost",
      image: "https://i.scdn.co/image/ab67616d0000b273ecdb8f824367a53468100faf",
      id: "52fb3usXUKzxPy7unqwfLs",
      artists: ["Yung Lean", "Ant Wan"],
      uri: "spotify:track:52fb3usXUKzxPy7unqwfLs",
      length: 227385,
      album: "Stardust",
    },
    {
      added: "2022-08-24T11:57:00Z",
      url: "https://open.spotify.com/track/29HKlqyzy3vnBJkdXbNiIt",
      name: "Let Me Feel",
      image: "https://i.scdn.co/image/ab67616d0000b273e20d752711f40985825a9d4e",
      id: "29HKlqyzy3vnBJkdXbNiIt",
      artists: ["Submatik", "Dualistic"],
      uri: "spotify:track:29HKlqyzy3vnBJkdXbNiIt",
      length: 272586,
      album: "Let Me Feel",
    },
    {
      added: "2022-08-24T14:27:39Z",
      url: "https://open.spotify.com/track/1M85o2ruB9uTj68dIXj6dJ",
      name: "Vagrant",
      image: "https://i.scdn.co/image/ab67616d0000b273cb5e9973c66bfd141e144f0e",
      id: "1M85o2ruB9uTj68dIXj6dJ",
      artists: ["Feint", "Veela"],
      uri: "spotify:track:1M85o2ruB9uTj68dIXj6dJ",
      length: 268571,
      album: "Vagrant",
    },
    {
      added: "2022-08-24T11:57:14Z",
      url: "https://open.spotify.com/track/4RUphASXlXEs8SJQvES7N0",
      name: "Station Six",
      image: "https://i.scdn.co/image/ab67616d0000b273f57980bf1a0ab726520fa6cc",
      id: "4RUphASXlXEs8SJQvES7N0",
      artists: ["Dualistic"],
      uri: "spotify:track:4RUphASXlXEs8SJQvES7N0",
      length: 300170,
      album: "Station Six",
    },
    {
      added: "2022-08-24T14:25:38Z",
      url: "https://open.spotify.com/track/7rKNoKsC4wi2Bwbc6lhVzD",
      name: "If I Smiled",
      image: "https://i.scdn.co/image/ab67616d0000b273a32671f6459142cba965edd7",
      id: "7rKNoKsC4wi2Bwbc6lhVzD",
      artists: ["Dawn Wall"],
      uri: "spotify:track:7rKNoKsC4wi2Bwbc6lhVzD",
      length: 275862,
      album: "You Remember",
    },
  ];

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

      <div className="max-w-5xl mx-auto">
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
            onClick={async () => {
              getUserPlaylistTracks(selected, setPlaylistTunes);
            }}
            className="block px-5 py-1 mt-5 border rounded-3xl border-spotify-text max-w-max"
          >
            Submit Songs
          </span>
        </div>

        <ul className="flex flex-col gap-2 p-10 mt-10 border-2 bg-spotify-bg border-spotify-text">
          {tracks?.map((item, index) => (
            <li className="grid grid-cols-5" key={index}>
              <div className="flex col-span-2 gap-4">
                <span className="w-4 h-max my-auto text-[14px] font-normal text-neutral-700/80 tracking-tight">
                  #{index + 1}
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
        <button
          className="block px-5 py-1 mt-10 border rounded-3xl border-spotify-text max-w-max"
          onClick={() => createUserPlaylist({ ...userData, playlistTunes })}
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
