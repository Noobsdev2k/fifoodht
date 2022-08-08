import { createTheme } from "@mui/material";
import PRIMARY_RED_COLOR from "../constants/colors";

// overrides button
const Theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_RED_COLOR,
    },
  },
});

export default Theme;
