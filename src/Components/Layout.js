import React from "react";
import ChannelCard from "./ChannelCard";
import Grid from "@material-ui/core/Grid";

export default props => {
  const { ids, getData } = props;
  const renderedCards = ids.map(id => (<ChannelCard key={id} id={id} getData={getData} />));
  return (
    <Grid container spacing={0}>
      {renderedCards}
    </Grid>
  );
};
