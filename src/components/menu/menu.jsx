import { useState } from "react";
import DeskMenu from "./desktopmenu/desk";
import { chartArcs } from "../../ui/chartArcs";
import { chartPie } from "../../ui/chartPie";
import { currencyDollar } from "../../ui/dollarIcon";
import { coin } from "../../ui/coin";
import { layoutDashboard } from "../../ui/dashboard";
import { settings } from "../../ui/settIcon";
const NavItems = [
  { item: "dashboard", id: "dash ", icon: layoutDashboard },
  { item: "transactions", id: "trans", icon: coin },
  { item: "budget", id: "budget ", icon: chartArcs },
  { item: "analytics", id: "analytics", icon: chartPie },
];
export function GenUL() {
  return (
    <div className="flex flex-col justify-between h-screen gap-10 ">
      <ul className="flex flex-col justify-normal gap-5">
        {NavItems.map((item) => (
          <li key={item.id} className="NvItem hover:bg-gray-100">
            {item.icon()}
            {item.item}
          </li>
        ))}
      </ul>
      <div className="NvItem  justify-self-end w-full hover:bg-gray-100">
        {settings()}
        <span>settings</span>
      </div>
    </div>
  );
}
export default function Navigation() {
  return (
    <>
      <DeskMenu />
    </>
  );
}
