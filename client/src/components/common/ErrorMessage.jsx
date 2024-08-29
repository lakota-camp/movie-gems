import { Button, Alert, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const ErrorMessage = ({ message }) => {
  return (
    <Stack
      sx={{
        width: "100%",
        textAlign: "center",
      }}
      spacing={2}
    >
      <Alert severity="error">{message}</Alert>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/user/movies"
        sx={{ mt: 2, p: 2 }}
      >
        Go to My Movies
      </Button>
    </Stack>
  );
};

export default ErrorMessage;
