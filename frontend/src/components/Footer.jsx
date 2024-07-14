import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation>
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/user/movies">
          <h2>My Movies</h2>
        </Link>
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
