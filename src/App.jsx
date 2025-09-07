import { useState } from "react";
import Navigation from "./components/menu/menu.jsx";
import DashBoard from "./components/dashboard/dash.jsx";
import Transactions from "./components/transactions/trans.jsx";
import Budget from "./components/budget/budget.jsx";
import Analytics from "./components/analytics/index.jsx";
export default function App() {
  const [active, setActive] = useState("Budget");
  const Comps = { DashBoard, Transactions, Budget, Analytics };
  const ActiveComponent = Comps[active];
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <Navigation active={active} setActive={setActive} />
      <div className="py-10 w-full px-5 h-screen overflow-y-scroll">
        {ActiveComponent ? <ActiveComponent /> : <p>not found</p>}
      </div>
    </div>
  );
}
