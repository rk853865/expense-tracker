import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot from ReactDOM
import App from "./App";
import "./index.css";
import Modal from "react-modal";

// Set modal root for accessibility
Modal.setAppElement("#root");

// Get the root element from index.html
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App using createRoot (React 18+)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
