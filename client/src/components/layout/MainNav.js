import React from "react";
import { Link } from "react-router-dom";

import classes from "./MainNav.module.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function MainNav() {
  const theme = createTheme({
    palette: {
      c_primary: {
        main: "#455a64",
        contrastText: "#fff",
      },
      c_button: {
        main: "#fff",
      },
    },
  });
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="c_primary">
            <Toolbar>
              <Button component={Link} to="/" variant="text" color="c_button">
                View All
              </Button>
              <Button component={Link} to="/favorites" variant="text" color="c_button">
                Favorites
              </Button>
              <Button component={Link} to="/new" variant="text" color="c_button">
                New Entry
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MainNav;
