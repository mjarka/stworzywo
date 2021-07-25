import { AppBar, Box, Toolbar } from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    textAlign: "center",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <Box zIndex="tooltip" position="relative">
      <AppBar
        position="static"
        color="transparent"
        position="fixed"
        elevation={0}
      >
        <Toolbar variant="dense">
          <Typography
            variant="subtitle1"
            color="inherit"
            className={classes.title}
          >
            508 963 647
          </Typography>
          <Typography
            variant="subtitle1"
            color="inherit"
            className={classes.title}
          >
            marcinjarka@gmail.com
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
