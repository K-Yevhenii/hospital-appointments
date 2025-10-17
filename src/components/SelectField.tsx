import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import type { SxProps } from "@mui/system";
import type { FieldRenderProps } from "react-final-form";

interface Props extends FieldRenderProps<string, HTMLElement> {
  label: string;
  className?: string;
  options: { value: string; label: string }[];
  id: string;
  sx?: SxProps;
}

export default function SelectField({
  id,
  label,
  options,
  input,
  sx,
  className,
}: Props) {
  return (
    <FormControl fullWidth sx={sx} className={className}>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select labelId={`${id}-label`} id={id} {...input}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
