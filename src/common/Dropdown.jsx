import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Dropdown(props) {
  const { label, value, onChange, options = [] } = props;
  return (
    <FormControl fullWidth size="small" margin="dense">
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        labelId="select-label"
        label={label}
        value={value}
        onChange={onChange}
      >
        <MenuItem value="">
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
