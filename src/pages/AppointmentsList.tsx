import dayjs from "dayjs";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { deleteAppointment, editAppointment } from "../store/appointments";

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
          {dayjs(appointment.appointmentDate).format("DD/MM/YYYY")}
          <button onClick={() => dispatch(deleteAppointment(appointment.id))}>
            Remove
          </button>
          <button onClick={() => dispatch(editAppointment(appointment))}>
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
}
