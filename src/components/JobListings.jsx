import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import JobCard from "../common/JobCard";
import { setOriginalData, setTotalCount } from "../store/globalSlice";

const JobListings = () => {
  const dispatch = useDispatch();
  const { filteredData, limit, offset } = useSelector((store) => store.global);

  const GetJobDetails = "https://api.weekday.technology/adhoc/getSampleJdJSON";
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const body = JSON.stringify({
    limit: limit,
    offset: offset,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  useEffect(() => {
    fetch(GetJobDetails, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const resultData = JSON.parse(result);
        dispatch(setOriginalData(resultData?.jdList));
        dispatch(setTotalCount(resultData?.totalCount));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Grid container spacing={2}>
      {filteredData?.map((jd) => (
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

export default JobListings;
