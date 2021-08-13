import { Grid, ListItem, ListItemAvatar, Paper } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import React from 'react';

const ProductList = (props) => {
  return ( 
      <ListItem
      className={classes.listItem}
      key={product.id}
      alignItems="flex-start"
    >
      <Paper className={classes.paper} elevation={19}>
        <Grid container>
          <Grid item lg={2}>
            <ListItemAvatar>
              <Avatar src={product.image_front_url} />
            </ListItemAvatar>
          </Grid>
          <Grid item lg={8}>
            <ListItemText
              wrap="nowrap"
              primary={product.product_name}
              secondary={product.id}
            />
          </Grid>
          <Grid item lg={2}>
            <CheckCircleOutlineIcon />
          </Grid>
        </Grid>

      </Paper>
    </ListItem>

   );
}
 
export default ProductList;

