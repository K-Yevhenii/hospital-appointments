import dayjs from "dayjs";
import type Appointment from "../types/appointment";

const filterAppointmentsByDate = (appointments: Appointment[], date: Date) =>
  appointments.filter(({ appointmentDate }) =>
    dayjs(date).isSame(dayjs(appointmentDate), "day")
  );

const filterAppointmentsByDoctorNames = (
  names: string[],
  appointments: Appointment[]
): Appointment[] =>
  appointments.filter(({ doctor }) =>
    names.some((name) => doctor.toLowerCase().includes(name.toLowerCase()))
  );

const getAppointmentsAmount = (appointments: Appointment[]): number =>
  appointments.length;
