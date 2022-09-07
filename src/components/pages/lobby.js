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
export default function Lobby() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("at");
  const [userData, setUserData] = useState();
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

  if (!userData) return null;
  return (
    <>
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

      <div className="relative max-w-[1100px] w-full mx-auto h-[500px] my-12 grid grid-cols-4 p-10">
        <div className="relative flex flex-col justify-center col-span-1 px-5 py-8 text-xl border-2 border-spotify-text bg-spotify-bg ">
          {/* after:absolute after:content-[''] after:w-full */}
          {/* after:h-full after:bottom-2 after:right-2 after:-z-10 */}
          {/* after:bg-spotify-green after:border-2 */}
          {/* after:border-spotify-text */}
          <header className="z-10 mx-auto">
            <div className="relative w-32 h-32 mx-auto">
              <img
                src={userData.image}
                className="relative block object-cover w-full h-full border-2 rounded-full drop-shadow-md border-spotify-text"
              />
            </div>
            <h1 className="w-full max-w-lg mt-2 text-xl font-normal leading-relaxed tracking-tight text-center text-spotify-text first-letter:uppercase">
              {userData.name}'s Profile
            </h1>
            <p className="text-center mx-auto text-[14px] flex-1 leading-4 font-normal text-neutral-700/80 tracking-tight flex gap-1 items-center">
              <span className="first-letter:uppercase">
                {userData.name}
              </span>{" "}
              has {userData.playlists.length} playlists
              available.
              {/* <span className="line-through">$0</span>
              It's completely{" "}
              <span className="font-medium text-black/80">
              free
              </span>
            forever. */}
            </p>

            <button className="mx-auto mt-3 flex items-center gap-4 px-5 py-1 text-[14px] font-normal leading-relaxed tracking-tight rounded-lg bg-spotify-green relative text-spotify-bg hover:shadow-lg duration-200">
              View Profile
            </button>
          </header>

          <section className="w-full h-full mt-3 bg-orange-500"></section>
        </div>
      </div>
    </>
  );
}

//  <div className="flex w-full gap-10 mx-auto my-10 max-w-max">
//  <div
//    className="flex items-center p-10 text-xl font-normal leading-relaxed tracking-tight border-2 border-spotify-text bg-spotify-bg relative
//         after:absolute after:content-[''] after:w-full after:h-full after:bottom-2 after:right-2 after:-z-10 after:bg-spotify-green after:border-2 after:border-spotify-text"
//  >
//      <header className="flex flex-col items-end justify-end mr-10 bg-orange-500 text-spotify-text w-max">
//        <div className="relative w-28 h-28 before:absolute before:content-[''] before:h-full before:w-full before:bg-spotify-bg before:bottom-1 before:right-1 before:border-2 before:border-spotify-text">
//          <img
//            src={userData.image}
//            className="relative block object-cover w-full h-full drop-shadow-md"
//          />
//        </div>
//      </header>
//      <div className="w-full h-full">
//        <div className="grid items-start grid-cols-3 gap-8 justify-evenly text-spotify-text w-max">
//          {userData?.playlists?.map((playlist, index) => {
//            const sel = selected.some(
//              (item) => item.id === playlist.id
//            );

//            return (
//              <div
//                key={playlist.id}
//                className="relative flex-1 w-full col-span-1"
//              >
//                <div className="flex flex-row items-center min-w-0">
//                  <div className="flex">
//                    <div
//                      onClick={() =>
//                        addSelected({
//                          name: playlist.name,
//                          id: playlist.id,
//                          length: playlist.length,
//                        })
//                      }
//                      className={`
//                           relative w-14 h-14 before:absolute before:content-[''] before:h-full before:w-full before:bg-spotify-bg before:bottom-1 before:right-1 before:border-2 ${
//                             sel
//                               ? "before:border-spotify-green"
//                               : "before:border-spotify-text"
//                           }`}
//                    >
//                      <img
//                        src={playlist.image}
//                        className="relative block object-cover w-14 h-14 min-h-14 min-w-14 drop-shadow-lg"
//                      />
//                    </div>
//                    <div className="inline-flex flex-col items-start justify-end ml-2 ">
//                      <h3 className="block text-left text-[14px] font-normal tracking-tight first-letter:uppercase text-ellipsis whitespace-nowrap overflow-hidden">
//                        {playlist.name}
//                      </h3>
//                      <p className="relative flex flex-wrap z-10 font-medium text-[10px] uppercase text-neutral-700/80  whitespace-nowrap">
//                        Songs: #{playlist.length}
//                      </p>
//                    </div>
//                  </div>
//                </div>
//              </div>
//            );
//          })}
//        </div>
//      </div>
//    </div>
//  </div>;
