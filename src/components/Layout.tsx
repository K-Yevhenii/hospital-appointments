import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import { Link as RouterLink, Outlet } from "react-router-dom";
import routes from "../constants/routes";

export default function Layout() {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Link
            color="inherit"
            component={RouterLink}
            to={routes.CREATE_APPOINTMENT}
          >
            Create
          </Link>
          <Link color="inherit" component={RouterLink} to={routes.APPOINTMENTS}>
            Appointments
          </Link>
        </Toolbar>
      </AppBar>
      <main>
        <Outlet />
      </main>
    </>
  );
}
