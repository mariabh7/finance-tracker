import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { Navigate } from "react-router";
import DashBoard from "./components/dashboard/dash.jsx";
import Transactions from "./components/transactions/trans.jsx";
import Budget from "./components/budget/budget.jsx";
import Analytics from "./components/analytics/index.jsx";
import Settings from "./components/settings/settings.jsx";
import App from "./App.jsx";
import Signup from "./components/signUp/signup.jsx";
const routes = createBrowserRouter([
  { path: "/signup", element: <Signup /> },
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: "dashboard", element: <DashBoard /> },
      { path: "transactions", element: <Transactions /> },
      { path: "budget", element: <Budget /> },
      { path: "analytics", element: <Analytics /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
