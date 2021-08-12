import { List, ListItem } from "@material-ui/core";

const ProductList = (props) => {

  return ( 
    <List className={classes.list}>
        {console.log("products to display2", products)}
        {products.map((product) => (
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
        ))}
      </List>
   );
}
 
export default ProductList;