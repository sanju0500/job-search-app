import Grid from "@mui/material/Grid";
import InputField from "../common/InputField";
import Dropdown from "../common/Dropdown";
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../store/globalSlice";

const Search = () => {
  const { role, minExp, jobType, minBasePay, company, location } = useSelector(
    (store) => store.global.filters
  );
  const dispatch = useDispatch();

  const handleRole = (e) =>
    dispatch(setFilters({ field: "role", value: e?.target?.value }));

  const handleMinExp = (e) =>
    dispatch(setFilters({ field: "minExp", value: e?.target?.value }));

  const handleJobType = (e) =>
    dispatch(setFilters({ field: "jobType", value: e?.target?.value }));

  const handleMinPay = (e) =>
    dispatch(setFilters({ field: "minBasePay", value: e?.target?.value }));

  const handleCompanyName = (e) =>
    dispatch(setFilters({ field: "company", value: e?.target?.value }));

  const handleLocation = (e) =>
    dispatch(setFilters({ field: "location", value: e?.target?.value }));

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Dropdown label="Role" value={role} onChange={handleRole} />
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Dropdown
          label="Min. Experience"
          value={minExp}
          onChange={handleMinExp}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Dropdown
          label="Remote/Onsite"
          value={jobType}
          onChange={handleJobType}
        />
      </Grid>

      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Dropdown
          label="Min. Base Pay"
          value={minBasePay}
          onChange={handleMinPay}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <InputField
          label="Company Name"
          value={company}
          onChange={handleCompanyName}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <InputField
          label="Location"
          value={location}
          onChange={handleLocation}
        />
      </Grid>
    </Grid>
  );
};

export default Search;
