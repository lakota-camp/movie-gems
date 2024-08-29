import { useState } from "react";
import { Alert, Box, IconButton, Collapse } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function SuccessAlert({ message }) {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {message}
          </Alert>
        </Collapse>
      </Box>
    </>
  );
}
