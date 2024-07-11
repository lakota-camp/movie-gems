import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navbar({ text }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, marginLeft: 10, padding: 3 }}
          >
            {text}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

Navbar.propTypes = {
  text: PropTypes.string.isRequired,
};
