import React from "react";
import { Link } from "react-router-dom";

import classes from "./MainNav.module.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

function MainNav() {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <div>MainNav</div>
        <nav>
          <ul>
            <li>
              <Link to="/">View All</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
            <li>
              <Link to="/new">New Entry</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar><Link to="/"><Typography>Home</Typography></Link></Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
}

export default MainNav;
