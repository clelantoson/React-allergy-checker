import React from "react";
import {
  Avatar,
  // IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Grid,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

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
}));

const ProductItem = ({ product }) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.listItem} key={product.id} alignItems="center">
      <Paper className={classes.paper} elevation={1}>
        <Grid wrap="nowrap" container>
          <Grid item lg={2} className={classes.centerItem}>
            <ListItemAvatar className={classes.listItemAvatar}>
              <Avatar src={product.image_front_url} />
            </ListItemAvatar>
          </Grid>
          <Grid item lg={8} className={classes.fullWidth}>
            <ListItemText
              primary={product.product_name}
              secondary={product.id}
            />
          </Grid>
          <Grid item lg={2} className={classes.centerItem}>
            <CheckCircleOutlineIcon className={classes.circleIcon} />
          </Grid>
        </Grid>
      </Paper>
    </ListItem>
  );
};

export default ProductItem;

// import {
//   Grid,
//   InputAdornment,
//   List,
//   ListItem,
//   ListItemAvatar,
//   Paper,
//   TextField,
// } from "@material-ui/core";
// import Avatar from "@material-ui/core/Avatar";
// import ListItemText from "@material-ui/core/ListItemText";
// import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

// import React from "react";

// const ProductList = (props) => {
//   return (
//     <div className={classes.root}>
//       <TextField
//         id="outlined-search"
//         label="Search a product"
//         onChange={(event) => setProductInput(event.target.value)}
//         value={productInput}
//         type="search"
//         variant="outlined"
//         className={classes.searchBar}
//         InputProps={{
//           endAdornment: (
//             <InputAdornment position="end">
//               <SearchIcon />
//             </InputAdornment>
//           ),
//         }}
//       />
//       <List className={classes.list}>
//         {console.log("products to display2", products)}
//         {products.map((product) => (
//           <ProductList key={product} />
//         ))}
//       </List>
//       {/* <ul> */}
//       {/* {console.log("products to display", products)} */}
//       {/* {products.map((product) => {
//           return <li key={product.id}>{product.generic_name}</li>;
//         })} */}
//       {/* {products.map((product) => ( */}

//       {/* <li key={product.id}>{product.generic_name}</li> */}

//       {/* ))} */}
//       {/* <ProductList products={products} /> */}
//       {/* </ul> */}
//     </div>
//   );
// };

// export default ProductList;
