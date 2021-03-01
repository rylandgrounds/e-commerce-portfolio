import React from "react";
import { Grid, Typography } from "@material-ui/core";

import useStyles from "./styles";

const AboutUs = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        <Typography variant="h2" className={classes.title} color="primary">
          About Us
        </Typography>
        <Typography variant="b1" className={classes.title} color="primary">
          Founded as a solution to help a developer get their break in the
          industry, this site is designed with to provide an example of what
          this dev can offer to you. Searching for funding to feed his crippling
          caffeine and novel addiction, this developer will work to provide top
          shelf code. If you are reading this then may you day be good and your
          night restful!
        </Typography>
      </Grid>
    </main>
  );
};

export default AboutUs;
