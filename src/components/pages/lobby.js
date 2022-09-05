import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  fetchUserDetails,
  fetchUserPlaylists,
} from "../../api/actions";
export default function Lobby() {
  const [searchParams] = useSearchParams();
  // const user = searchParams.get("user");
  const token = searchParams.get("access_token");
  const [userData, setUserData] = useState();
  const [playlists, setPlaylists] = useState();

  return (
    <>
      <div>
        Lobby, user shite:
        <br />
        <div className="max-w-[550px] w-full">{token}</div>
        <br /> <br />
        <button
          onClick={() => fetchUserDetails(token, setUserData)}
        >
          CLICK MEEEE
        </button>
        <br /> <br /> <br /> <br /> <br /> <br />
        {userData?.display_name}
        <img
          src={userData?.images[0]?.url}
          className="h-[100px] w-[100px]"
        />
        <div
          onClick={() =>
            fetchUserPlaylists(
              {
                access_token: token,
                id: userData.id,
              },
              setPlaylists
            )
          }
        >
          GET USER PLAYLISTS
          <div>
            {playlists?.map((playlist, index) => (
              <div>
                <img
                  src={playlist?.images[0]?.url}
                  className="h-[200px] w-[200px]"
                />
                <h1>{playlist?.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
