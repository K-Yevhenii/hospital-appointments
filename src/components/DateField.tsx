import type { FieldRenderProps } from "react-final-form";
import { useForm } from "react-final-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FormControl } from "@mui/material";
import type { Dayjs } from "dayjs";

interface Props extends FieldRenderProps<Dayjs | null, HTMLElement> {
  label: string;
  className?: string;
}

export default function DateField({
  className,
  input: { name, value },
  label,
}: Props) {
  const { change } = useForm();

  return (
    <FormControl className={className} fullWidth>
      <DatePicker
        label={label}
        value={value || null}
        onChange={(newValue) => change(name, newValue)}
        slotProps={{
          textField: {
            fullWidth: true,
            variant: "outlined",
          },
        }}
      />
    </FormControl>
  );
}
