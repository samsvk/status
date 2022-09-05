import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchUserDetails } from "../../api/actions";
export default function Lobby() {
  const [searchParams] = useSearchParams();
  // const user = searchParams.get("user");
  const token = searchParams.get("access_token");
  const [userData, setUserData] = useState();

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
      </div>
    </>
  );
}
