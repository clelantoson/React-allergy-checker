import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Paper from "@material-ui/core/Paper";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CardContent } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Box from "@material-ui/core/Box";
// import tick from "./img/tick.png";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import WarningRoundedIcon from "@material-ui/icons/WarningRounded";
import Chip from "@material-ui/core/Chip";

// eslint-disable-next-line no-unused-vars
const findUserAllergiesFromProduct = (product, allergensFromUser) => {
  console.log({ product });
  console.log("allergensfromuser", allergensFromUser);
  if (!product) return [];
  // eslint-disable-next-line no-unused-vars
  const productAllergensTracesTags = [
    ...product.allergens_tags,
    ...product.traces_tags,
  ];
  // // eslint-disable-next-line no-debugger
  // debugger;
  // return productAllergensTracesTags.filter((productAllergen) =>
  //   allergensFromUser.some(
  //     (userAllergen) => userAllergen.value === productAllergen
  //   )
  // );
  return allergensFromUser.filter((userAllergen) =>
    productAllergensTracesTags.some(
      (productAllergen) => productAllergen === userAllergen.value
    )
  );

  // allergenFromUser[0] => {value: 'en:milk', name: 'Milk'} (userAllergen)
  //    productAllergensTracesTags[0] === userAllergen.value
  //    productAllergensTracesTags[1] === userAllergen.value
  //    productAllergensTracesTags[3] === userAllergen.value
  //    si au moins un est vrai, je retourne vrai
  //    si j'ai retourné vrai, le filter garder ce userAllergen, sinon le garde pas
  // allergenFromUser[1] => {value: 'en:nuts', name: 'Noisette'} (userAllergen)
  //    productAllergensTracesTags[0] === userAllergen.value
  //    productAllergensTracesTags[1] === userAllergen.value
  //    productAllergensTracesTags[3] === userAllergen.value
  // ...
};

//on part des user allergens pour fairecle filter, faut inverser le filter et le some

