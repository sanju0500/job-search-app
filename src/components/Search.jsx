import { useState } from "react";
import Grid from "@mui/material/Grid";
import InputField from "../common/InputField";
import Dropdown from "../common/Dropdown";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleDropdownChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Dropdown
          label="Role"
          value={selectValue}
          onChange={handleDropdownChange}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Dropdown
          label="Remote/Onsite"
          value={selectValue}
          onChange={handleDropdownChange}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Dropdown
          label="Min. Experience"
          value={selectValue}
          onChange={handleDropdownChange}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Dropdown
          label="Min. Base Pay"
          value={selectValue}
          onChange={handleDropdownChange}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <InputField
          label="Company Name"
          value={inputValue}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <InputField
          label="Location"
          value={inputValue}
          onChange={handleInputChange}
        />
      </Grid>
    </Grid>
  );
};

export default Search;
