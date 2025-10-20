export default interface Appointment {
  id: string;
  appointmentDate: string;
  doctor: string;
}

export type CreateAppointmentPayload = Omit<Appointment, "id">;
