// import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [productNotFound, setProductNotFound] = useState(false);
  const { id: productId } = useParams();

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

  if (product) {
    // console.log("product:", product.name.first);
    console.log("component is mounted");

    return (
      <div>
        <ul>
          <li>{product.id}</li>
          <img src={product.image_front_url}></img>
          <li>{product.generic_name}</li>
          <li>{product.product_name_en}</li>

          <li>Brand : {product.brands}</li>
          <li> Ingredients : {product.ingredients_text_with_allergens}</li>
          <li>Allergens: {product.allergens_tags}</li>
          <li>Grade : {product.nutriscore_grade}</li>
          <li>{product.nutriscore_data.energy}</li>
          <li>{product.nutriscore_data.fiber}</li>
          <li>{product.nutriscore_data.proteins}</li>
          <li>{product.nutriscore_data.sugar}</li>
          <li>{product.nutriscore_data.sodium}</li>
        </ul>
      </div>
    );
  } else if (productNotFound) {
    return <div> not found</div>;
  } else {
    console.log("component is mounted");
    return <div>loading</div>;
  }
};

export default ProductDetail;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     height: "100%",
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%", // 16:9
//   },
//   expand: {
//     transform: "rotate(0deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: "rotate(180deg)",
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

// export default function RecipeReviewCard() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card className={classes.root}>
//       <CardHeader
//         avatar={
//           <Avatar aria-label="product" className={classes.avatar}>
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Ferrero rocher"
//         subheader="Lorem Ipsum"
//       />
//       <CardMedia
//         className={classes.media}
//         image="https://fr.openfoodfacts.org/images/products/800/050/001/1461/front_fr.21.400.jpg"
//         title="Ferrero rocher fines gaufrettes enrobees de chocolat au lait et noisettes avec noisette entiere t42 boite de 42 pieces - 525 g"
//       />
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//           FERRERO ROCHER : Fines gaufrettes enrobées de chocolat au lait et
//           noisettes broyées et fourrées noisette
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded,
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and
//             set aside for 10 minutes.
//           </Typography>
//           <Typography paragraph>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
//             over medium-high heat. Add chicken, shrimp and chorizo, and cook,
//             stirring occasionally until lightly browned, 6 to 8 minutes.
//             Transfer shrimp to a large plate and set aside, leaving chicken and
//             chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
//             onion, salt and pepper, and cook, stirring often until thickened and
//             fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
//             cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and
//             peppers, and cook without stirring, until most of the liquid is
//             absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
//             shrimp and mussels, tucking them down into the rice, and cook again
//             without stirring, until mussels have opened and rice is just tender,
//             5 to 7 minutes more. (Discard any mussels that don’t open.)
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then
//             serve.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }

// const Product = (props) => {

// 	return (
// 		<>

// 		</>
// 	 );
// }

// export default Product;
