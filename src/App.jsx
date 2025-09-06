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
    <div className="grid  grid-cols-1 lg:grid-cols-[20%_80%]">
      <Navigation active={active} setActive={setActive} />
      {ActiveComponent ? <ActiveComponent /> : <p>not found</p>}
    </div>
  );
}
