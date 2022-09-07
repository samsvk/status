import * as api from "./index.js";

const fetchRandomArtist = async (setRandomArtist) => {
  try {
    const { data } = await api.fetchRandomArtist();
    setRandomArtist(data.data);
  } catch (error) {
    console.log(error);
  }
};

const fetchUserDetails = async (next) => {
  try {
    const { data } = await api.fetchUserDetails();
    next(data);
  } catch (error) {
    console.log(error);
  }
};

const getUserPlaylistTracks = async (userObj, next) => {
  try {
    const { data } = await api.getUserPlaylistTracks(userObj);
    next(data.data);
  } catch (error) {
    console.log(error);
  }
};

const createUserPlaylist = async (userObj) => {
  try {
    const { data } = await api.createUserPlaylist(userObj);
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
  setUserCookie,
  getUserPlaylistTracks,
  createUserPlaylist,
};
