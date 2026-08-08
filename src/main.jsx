import React from "react";
import { createRoot } from "react-dom/client";
import BeekeepingApp from "./App.jsx";
import "./fit-screen.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BeekeepingApp />
  </React.StrictMode>
);
