import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true,
});

export const fetchRandomArtist = () => API.get("/home");
export const fetchUserDetails = () => API.get(`/getUser/`);

export const setUserCookie = (cookie) =>
  API.get(`/setCookie/?cookie=${cookie}`);

export const getUserPlaylistTracks = (userObj) =>
  API.post(`/getUserPlaylistTracks/`, userObj);

export const createUserPlaylist = (userObj) =>
  API.post(`/createUserPlaylist/`, userObj);
