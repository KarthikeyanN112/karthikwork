import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

// Import global CSS
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Bootstrap styles

// Create root and render App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
