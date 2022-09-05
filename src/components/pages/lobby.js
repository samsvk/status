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
  const [playlists, setPlaylists] = useState();

  useEffect(() => {
    if (token) {
      setUserCookie(token);
      navigate("/lobby");
    }
  }, [token]);

  console.log(userData?.id);

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
        {/* {playlists?.map((playlist, index) => (
          <div>
            <img
              src={playlist?.images[0]?.url}
              className="h-[200px] w-[200px]"
            />
            <h1>{playlist?.name}</h1>
          </div>
        ))} */}
      </div>
    </>
  );
}
