import { useState, useEffect } from "react";
import MobMenu from "./mobilemenu/mob";
import DeskMenu from "./desktopmenu/desk";
import { chartArcs } from "../ui/chartArcs";
import { chartPie } from "../ui/chartPie";
import { NavLink } from "react-router-dom";
import { coin } from "../ui/coin";
import { layoutDashboard } from "../ui/dashboard";
import { settings } from "../ui/settIcon";
const NavItems = [
  { item: "dashboard", id: "DashBoard", icon: layoutDashboard },
  { item: "transactions", id: "Transactions", icon: coin },
  { item: "budget", id: "Budget", icon: chartArcs },
  { item: "analytics", id: "Analytics", icon: chartPie },
];
export function GenUL() {
  return (
    <div className="flex flex-col justify-between h-full gap-10 ">
      <ul className="flex flex-col justify-normal gap-5">
        {NavItems.map((item) => (
          <NavLink
            to={`/${item.item != "dashboard" ? item.item : ""}`}
            key={item.item}
            className={({ isActive }) =>
              `lis ${isActive ? "activeItem" : "NvItem hover:bg-gray-100"}`
            }
          >
            {({ isActive }) => (
              <>
                {item.icon(isActive ? "white" : "black")}
                {item.item}
              </>
            )}
          </NavLink>
        ))}
      </ul>
      <div className="">
        <NavLink
          to={`/settings`}
          className={"lis NvItem justify-self-end w-full hover:bg-gray-100"}
        >
          {settings()}
          <span>settings</span>
        </NavLink>
      </div>
    </div>
  );
}
export default function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);
  return <>{!isMobile ? <DeskMenu /> : <MobMenu />}</>;
}
