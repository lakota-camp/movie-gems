import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const ErrorMessage = () => {
  return (
    <Stack
      sx={{
        width: "100%",
      }}
      spacing={2}
    >
      <Alert severity="error">Error Loading Movies</Alert>
    </Stack>
  );
};

export default ErrorMessage;
