import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { deleteAppointment } from "../store/appointments";

export default function AppointmentsList() {
  const appointments = useAppSelector((state) => state.appointments);
  const dispatch = useAppDispatch();
  return (
    <ul>
      {appointments.map((appointment) => (
        <li key={appointment.id}>
          Doctor:{""}
          {appointment.doctor}
          Date:{""}
          {appointment.appointmentDate.toLocaleString()}
          <button onClick={() => dispatch(deleteAppointment(appointment.id))}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}
