import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import Copy from "./Copy";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  noPointer: {
    pointerEvents: "none",
  },
});
function Bio() {
  const classes = useStyles();
  return (
    <Box
      className={classes.noPointer}
      width="100%"
      height="100vh"
      position="relative"
      zIndex="tooltip"
      display="flex"
      alignItems="center"
    >
      <Container>
        <Grid container alignItems="left" justifyContent="center">
          <Grid item xs={11} sm={8}>
            <Typography variant="h1" component="h1" align="left">
              Cześć jestem Marcin- grafik z Warszawy, chętnie stworzę z Tobą coś
              kreatywnego!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Bio;
