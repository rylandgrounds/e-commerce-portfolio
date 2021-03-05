import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
} from "@material-ui/core";

import profile from "../../assets/portfolioimg.png";
import useStyles from "./styles";

const AboutUs = () => {

  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
       <Grid container justify="center" spacing={4}>
        <Card className={classes.root}>
          <CardHeader
            title="About Us"
            subheader="Portfolio Projects"
          />
          <CardMedia
            className={classes.media}
            image={profile}
            title="Ryland's Face"
          />
          <CardContent>
            <Typography
              variant="body1"
              className={classes.content}
              color="inherit"
            >
              Founded as a solution to help a developer get their break in the
              industry, this site is designed with to provide an example of what
              this dev can offer to you. Searching for funding to feed his
              crippling caffeine and novel addiction.
            </Typography>
            <Typography
              variant="body1"
              className={classes.content}
              color="inherit"
            >
              This developer will work
              to provide top shelf code. If you are reading this then may you
              day be good and your night restful!
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </main>
  );
};

export default AboutUs;
