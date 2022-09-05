import * as api from "./index.js";

const fetchRandomArtist = async (setRandomArtist) => {
  try {
    const { data } = await api.fetchRandomArtist();
    setRandomArtist(data.data);
  } catch (error) {
    console.log(error);
  }
};

const fetchUserDetails = async (user, next) => {
  try {
    const { data } = await api.fetchUserDetails(user);
    console.log(data);
    next(data);
  } catch (error) {
    console.log(error);
  }
};

export { fetchRandomArtist, fetchUserDetails };
