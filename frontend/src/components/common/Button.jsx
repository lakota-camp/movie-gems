import { Button } from "@mui/material";

const ButtonMain = ({ text, variant, color, ...props }) => {
  return (
    <Button
      size="small"
      variant={variant}
      color={color}
      {...props}
      sx={{ padding: 2 }}
    >
      {text}
    </Button>
  );
};

export default ButtonMain;
