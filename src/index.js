import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./global.css";
import { getTest } from "./api/actions";

function App() {
  return (
    <div className="App">
      <button
        className="px-5 py-1 m-10 text-black bg-white rounded-full"
        onClick={() => getTest()}
      >
        DO THIS
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
