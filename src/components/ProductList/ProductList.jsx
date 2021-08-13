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
