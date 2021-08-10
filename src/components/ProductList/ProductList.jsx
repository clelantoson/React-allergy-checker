// import React from "react";
// import {
//   Avatar,
//   IconButton,
//   // InputAdornment,
//   List,
//   // List,
//   ListItem,
//   ListItemAvatar,
//   ListItemText,
//   makeStyles,
//   // TextField,
// } from "@material-ui/core";
// // import Divider from "@material-ui/core/Divider";
// // import StarIcon from "@material-ui/icons/Star";
// import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
// // import InputAdornment from "@material-ui/core/InputAdornment";
// // import SearchIcon from "@material-ui/icons/Search";
// import Paper from "@material-ui/core/Paper";
// // import axios from "axios";

// const useStyles = makeStyles({
//   root: {
//     width: "100%",
//     top: "100",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//   },
//   searchBar: {
//     width: "50%",
//     margin: "0 auto",
//     display: "block",
//   },
//   list: {
//     width: "100%",
//     height: "700px",
//     marginBottom: "100px",
//   },
//   listItem: {
//     width: "100%",
//     margin: "20px 0 0 0",
//     padding: "0 100px 90px 100px",
//     // border: "1px solid black",
//     borderRadius: "20px",
//     // boxShadow: "0px 0.630645px 1.26129px", rgba("97, 97, 97, 0.2")
//   },
//   paper: {
//     width: "100%",
//   },
// });

// const classes = useStyles();
// const ProductList = () => {
//   // console.log("in searchbar");
//   // const [products, setProducts] = useState([]);
//   // const [productInput, setProductInput] = useState("");
//   // useEffect(() => {
//   //   console.log("start search with", productInput);
//   //   if (productInput.length === 0) {
//   //     setProducts([]);
//   //     return;
//   //   }

//   return (
//     <div className={classes.root}>
//       <List className={classes.list}>
//        {/* {console.log("products to display2", products)}
//         {products.map((product) => ( */}
//       <ListItem
//         className={classes.listItem}
//         key={product.id}
//         alignItems="flex-start"
//       >
//         <Paper className={classes.paper} elevation={19}>
//           <ListItemAvatar>
//             <Avatar src={product.image_front_url} />
//           </ListItemAvatar>
//           <ListItemText primary={product.generic_name} secondary={product.id} />
//           <IconButton
//             type="submit"
//             className={classes.iconButton}
//             aria-label="search"
//           >
//             <CheckCircleOutlineIcon />
//           </IconButton>
//         </Paper>
//       </ListItem>
//       ))}
//       </List>
//     </div>
//   );
// };

// export default ProductList;
