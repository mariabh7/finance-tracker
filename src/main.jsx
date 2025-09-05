import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import DesktopMenu from "./components/desktopmenu/menu.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DesktopMenu />
  </StrictMode>
);
