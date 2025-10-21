import CreateAppointmentForm from "./components/CreateAppointmentForm";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { BrowserRouter, Routes, Route } from "react-router";
import routes from "./constants/routes";
import Layout from "./components/Layout";
import AppointmentsList from "./pages/AppointmentsList";
import { Provider } from "react-redux";
import store from "./store";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route
                path={routes.APPOINTMENTS}
                element={<AppointmentsList />}
              />
              <Route
                path={routes.CREATE_APPOINTMENT}
                element={<CreateAppointmentForm />}
              />
            </Route>
          </Routes>
        </LocalizationProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
