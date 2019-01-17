import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Textfit } from 'react-textfit';
import React from "react";

const styles = (theme)=>({
  root: {
    // width: "100%"
  },
  cardContentRoot: {
    padding: "0px 5px",
  },
  cardMediaRoot: {
    margin: "0 auto",
    backgroundSize:"100%",
    width:"100%",
    marginBottom:"10px",
 
  },

  media: {},
  cardRoot: {
    margin: "2px",
  },
  typoRoot:{
    fontWeight:"bold",
    padding:"5px"
  }
});
class ChannelCard extends React.Component {
  state = {
    thumbnail: {},
    title:"",
    subscribers:""
  };

  componentDidMount() {
    const {id,getData} = this.props;
    getData(id).then((data)=>{
      const thumbnail = data.snippet.thumbnails.medium,
            title = data.snippet.title,
            subscribers = data.statistics.subscriberCount;
        this.setState({
          thumbnail,
          title,
          subscribers
        })
    })
  }
  render() {
    const {classes} = this.props;
    return (
      <Grid item  md={2} sm={3}  xs={4}>
        <Card
          classes={{
            root: classes.cardRoot
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              classes={{
                root: classes.cardMediaRoot
              }}
              image={this.state.thumbnail.url!==undefined?this.state.thumbnail.url:"https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png"}

            />
            <CardContent
              classes={{
                root: classes.cardContentRoot
              }}
            >
              <Typography 
                component="h5"
                classes={{
                  root:classes.typoRoot
                }}
              >

                  Name :{this.state.title}

              </Typography>
              <Typography
                classes={{
                  root:classes.typoRoot
                }}
                gutterBottom
                 component="h5"
                >

                Subscribers : {this.state.subscribers}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(ChannelCard);
