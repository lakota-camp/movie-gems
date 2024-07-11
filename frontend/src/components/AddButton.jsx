import PropTypes from "prop-types";
import { Button } from "@mui/material";

const AddButton = ({ text, ...props }) => {
  return (
    <Button
      size="small"
      variant="contained"
      color={"primary"}
      {...props}
      sx={{ padding: 2 }}
    >
      {text}
    </Button>
  );
};

AddButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AddButton;
