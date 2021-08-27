import React from "react";
// import { useDebounce } from "use-debounce";
// import TextField from "@material-ui/core/TextField";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import SearchIcon from "@material-ui/icons/Search";
// import axios from "axios";
// import ProductList from "../Product/ProductList"
import { Avatar, Grid, makeStyles, Paper,ListItemAvatar, ListItemText, ListItem } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    overflowY: "auto",
  },
  fullWidth: { width: "100%" },
  searchBar: {
    width: "50%",
  },
  textField: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "1rem",
  },
  list: {},
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

const ht = [
  {id:1,api_id:"3242272346050",image_front_small_url:"https://images.openfoodfacts.org/images/products/324/227/234/6050/front_fr.127.200.jpg",generic_name:"Pizza pâte fine garnie de mozzarella, de chiffonnade de jambon cuit standard et de roquette.",allergen:false,isFavorite:true},
  { id:2,api_id: "3017620422003", image_front_small_url: "https://images.openfoodfacts.org/images/products/301/762/042/2003/front_en.288.200.jpg", generic_name: "Pâte à tartiner aux noisettes et au cacao", allergen: false, isFavorite: true },
  { id:3,api_id: "8076800195057", image_front_small_url: "https://images.openfoodfacts.org/images/products/807/680/019/5057/front_en.406.200.jpg", generic_name: "Pasta di semola di _grano_ duro", allergen: false, isFavorite: true },
  {id:4, api_id: "3256540000698", image_front_small_url: "https://images.openfoodfacts.org/images/products/325/654/000/0698/front_fr.126.200.jpg", generic_name: "Pains au lait au levain", allergen: false, isFavorite: true}
]
console.log("test:",ht)

const History = () => {
  // const [products, setProducts] = useState([]);
  // const [productInput] = useState("");
  // const [debouncedProductInput] = useDebounce(productInput, 700);

  // useEffect(() => {
  //   console.log("start search with", productInput);
  //   if (productInput.length === 0) {
  //     setProducts([]);
  //     return;
  //   }
  //   const API_URL_SEARCH = `https://fr.openfoodfacts.org/cgi/search.pl?search_simple=1&json=1&search_terms=${productInput}`;

  //   axios
  //     .get(API_URL_SEARCH)
  //     .then((response) => {
  //       setProducts(response.data.products);
  //     })
  //     .catch((error) => {
  //       console.log("Error getting fake data: " + error);
  //     });
  // }, [debouncedProductInput]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <ProductList key={ht.api_id} products={ht} /> */}
     {ht.map(ht => <ListItem

      className={classes.listItem}
      key={ht.api_id}
      alignItems="center"
    >
      <Paper className={classes.paper} elevation={1}>
        <Grid wrap="nowrap" container>
          <Grid item lg={2} className={classes.centerItem}>
            <ListItemAvatar className={classes.listItemAvatar}>
              <Avatar src={ht.image_front_small_url} />
            </ListItemAvatar>
          </Grid>
          <Grid item lg={8}
           className={classes.fullWidth}>
            <ListItemText
              primary={ht.generic_name}
              secondary={ht.api_id}
            />
          </Grid>
        </Grid>
        </Paper>
        </ListItem>)}
    </div>
  );
};
// console.log("test: ",History)
export default History;
