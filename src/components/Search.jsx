import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import InputField from "../common/InputField";
import Dropdown from "../common/Dropdown";
import { useSelector, useDispatch } from "react-redux";
import { setFilteredData, setFilters } from "../store/globalSlice";
import {
  roleOptions,
  minExpOptions,
  jobTypeOptions,
  minBasePayOptions,
} from "../utils";
import { filterHandler } from "../utils/filterHandler";

const Search = () => {
  const dispatch = useDispatch();
  const { originalData, filters } = useSelector((store) => store.global);

  useEffect(() => {
    const updatedData = filterHandler(originalData, filters);
    dispatch(setFilteredData(updatedData));
  }, [originalData, filters]);

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
        />
      </Grid>
    </Grid>
  );
};

export default Search;
