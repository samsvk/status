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

  console.log(userData);

  useEffect(() => {
    fetchUserDetails(setUserData);
  }, []);

  return (
    <>
      <Grid />
      <div className="w-full max-w-6xl mx-auto my-10">
        {/* <button
          onClick={() => fetchUserDetails(token, setUserData)}
        >
          CLICK MEEEE
        </button> */}
        <div>
          <header>Name: {userData?.name}</header>
          <img
            src={userData?.image}
            className="h-[100px] w-[100px]  object-cover"
          />
        </div>
        <div className="flex gap-10 mt-10">
          {userData?.playlists?.map((playlist, index) => (
            <div key={playlist.id}>
              <img
                src={playlist.image}
                className="h-[80px] w-[80px]  object-cover"
              />
              <h1>{playlist?.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
