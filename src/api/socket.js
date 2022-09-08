import { io } from "socket.io-client";

class SOCKET {
  constructor() {
    this.socket = io("http://localhost:3001", {
      forceNew: true,
    });
  }

  logUser(param) {
    this.socket.on("logUser", ({ data }) => {
      console.log(data);
    });
  }
}

const instance = new SOCKET();
export default instance;
