import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./components/menu/menu.jsx";
export default function App() {
  return (
    <div className=" relative h-full flex flex-col lg:flex-row gap-5">
      <Navigation />
      <div className="py-5 mb-5 lg:mb-0 lg:py-10 w-full px-5 h-screen lg:overflow-y-scroll flex flex-col justify-start gap-10">
        <Outlet />
      </div>
    </div>
  );
}
