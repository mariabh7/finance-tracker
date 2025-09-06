import { useState } from "react";
import DeskMenu from "./desktopmenu/desk";
import { chartArcs } from "../../ui/chartArcs";
import { chartPie } from "../../ui/chartPie";
import { currencyDollar } from "../../ui/dollarIcon";
import { coin } from "../../ui/coin";
import { layoutDashboard } from "../../ui/dashboard";
import { settings } from "../../ui/settIcon";

const NavItems = [
  { item: "dashboard", id: "DashBoard", icon: layoutDashboard },
  { item: "transactions", id: "Transactions", icon: coin },
  { item: "budget", id: "Budget", icon: chartArcs },
  { item: "analytics", id: "Analytics", icon: chartPie },
];
export function GenUL({ active, setActive }) {
  function handlePages(itemId) {
    setActive(itemId);
  }
  return (
    <div className="flex flex-col justify-between h-screen gap-10 ">
      <ul className="flex flex-col justify-normal gap-5">
        {NavItems.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              handlePages(item.id);
            }}
            className={`lis ${
              active === item.id ? "activeItem" : "NvItem  hover:bg-gray-100"
            }`}
          >
            {active === item.id ? item.icon("white") : item.icon("black")}
            {item.item}
          </li>
        ))}
      </ul>
      <div className="lis NvItem justify-self-end w-full hover:bg-gray-100">
        {settings()}
        <span>settings</span>
      </div>
    </div>
  );
}
export default function Navigation({ active, setActive }) {
  return (
    <>
      <DeskMenu active={active} setActive={setActive} />
    </>
  );
}
