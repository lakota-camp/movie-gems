import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useMovies } from "../context/MovieContext";
import LoadingSpinner from "./LoadingSpinner";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function MovieModal({ imdbID }) {
  const { getMovieDetails, movieDetails, error, loading } = useMovies();

  const [open, setOpen] = React.useState(false);

  const handleOpen = async () => {
    console.log("Opening modal, fetching movie details...");
    await getMovieDetails(imdbID);
    console.log("!!!Movie details fetched:", movieDetails);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <Typography>Error: {error.message}</Typography>
          ) : movieDetails ? (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {movieDetails.Title}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {movieDetails.Plot}
              </Typography>
            </>
          ) : (
            <Typography>No Movie Details Found</Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
}
