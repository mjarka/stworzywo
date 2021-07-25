import { makeStyles, StylesProvider, Typography } from "@material-ui/core";
import React from "react";
import { Parallax } from "react-scroll-parallax";

const useStyles = makeStyles((theme) => ({
  text: {
    flexGrow: 1,
    textAlign: "center",
    color: "#2b2b2b",
    fontSize: "8vw",
    letterSpacing: "4vw",
  },
}));
function Crop(props) {
  const classes = useStyles();
  return (
    <div>
      <Parallax className="custom-class" y={[-130, 130]} tagOuter="figure">
        <Typography
          variant="h1"
          component="h2"
          align="left"
          className={classes.text}
        >
          {props.copy}
        </Typography>
      </Parallax>
    </div>
  );
}

export default Crop;
