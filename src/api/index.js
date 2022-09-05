import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true,
});

export const fetchRandomArtist = () => API.get("/home");
export const fetchUserDetails = (user) =>
  API.get(`/getUser/?at=${user}`);
export const fetchUserPlaylists = (id) =>
  API.post(`/getUserPlaylist/`, id);

export const setUserCookie = (cookie) =>
  API.get(`/setCookie/?cookie=${cookie}`);
