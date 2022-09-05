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

  console.log(userData);

  return (
    <>
      <div className="w-full max-w-6xl mx-auto my-10">
        <button
          onClick={() => fetchUserDetails(token, setUserData)}
        >
          CLICK MEEEE
        </button>
        <div>
          <header>Name: {userData?.display_name}</header>
          <img
            src={userData?.image}
            className="h-[100px] w-[100px] rounded-full object-cover"
          />
        </div>
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
