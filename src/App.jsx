import { useState } from "react";
import Navigation from "./components/menu/menu.jsx";
import DashBoard from "./components/dashboard/dash.jsx";
import Transactions from "./components/transactions/trans.jsx";
import Budget from "./components/budget/budget.jsx";
import Analytics from "./components/analytics/index.jsx";
export default function App() {
  const [active, setActive] = useState("DashBoard");
  const Comps = { DashBoard, Transactions, Budget, Analytics };
  const ActiveComponent = Comps[active];
  return (
    <div className=" relative h-full flex flex-col lg:flex-row gap-5">
      <Navigation active={active} setActive={setActive} />
      <div
        data-slot={`${ActiveComponent.name}`}
        className="py-5 lg:py-10 w-full px-5 h-screen lg:overflow-y-scroll flex flex-col justify-start gap-10"
      >
        {ActiveComponent ? <ActiveComponent /> : <p>not found</p>}
      </div>
    </div>
  );
}
