import React from "react";
import "./ProfileFavorites.scss";

  
  const posts = [
    {
        id:1,
      post: 'http://www.wildernesstravel.com/images/trips/latin-america/argentina/in-patagonia/1-slide-patagonia-paine-national-park-cuernos-del-paine-pano.jpg', 
      title: 'Place One', 
      content: 'Where is this place'
    },
    {
        id:2,
      post: 'https://www.switchbacktravel.com/sites/default/files/images/articles/Los%20Glaciares%20Patagonia.jpg', 
      title: 'Place 2', 
      content: 'Or this place'
    }
  ];


 

function CardComponent() {
                       
          const listItems = posts.map((post) => {
            return (
              <li key={post.id}>
                <img src={post.post} />
                <div className="favorites-card__content">
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                 
                </div>
              </li>
            )
          });
          return <ul className="favorites-card"> {listItems} </ul>;
                                       
}

function ProfileFavorites() {

	return <CardComponent/>
  
}

export default ProfileFavorites;