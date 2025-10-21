import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { NavLink as RouterLink } from "react-router-dom";
import routes from "../../constants/routes";
import "./style.css";

export default function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Link
          color="inherit"
          component={RouterLink}
          to={routes.CREATE_APPOINTMENT}
          end
        >
          Create
        </Link>
        <Link
          color="inherit"
          component={RouterLink}
          to={routes.APPOINTMENTS}
          end
        >
          Appointments
        </Link>
      </Toolbar>
    </AppBar>
  );
}
