import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle.tsx";
import { Home, LayoutDashboard } from "lucide-react";

export function TopBar() {
  return (
    <Grid
      container
      className={
        "p-2 bg-transparent bg-gradient-to-r from-blue-700 via-pink-600 to-blue-600" +
        "text-white border-2 rounded-2xl relative z-50 shadow-md"
      }
    >
      <Grid item xs={3}>
        <h1 className={"text-4xl"}>Wg-Manager</h1>
      </Grid>
      <Grid item xs={9}>
        <div className={"flex justify-end"}>
          <Link
            to="/"
            className={
              "ml-4 mr-8 hover:bg-accent h-12 w-12 rounded-full flex justify-center items-center rounded-full border"
            }
          >
            <Home />
          </Link>
          <Link
            to="/dashboard"
            className={
              "ml-4 mr-8 hover:bg-accent h-12 w-12 rounded-full flex justify-center items-center rounded-full border"
            }
          >
            <LayoutDashboard />
          </Link>
          <ModeToggle />
        </div>
      </Grid>
    </Grid>
  );
}
