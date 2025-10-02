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
import { SignUpForm } from "./components/signUp/signup.jsx";
import { LogInForm } from "./components/signUp/signup.jsx";
const routes = createBrowserRouter([
  // route objects
  {
    path: "/auth",
    Component: Signup,
    children: [
      { index: true, path: "signup", Component: SignUpForm },
      { path: "login", Component: LogInForm },
    ],
  },
  {
    Component: App, // componeent that will render
    children: [
      { index: true, Component: DashBoard },
      { path: "transactions", Component: Transactions },
      { path: "budget", Component: Budget },
      { path: "analytics", Component: Analytics },
      { path: "settings", Component: Settings },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
