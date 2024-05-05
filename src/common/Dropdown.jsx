import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MenuProps } from "../utils";

export default function Dropdown(props) {
  const { label, name, value, onChange, options = [] } = props;
  return (
    <FormControl fullWidth size="small" margin="dense">
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        labelId="select-label"
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        MenuProps={MenuProps}
      >
        <MenuItem value="" sx={{ color: "GrayText" }}>
          <em>None</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
