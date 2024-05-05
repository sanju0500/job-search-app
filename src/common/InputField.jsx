import TextField from "@mui/material/TextField";

export default function InputField(props) {
  const { label, name, value, onChange } = props;
  return (
    <TextField
      fullWidth
      size="small"
      margin="dense"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
