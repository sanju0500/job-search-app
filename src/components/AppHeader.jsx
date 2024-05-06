import { Paper, Typography, Link } from "@mui/material";

const AppHeader = () => {
  return (
    <Paper
      elevation={3}
      sx={{ height: "3rem", display: "flex", alignItems: "center", px: 2 }}
    >
      <Typography fontSize={18} fontWeight={600} pr={1}>
        👋 Welcome to
      </Typography>
      <Link
        href="https://www.weekday.works/"
        underline="none"
        fontSize={18}
        fontWeight={600}
      >
        Weekday Clone
      </Link>
    </Paper>
  );
};

export default AppHeader;
