import { useState } from "react";
import DeskMenu from "./desktopmenu/desk";
import { chartArcs } from "../../assets/chartArcs";
import { chartPie } from "../../assets/chartPie";
import { currencyDollar } from "../../assets/dollarIcon";
import { coin } from "../../assets/coin";
import { layoutDashboard } from "../../assets/dashboard";
export const NavItems = [
  { item: "dashboard", id: "dash ", icon: layoutDashboard },
  { item: "transactions", id: "budget ", icon: coin },
  { item: "budget", id: "dash ", icon: chartArcs },
  { item: "analytics", id: "dash ", icon: chartPie },
];
function Navigation() {
  return (
    <>
      <DeskMenu />
    </>
  );
}

export default Navigation;
