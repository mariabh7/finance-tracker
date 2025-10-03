import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import { Navigate } from "react-router";
import DashBoard from "../components/dashboard/dash.jsx";
import Transactions from "../components/transactions/trans.jsx";
import Budget from "../components/budget/budget.jsx";
import Analytics from "../components/analytics/index.jsx";
import Settings from "../components/settings/settings.jsx";
import App from "../App.jsx";
import Signup from "../components/signUp/signup.jsx";
import { SignUpForm } from "../components/signUp/signup.jsx";
import { LogInForm } from "../components/signUp/signup.jsx";
import ErrorPage from "../components/Error/error.jsx";
import Landingpage from "../components/landingPage/landingpage.jsx";
const routes = createBrowserRouter([
  // route objects
  {
    path: "/",
    errorElement: <ErrorPage />,
    Component: Landingpage,
  },
  {
    path: "/auth",
    Component: Signup,
    children: [
      { index: true, path: "signup", Component: SignUpForm },
      { path: "login", Component: LogInForm },
    ],
  },
  {
    path: "/app",

    Component: App, // componeent that will render
    children: [
      { index: true, element: <Navigate to={"/app/dashboard"} /> },
      { path: "dashboard", Component: DashBoard },
      { path: "transactions", Component: Transactions },
      { path: "budget", Component: Budget },
      { path: "analytics", Component: Analytics },
      { path: "settings", Component: Settings },
    ],
  },
]);
export default routes;
