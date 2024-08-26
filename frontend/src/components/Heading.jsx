import { Typography } from "@mui/material";

const Heading = ({ title }) => {
  return (
    <Typography
      variant="h3"
      component="h2"
      sx={{ textAlign: "center", padding: "2rem" }}
    >
      {title}
    </Typography>
  );
};

export default Heading;
