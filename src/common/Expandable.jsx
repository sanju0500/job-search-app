import { useState, useMemo } from "react";
import Typography from "@mui/material/Typography";

const Expandable = ({ children, maxChars = 150 }) => {
  const [expanded, setExpanded] = useState(false);

  const text = useMemo(() => {
    return expanded ? children : `${children.substring(0, maxChars)}...`;
  }, [children, maxChars, expanded]);

  return children?.length <= maxChars ? (
    <Typography variant="body2">{children}</Typography>
  ) : (
    <>
      <Typography variant="body2">{text}</Typography>
      <Typography
        variant="body2"
        fontSize={13}
        onClick={() => setExpanded(!expanded)}
        sx={{
          cursor: "pointer",
          color: "#4943d9",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {expanded ? "Read Less" : "Read More"}
      </Typography>
    </>
  );
};

export default Expandable;
