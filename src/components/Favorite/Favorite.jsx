import { Avatar, Grid, List, ListItem, Typography } from "@material-ui/core";
import {
  // Avatar,
  // ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  // Grid,
} from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
// import WarningRoundedIcon from "@material-ui/icons/WarningRounded";

import Paper from "@material-ui/core/Paper";
import React from "react";

const useStyles = makeStyles(() => ({
  list: {},
  fullWidth: { width: "100%" },
  centerItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  circleIcon: {
    marginRight: "4px",
  },
  listItemAvatar: {
    display: "flex",
    justifyContent: "center",
  },
  listItem: {
    padding: "0 1rem 0 1rem",
    borderRadius: "20px",
    marginBottom: "4px",
  },
  paper: {
    width: "100%",
  },
  warningRoundedIcon: {
    color: "orange",
    marginRight: "0.5rem",
  },
  checkIcon: {
    color: "green",
    marginRight: "0.5rem",
  },
}));

const ht = [
  {id:1,api_id:"3242272346050",image_front_small_url:"https://images.openfoodfacts.org/images/products/324/227/234/6050/front_fr.127.200.jpg",generic_name:"Pizza pâte fine garnie de mozzarella, de chiffonnade de jambon cuit standard et de roquette.",allergen:false,isFavorite:true},
  { id:2,api_id: "3017620422003", image_front_small_url: "https://images.openfoodfacts.org/images/products/301/762/042/2003/front_en.288.200.jpg", generic_name: "Pâte à tartiner aux noisettes et au cacao", allergen: false, isFavorite: true },
  { id:3,api_id: "8076800195057", image_front_small_url: "https://images.openfoodfacts.org/images/products/807/680/019/5057/front_en.406.200.jpg", generic_name: "Pasta di semola di _grano_ duro", allergen: false, isFavorite: true },
  {id:4, api_id: "3256540000698", image_front_small_url: "https://images.openfoodfacts.org/images/products/325/654/000/0698/front_fr.126.200.jpg", generic_name: "Pains au lait au levain", allergen: false, isFavorite: true}
]

const Favorite = () => {
  const classes = useStyles();
  return (
    <div>
   {ht.map(ht => <List className={classes.list} key={ht.api_id}>
      <ListItem
        className={classes.listItem}
        
        alignItems="center"
      >
        {/* {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <Loading />} */}
        <Paper className={classes.paper} elevation={1}>
          <Grid wrap="nowrap" container>
            <Grid item lg={2} className={classes.centerItem}>
              <ListItemAvatar
                className={classes.listItemAvatar}>
               <Avatar src={ht.image_front_small_url }/>
              </ListItemAvatar>
            </Grid>
            <Grid item lg={8} className={classes.fullWidth}>
              <ListItemText
                primary="test"
                secondary="test2"
              // secondary={product.id}
              />
              {/* <WarningRoundedIcon className={classes.warningRoundedIcon} /> */}
             <Typography>{ht.generic_name }</Typography>


            </Grid>
            
            <Grid item lg={2} className={classes.centerItem}>
               <FavoriteIcon color="error"/>
            </Grid>
          </Grid>
        </Paper>
      </ListItem>
      </List>)}
      </div>
  );
};

export default Favorite;
