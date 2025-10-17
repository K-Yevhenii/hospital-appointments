import { configureStore } from "@reduxjs/toolkit";
import appointments from "./appointments";
const INITIAL_VALUE = {
  appointments: [],
};

const store = configureStore({
  reducer: {
    appointments,
  },
  preloadedState: INITIAL_VALUE,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