// if (allergensFromUser.value === productAllergensTracesTags)
//   return allergensFromUser.name;

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [productNotFound, setProductNotFound] = useState(false);
  const { id: productId } = useParams();
  const allergensFromUser =
    JSON.parse(localStorage.getItem("user_allergens")) || [];
  // eslint-disable-next-line no-unused-vars
  const userAllergiesFromProduct = findUserAllergiesFromProduct(
    product,
    allergensFromUser
  );
  console.log("the user is allergic to", userAllergiesFromProduct);
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      height: "100%",
      overflowY: "auto",
      marginBottom: "1px",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
      position: "static",
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    content: {
      // height: "100%"
    },
    paperInfoProduct: {
      padding: "0.4rem",
      marginTop: "0.5rem",
    },
    table: {
      width: "100%",
    },
    // tick: {
    //   height: 0,
    //   paddingTop: "56.25%", // 16:9
    //   position: "static",
    //   // zIndex: 10,
    //   // position: "absolute",
    //   // height: "20%",
    // },
    boxImage: {
      position: "relative",
    },
    checkIcon: {
      color: "green",
      marginRight: "0.5rem",
    },
    warningRoundedIcon: {
      color: "orange",
      marginRight: "0.5rem",
    },
    paperCheck: {
      backgroundColor: theme.palette.success.light,
      display: "flex",
      marginLeft: "0.1rem",
      padding: "0.4rem",
    },
    paperWarning: {
      backgroundColor: theme.palette.danger.main,
      display: "flex",
      marginLeft: "0.1rem",
      padding: "0.4rem",
    },
    overrideRootCardAction: {
      padding: "4px",
    },
    paperAllergens: {
      padding: "0.4rem",
      marginTop: "0.5rem",
      // backgroundColor: theme.palette.warning.main,
    },
    chip: {
      margin: "0.2rem",
    },
  }));

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    console.log("will fetch now");
    axios
      .get(`https://world.openfoodfacts.org/api/v0/product/${productId}.json`)
      .then((response) => {
        if (response.data.status === 0) {
          setProductNotFound(true);
        } else {
          setProduct(response.data.product);
        }
      })
      .catch(() => console.log("il y a eu une erreur"));
  }, []);
  console.log(product);

  // const createRows = (rows) =>
  //   rows
  //     .map((row) => {
  //       const { data100g, dataPerServing } = row;
  //       // console.log(typeof row);
  //       if (data100g && dataPerServing) return row;
  //       else return null;
  //     })
  //     .filter(Boolean);

  // refacto
  const createRows = (rows) =>
    rows.filter((row) => row.data100g && row.dataPerServing);

  if (product) {
    console.log("component is mounted");

    const rows = createRows([
      {
        name: "Energy",
        data100g: product.nutriments["energy-kcal_100g"],
        dataPerServing: product.nutriments["energy-kcal_serving"],
      },
      {
        name: "Fiber",
        data100g: product.nutriments.fiber_100g,
        dataPerServing: product.nutriments.fiber_serving,
      },
      {
        name: "Proteins",
        data100g: product.nutriments.proteins_100g,
        dataPerServing: product.nutriments.proteins_serving,
      },
      {
        name: "Sugar ",
        data100g: product.nutriments.sugar_100g,
        dataPerServing: product.nutriments.sugar_serving,
      },
      {
        name: "Sodium",
        data100g: product.nutriments.sodium_100g,
        dataPerServing: product.nutriments.sodium_serving,
      },
      {
        name: "Fat",
        data100g: product.nutriments.fat_100g,
        dataPerServing: product.nutriments.fat_serving,
      },
    ]);

    return (
      <Card className={classes.root}>
        <CardHeader
          title={product.generic_name}
          subheader={product.product_name}
        />
        {/* <div className={classes.boxImage}> */}
        <CardMedia
          className={classes.media}
          image={product.image_front_url}
          title={product.generic_name}
          alt={product.generic_name}
        />
        {/* <CardMedia
          className={classes.tick}
          title={product.generic_name}
          image={tick}
          alt="Icons made by Alfredo Hernandez https://www.alfredocreates.com"
        /> */}
        {/* <img
          className={classes.tick}
          src={tick}
          alt="Icons made by Alfredo Hernandez https://www.alfredocreates.com"
        /> */}
        {/* </div> */}
        <CardActions
          classes={{
            root: classes.overrideRootCardAction,
          }}
          disableSpacing
        >
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            {/* </IconButton>
          <IconButton aria-label="share">
            <ShareIcon /> */}
          </IconButton>
          {userAllergiesFromProduct.length > 0 ? (
            <Paper className={classes.paperWarning}>
              <WarningRoundedIcon className={classes.warningRoundedIcon} />
              <Typography> You are allergic</Typography>
            </Paper>
          ) : (
            <Paper className={classes.paperCheck}>
              <CheckCircleRoundedIcon className={classes.checkIcon} />
              <Typography> You are not allergic</Typography>
            </Paper>
          )}

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box pb="3rem">
            <CardContent>
              {product.allergens_tags.length > 0 && (
                <Paper className={classes.paperAllergens}>
                  {product.allergens_tags.length > 0 && (
                    <Typography variant="h4" color="primary">
                      Your allergens
                      <Typography>
                        {userAllergiesFromProduct.map((allergen, index) => (
                          <Chip
                            className={classes.chip}
                            key={index}
                            label={allergen.name}
                            color="primary"
                            size="medium"
                          />
                        ))}
                      </Typography>
                    </Typography>
                  )}
                  {product.traces_tags.length > 0 && (
                    <Typography variant="h4" color="primary">
                      Traces
                      <Typography>
                        {product.traces_tags.map((trace) => (
                          <Chip key={trace} label={trace} />
                        ))}
                      </Typography>
                    </Typography>
                  )}
                </Paper>
              )}

              <Paper className={classes.paperInfoProduct}>
                <Typography variant="h4" color="primary">
                  Brand
                </Typography>
                <Typography> {product.brands} </Typography>
              </Paper>
              <Paper className={classes.paperInfoProduct}>
                <Typography variant="h4" color="primary">
                  Nutritional informations
                </Typography>
                <Typography variant="h4" color="primary">
                  <img
                    src={`https://static.openfoodfacts.org/images/attributes/nutriscore-${product.nutriscore_grade}.svg`}
                    alt={`nutriscore: ${product.nutriscore_grade}`}
                  />
                </Typography>
                {rows.length > 0 && (
                  <TableContainer>
                    <TableContainer
                      className={classes.table}
                      aria-label="simple table"
                    >
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Nutritional Informations </TableCell>
                            <TableCell align="right">For 100g</TableCell>
                            <TableCell align="right">Per portion (g)</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow key={row.name}>
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell align="right">
                                {row.data100g}
                              </TableCell>
                              <TableCell align="right">
                                {row.dataPerServing}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </TableContainer>
                )}
              </Paper>
              <Paper className={classes.paperInfoProduct}>
                <Typography variant="h4" color="primary">
                  Ingredients
                </Typography>
                <Typography className={classes.paperText}>
                  {product.ingredients_text}
                </Typography>
              </Paper>
            </CardContent>
          </Box>
        </Collapse>
      </Card>
    );
  } else if (productNotFound) {
    return <div> not found</div>;
  } else {
    console.log("component is mounted");
    return <div>loading</div>;
  }
};

export default ProductDetail;
