import dayjs from "dayjs";

export const validateIsNotPastDate = (appointmentDate?: Date | string) => {
  if (!appointmentDate) return undefined;
  const selectedDay = dayjs(appointmentDate);
  if (selectedDay.isBefore(dayjs(), "day")) {
    return "Date cannot be in the past";
  }
  return undefined;
};

export const validateSelectedDoctor = (value: string) => {
  if (!value) {
    return "Doctor not selected";
  }
  return undefined;
};
