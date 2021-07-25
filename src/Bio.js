import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import Copy from "./Copy";
function Bio(props) {
  return (
    <Box
      width="100%"
      height="900px"
      position="relative"
      zIndex="tooltip"
      display="flex"
      alignItems="center"
    >
      <Container>
        <Grid container alignItems="left">
          {props.right && <Grid item xs={4} sm={8} />}

          <Grid item xs={8} sm={4}>
            <Typography
              variant="h2"
              component="h2"
              align={props.right ? "right" : "left"}
            >
              {props.header}
            </Typography>
            <Typography
              variant="body1"
              component="h2"
              align={props.right ? "right" : "left"}
            >
              {Copy.SecondCopy}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Bio;
