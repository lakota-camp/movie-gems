import PropTypes from "prop-types";
import { Button } from "@mui/material";

const DeleteButton = ({ text, ...props }) => {
  return (
    <Button
      size="small"
      variant="outlined"
      color={"secondary"}
      sx={{ padding: 1 }}
      {...props}
    >
      {text}
    </Button>
  );
};

DeleteButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default DeleteButton;
