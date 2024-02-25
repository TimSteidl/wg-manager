import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/login.tsx";
import Register from "@/pages/register.tsx";
import Dashboard from "@/pages/dashboard.tsx";
import Home from "@/pages/home.tsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: Home,
  },
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/register",
    element: Register,
  },
  {
    path: "/dashboard",
    element: Dashboard,
  },
]);
