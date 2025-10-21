import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice, nanoid } from "@reduxjs/toolkit";
import type Appointment from "../types/appointment";
import type { CreateAppointmentPayload } from "../types/appointment";

const INITIAL_VALUE: Appointment[] = [];

const appointmentSlice = createSlice({
  name: "appointments",
  initialState: INITIAL_VALUE,
  reducers: {
    createAppointment: {
      reducer(state, action: PayloadAction<Appointment>) {
        state.push(action.payload);
      },
      prepare(data: CreateAppointmentPayload) {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },
    deleteAppointment(state, action: PayloadAction<string>) {
      return state.filter((appointment) => appointment.id !== action.payload);
    },
    editAppointment(state, action: PayloadAction<Appointment>) {
      return state.map((appointment) =>
        appointment.id === action.payload.id
          ? { ...appointment, ...action.payload }
          : appointment
      );
    },
  },
});

export const { createAppointment, deleteAppointment, editAppointment } =
  appointmentSlice.actions;
export default appointmentSlice.reducer;
