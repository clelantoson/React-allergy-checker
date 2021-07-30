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
import ShareIcon from "@material-ui/icons/Share";
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

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [productNotFound, setProductNotFound] = useState(false);
  const { id: productId } = useParams();
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
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
      padding: "0.5rem",
      marginTop: "0.5rem",
    },
    table: {
      width: "100%",
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

  function createDataTable(name, data100g) {
    return { name, data100g };
  }

  if (product) {
    console.log("component is mounted");

    const rows = [
      createDataTable("Energy", `${product.nutriscore_data.energy}`),
      createDataTable("Fiber", `${product.nutriscore_data.fiber}`),
      createDataTable("Proteins", `${product.nutriscore_data.proteins}`),
      createDataTable("Sugar ", `${product.nutriscore_data.sugar}`),
      createDataTable("Sodium", `${product.nutriscore_data.sodium}`),
    ];

    return (
      <Card className={classes.root}>
        <CardHeader
          title={product.generic_name}
          subheader={product.product_name}
        />
        <CardMedia
          className={classes.media}
          image={product.image_front_url}
          title={product.generic_name}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
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
          <CardContent>
            <Typography paragraph>Brand : {product.brands}</Typography>
            <Typography>
              Allergens: {product.allergens_tags}
              <Paper className={classes.paperInfoProduct}>
                <Typography variant="h4" color="primary">
                  Nutriscore
                </Typography>
                <Typography variant="h5" color="primary">
                  Grade : {product.nutriscore_grade}
                </Typography>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
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
                          <TableCell align="right">{row.data100g}</TableCell>
                          <TableCell align="right">{row.data100g}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Typography>
            <Paper className={classes.paperInfoProduct}>
              <Typography variant="h4" color="primary">
                Ingredients
              </Typography>
              <Typography className={classes.paperText}>
                {product.ingredients_text}
              </Typography>
            </Paper>
          </CardContent>
          <br />
          <br />
          <br />
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