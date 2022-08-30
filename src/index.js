import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./global.css";

function App() {
  return <div className="App">12345</div>;
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
