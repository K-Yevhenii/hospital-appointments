export default interface Appointment {
  id: string;
  appointmentDate: Date;
  doctor: string;
}

export type CreateAppointmentPayload = Omit<Appointment, "id">;
