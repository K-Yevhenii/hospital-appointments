import { Navigate } from "react-router";
import routes from "../constants/routes";
export default function HomePage() {
  return <Navigate to={routes.APPOINTMENTS} />;
}
