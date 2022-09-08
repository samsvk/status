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
}

const instance = new SOCKET();
export default instance;
