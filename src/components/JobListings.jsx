import JobCard from "../common/JobCard";
import { dummyData } from "../dummyData";
import Grid from "@mui/material/Grid";

const JobListing = () => {
  return (
    <Grid container spacing={2}>
      {dummyData.jdList.map((jd) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          key={jd?.jdUid}
          height="100%"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <JobCard data={jd} />
        </Grid>
      ))}
    </Grid>
  );
};

export default JobListing;
