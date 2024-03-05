import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/login.tsx";
import Register from "@/pages/register.tsx";
import Dashboard from "@/pages/dashboard.tsx";
import Home from "@/pages/home.tsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
]);