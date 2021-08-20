import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,

 
} from "@material-ui/core";





import img from "../../img/profile-bg.jpg";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2),
  },
  width: {
    maxWidth: "100%",
    margin: "0 auto",
  },
 
}));



const UserProfile = ({userInfo}) => {

  const classes = useStyles();

// console.log(userInfo?.imageUrl);
  return (
    <div className={classes.width}>
      <Card className={classes.root}>
        <Avatar
          alt={userInfo?.name}
          src={
            userInfo?.pic || userInfo?.imageUrl
              ? userInfo?.pic || userInfo?.imageUrl
              : "https://images.unsplash.com/photo-1626193759855-4f03fc744287?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          }
        />
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
              {userInfo?.name.split(" ")[0]} {userInfo?.name.split(" ")[1]}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default UserProfile;
