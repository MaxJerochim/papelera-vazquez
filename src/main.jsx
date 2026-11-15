import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

// Solo se carga el peso 400 en alfabeto latino (es el que usa el diseño actual)
import "@fontsource/manrope/latin-400.css";
import "./styles/global.css";
import "./styles/variables.css";
import "./styles/animations.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);