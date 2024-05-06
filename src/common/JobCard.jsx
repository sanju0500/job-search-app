import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Expandable from "./Expandable";

const paperSx = {
  display: "flex",
  flexDirection: "column",
};

export default function JobCard({ data, ref }) {
  return (
    <Paper elevation={3} sx={paperSx}>
      <CardContent>
        <Box sx={{ display: "flex" }}>
          <img src={data?.logoUrl} alt="company logo" height="30rem" />
          <Box ml={1}>
            <Link
              href={data?.jdLink}
              underline="hover"
              fontSize={14}
              fontWeight={600}
              color="text.secondary"
            >
              {data?.companyName}
            </Link>
            <Typography fontSize={14}>{data?.jobRole}</Typography>
            <Typography fontSize={11} color="text.secondary">
              {data?.location}
            </Typography>
          </Box>
        </Box>
        <Typography fontSize={14} color="text.secondary" my={1}>
          Estimated Salary: ${data?.minJdSalary || 0} - {data?.maxJdSalary}{" "}
          {data?.salaryCurrencyCode} ✅
        </Typography>
        <Box minHeight={120}>
          <Typography variant="body2" fontWeight={600}>
            Job Description:
          </Typography>
          <Expandable>{data?.jobDetailsFromCompany}</Expandable>
        </Box>
        <Typography fontSize={14} color="text.secondary" mt={1}>
          Experience Required:{" "}
          {!data?.maxExp ? "-" : `${data?.minExp || 0} - ${data?.maxExp} years`}
        </Typography>
      </CardContent>
      <Button
        size="small"
        variant="contained"
        color="secondary"
        sx={{ mx: "1rem", mb: "1rem" }}
      >
        ⚡ Easy Apply
      </Button>
    </Paper>
  );
}
