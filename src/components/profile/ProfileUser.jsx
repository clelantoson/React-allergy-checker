import React from "react";
import "./ProfileUser.css";

// import PersonOutlineIcon from '@material-ui/icons/PersonOutline';


function ProfileUser() {

	return (

		<div className="card-container">

        <header className="profile-bg">
          <img className="profile-img" src= "https://images.unsplash.com/photo-1626193759855-4f03fc744287?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Mamady"/>
        </header>
			
			<h1 className="bold-text">
        konte<span className="normal-text"> Mamady</span>
			</h1>
			<h2 className="normal-text">@Mamady</h2>
			<div className="social-container">
				<div className="followers">
					<h1 className="bold-text">Mamady</h1>
					<h2 className="smaller-text">Followers</h2>
				</div>
				<div className="likes">
					<h1 className="bold-text">Mamady</h1>
					<h2 className="smaller-text">Likes</h2>
				</div>
				<div className="photos">
					<h1 className="bold-text">Mamady</h1>
					<h2 className="smaller-text">Photos</h2>
				</div>
			</div>
		</div>
	);
}

export default ProfileUser;