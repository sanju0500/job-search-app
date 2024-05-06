import Grid from "@mui/material/Grid";
import InputField from "../common/InputField";
import Dropdown from "../common/Dropdown";
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../store/globalSlice";
import {
  roleOptions,
  minExpOptions,
  jobTypeOptions,
  minBasePayOptions,
} from "../utils";

const Search = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((store) => store.global);

  const updateFilters = (e) => {
    dispatch(setFilters({ field: e?.target?.name, value: e?.target?.value }));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Dropdown
          label="Role"
          name="role"
          value={filters?.role}
          onChange={updateFilters}
          options={roleOptions}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Dropdown
          label="Min. Experience"
          name="minExp"
          value={filters?.minExp}
          onChange={updateFilters}
          options={minExpOptions}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Dropdown
          label="Remote/Onsite"
          name="jobType"
          value={filters?.jobType}
          onChange={updateFilters}
          options={jobTypeOptions}
        />
      </Grid>

      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Dropdown
          label="Min. Base Pay"
          name="minBasePay"
          value={filters?.minBasePay}
          onChange={updateFilters}
          options={minBasePayOptions}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <InputField
          label="Company Name"
          name="company"
          value={filters?.company}
          onChange={updateFilters}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <InputField
          label="Location"
          name="location"
          value={filters?.location}
          onChange={updateFilters}
          disabled={filters?.jobType === jobTypeOptions[0]}
        />
      </Grid>
    </Grid>
  );
};

export default Search;
