import dayjs from "dayjs";
import type Appointment from "../types/appointment";

export const filterAppointmentsByDate = (
  appointments: Appointment[],
  date: Date
) =>
  appointments.filter(({ appointmentDate }) =>
    dayjs(date).isSame(dayjs(appointmentDate), "day")
  );

export const filterAppointmentsByDoctorNames = (
  names: string[],
  appointments: Appointment[]
): Appointment[] => appointments.filter(({ doctor }) => names.includes(doctor));

export const getAppointmentsAmount = (appointments: Appointment[]): number =>
  appointments.length;
