import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
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
    width: "30%",
    marginBottom: "5px",
    height:"30px",
   
  },

  media: {},
  cardRoot: {
    margin: "2px"
  },
  typoRoot: {
    display:"block",
    fontSize:"12px",
    width:"100%"
  },
  itemRoot:{
    marginBottom:"2px"
  }
});
class ChannelCard extends React.Component {
  state = {
    thumbnail: {},
    title: "",
    subscribers: ""
  };

  render() {
    const { classes,no } = this.props;
    const { subCount, snippet } = this.props.channel;
    return (
      <Grid item md={1} sm={2} classes={{
        item: classes.itemRoot
      }} >
        <Card
          classes={{
            root: classes.cardRoot
          }}
        >
          <CardActionArea>
            <Typography
              component="h5"
              variant="subtitle1"
              noWrap={true}
              align="center"
              gutterBottom
            >
              {snippet.title}
            </Typography>
            <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
              <em style={{marginLeft:"10px", fontSize:"18px"}}>{no}</em>
                <CardMedia
                  component="div"
                  alt="Contemplative Reptile"
                  classes={{
                    root: classes.cardMediaRoot
                  }}
                  image={snippet.thumbnails.default.url}
                />
                </Grid>
            <CardContent
              classes={{
                root: classes.cardContentRoot
              }}
            >
              <Typography
                classes={{
                  root: classes.typoRoot
                }}
                variant="h5"
              >
                <Odometer style={{width:"100%"}} value={subCount} format="(dddd)" />
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }
    

}

export default withStyles(styles)(ChannelCard);
