import { io } from "socket.io-client";

class SOCKET {
  constructor() {
    this.socket = io("http://localhost:3001", {
      forceNew: true,
    });
  }

  joinLobby(id) {
    this.socket.emit("joinLobby", id);
  }

  updateLobbyData(next) {
    this.socket.on("updateLobbyData", (data) => {
      next(data);
    });
  }

  sendPlaylistTracks(tracks, next) {
    this.socket.emit("sendPlaylistTracks", tracks);
  }

  setLobbyUsers(next) {
    this.socket.on("setLobbyUsers", (data) => {
      next(data);
    });
  }

  logUsers() {
    this.socket.emit("logUsers");
  }
  logLobbies() {
    this.socket.emit("logLobbies");
  }
}

const instance = new SOCKET();
export default instance;
