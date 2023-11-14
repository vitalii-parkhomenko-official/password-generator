import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(
    <React.StrictMode>
      <div style={{ width: "calc(100% / 3)", margin: "50px auto" }}>
        <App />
      </div>
    </React.StrictMode>
  );
