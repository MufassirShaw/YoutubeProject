import React from "react";
import ChannelCard from "./ChannelCard";
import Grid from "@material-ui/core/Grid";
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,

  }
})
const Layout =  (props)=> {
  const { data, classes, } = props;
  if (data) {
    const renderedCards = data.map((item, i) => (
      <ChannelCard key={i} no={i+1} channel={item}/>
    ));
    return (
      <Grid container >
        {renderedCards}
      </Grid>
    );
  } else {
    return (
      <Dialog open ={true} classes={{root:classes.root}} >
        <DialogContent>
          <CircularProgress size={100} className={classes.progress} />
        </DialogContent>
    </Dialog>
    );
  }
};

export default withStyles(styles)(Layout);