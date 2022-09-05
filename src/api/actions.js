import * as api from "./index.js";

const getCookie = () => {
  let x = window.cookie;
  console.log(x);
};

const fetchRandomArtist = async (setRandomArtist) => {
  try {
    const { data } = await api.fetchRandomArtist();
    setRandomArtist(data.data);
  } catch (error) {
    console.log(error);
  }
};

const fetchUserDetails = async (user, next) => {
  console.log(getCookie());
  try {
    const { data } = await api.fetchUserDetails(user);
    next(data);
  } catch (error) {
    console.log(error);
  }
};

const fetchUserPlaylists = async (id, next) => {
  try {
    const { data } = await api.fetchUserPlaylists(id);
    next(data);
  } catch (error) {
    console.log(error);
  }
};

const setUserCookie = async (cookie) => {
  try {
    await api.setUserCookie(cookie);
  } catch (error) {}
};

export {
  fetchRandomArtist,
  fetchUserDetails,
  fetchUserPlaylists,
  setUserCookie,
};
