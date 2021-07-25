import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import Copy from "./Copy";
function Contact() {
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
          <Grid item xs={8} sm={4}>
            <Typography variant="h2" component="h2" align="left">
              Kontakt
            </Typography>
            <Typography variant="body1" component="h2" align="left">
              {Copy.SecondCopy}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
