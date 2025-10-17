import { Form, Field } from "react-final-form";
import dayjs, { Dayjs } from "dayjs";
import DateField from "./DateField";
import doctors from "../mocks/doctors";
import SelectField from "./SelectField";
import { useAppDispatch } from "../hooks/redux";
import { createAppointment } from "../store/appointments";

interface FormValues {
  appointmentDate: Dayjs;
  doctor: string;
}

const doctorOptions = doctors.map(({ name, specialty }) => ({
  value: name,
  label: `${name}-${specialty}`,
}));

export default function CreateAppointmentForm() {
  const dispatch = useAppDispatch();
  const handleCreateAppointment = ({
    appointmentDate,
    ...values
  }: FormValues) => {
    const appointment = {
      ...values,
      appointmentDate: appointmentDate.toDate(),
    };
    dispatch(createAppointment(appointment));
  };

  return (
    <Form<FormValues>
      onSubmit={handleCreateAppointment}
      initialValues={{ appointmentDate: dayjs() }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="appointmentDate"
            component={DateField}
            label="Appointment date"
          />
          <Field
            component={SelectField}
            id="doctor"
            name="doctor"
            label="Doctor"
            options={doctorOptions}
            sx={{ mb: 2 }}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    />
  );
}
