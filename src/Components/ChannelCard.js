import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Odometer from "react-odometerjs";

const styles = theme => ({
  root: {
    // width: "100%"
  },
  cardContentRoot: {
    padding: "0px"
  },
  cardMediaRoot: {
    margin: "0 auto",
    backgroundSize: "100%",
    width: "50px",
    height: "50px"
  },

  media: {},
  cardRoot: {
    margin: "2px"
  },
  typoRoot: {
    display: "block",
    // fontSize: "12px",
    width: "100%"
  },
  itemRoot: {
    marginBottom: "2px"
  }
});
class ChannelCard extends React.Component {
  state = {
    thumbnail: {},
    title: "",
    subscribers: ""
  };

  render() {
    const { classes, no } = this.props;
    const { subCount, snippet } = this.props.channel;
    return (
      <Grid
        item
        md={2}
        sm={3}
        xs={4}
        classes={{
          item: classes.itemRoot
        }}
      >
        <Card
          classes={{
            root: classes.cardRoot
          }}
        >
          <CardActionArea>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={9}>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item xs={2}>
                    <Typography
                      align="center"
                      gutterBottom
                      classes={{
                        root: classes.typoRoot
                      }}
                    >
                      <em
                        style={{
                          paddingRight: "5px",
                          fontFamily:"Concert one",
                          fontSize: "24px",
                          fontWeight:"bolder"
                        }}
                      >
                        {no+"."}
                      </em>
                    </Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography
                      component="h5"
                      variant="h5"
                      noWrap={true}
                      align="center"
                      classes={{
                        root: classes.typoRoot
                      }}
                      style={{
                        fontSize:"20px",
                        // fontFamily:"Concert one",
                        fontWeight:"bolder"

                      }}
                    >
                      {snippet.title}
                    </Typography>
                    <Typography
                      classes={{
                        root: classes.typoRoot
                      }}
                      style={{
                        fontSize:"18px",
                      }}
                      align="center"
                      variant="h6"
                    >
                      <Odometer
                        style={{ width: "100%" }}
                        value={subCount}
                        format="(,ddd)"
                      />
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={3}>
                <CardMedia
                  component="div"
                  alt="Contemplative Reptile"
                  classes={{
                    root: classes.cardMediaRoot
                  }}
                  image={snippet.thumbnails.default.url}
                />
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(ChannelCard);
