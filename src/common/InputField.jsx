import TextField from "@mui/material/TextField";

export default function InputField(props) {
  const { label, value, onChange } = props;
  return (
    <TextField
      fullWidth
      size="small"
      margin="dense"
      label={label}
      value={value}
      onChange={onChange}
    />
  );
}
