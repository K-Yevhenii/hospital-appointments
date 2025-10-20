import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import doctors from "../mocks/doctors";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultipleSelectCheckmarks() {
  const [selectedDoctors, setSelectedDoctors] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedDoctors>) => {
    const {
      target: { value },
    } = event;
    setSelectedDoctors(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="doctors-select-label">Tag</InputLabel>
        <Select
          labelId="doctors-select"
          id="doctors-select"
          multiple
          value={SelectDoctors}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {doctors.map((doctor) => (
            <MenuItem key={SelectDoctors.name} value={doctors.name}>
              <Checkbox checked={names.includes(doctors.name)} />
              <ListItemText primary={`${doctor.name} — ${doctor.specialty}`} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
