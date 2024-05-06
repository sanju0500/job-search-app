import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import JobCard from "../common/JobCard";
import {
  setLoader,
  setOriginalData,
  setFilteredData,
  setTotalCount,
} from "../store/globalSlice";
import { filterHandler } from "../utils/filterHandler";

const jobListSx = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const flexRowSx = { display: "flex", justifyContent: "center" };

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const JobListings = () => {
  const dispatch = useDispatch();
  const { loading, filters, originalData, filteredData, totalCount } =
    useSelector((store) => store.global);
  const observer = useRef();

  const [hasMoreData, setHasMoreData] = useState(true);

  const fetchJobDetailsList = useCallback((offset = 0, limit = 10) => {
    const body = JSON.stringify({ limit, offset });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    dispatch(setLoader(true));

    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const resultData = JSON.parse(result);
        dispatch(
          setOriginalData([...originalData, ...(resultData?.jdList || [])])
        );
        if (resultData?.totalCount <= offset + limit) setHasMoreData(false);
        if (totalCount === null)
          dispatch(setTotalCount(resultData?.totalCount));
        dispatch(setLoader(false));
      })
      .catch((error) => {
        console.error(error);
        dispatch(setLoader(false));
      });
  });

  useEffect(() => {
    fetchJobDetailsList();
  }, []);

  useEffect(() => {
    const updatedData = filterHandler(originalData, filters);
    dispatch(setFilteredData(updatedData));
  }, [originalData, filters]);

  const lastJobRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMoreData) {
          fetchJobDetailsList(originalData.length);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMoreData, loading]
  );

  return (
    <>
      {filteredData.length !== 0 ? (
        <Box sx={jobListSx}>
          <Grid container spacing={2} my={2}>
            {filteredData?.map((jd, i, jdList) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                height="100%"
                sx={flexRowSx}
                key={jd?.jdUid}
                ref={jdList.length - 1 === i ? lastJobRef : null}
              >
                <JobCard data={jd} />
              </Grid>
            ))}
          </Grid>
          {loading && <CircularProgress color="primary" sx={{ my: 2 }} />}
        </Box>
      ) : originalData.length !== 0 ? (
        <Typography align="center">
          No Jobs available for this category at the moment :/
        </Typography>
      ) : (
        <Box sx={flexRowSx}>
          <CircularProgress color="primary" sx={{ my: 5 }} />
        </Box>
      )}
    </>
  );
};

export default JobListings;
