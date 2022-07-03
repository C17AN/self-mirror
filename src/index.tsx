import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/reset.css";
import "./styles/global.css";
import { AnimatePresence } from "framer-motion";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <AnimatePresence>
    <App />
  </AnimatePresence>
);
