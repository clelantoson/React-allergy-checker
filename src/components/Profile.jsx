import React from "react";
import "./profile.scss";
import ProfileUser from "./profile/ProfileUser";
import Allergens from "./profile/Allergens";
import ProfileFavorites from "./profile/ProfileFavorites";
import Personalinfo from "./profile/Personalinfo"

const Profile = () => {
  return (
    <div>
     <ProfileUser/>
     <h2>Allergens</h2>
     <Allergens/>
     <h2>Favorites</h2>
     <ProfileFavorites/>
     <h2>personal information</h2>
     <Personalinfo/>
     </div>
  );
};

export default Profile;
