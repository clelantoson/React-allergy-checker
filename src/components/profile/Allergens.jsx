import React from "react";
import "./allergens.scss";

function AllergensItem() {
  return(
<div className="allergensItem" data-allergens="lait"></div>
  )
  
  
}


function Allergens() {
  return (
    <div className="allergens">
     <AllergensItem/>
     <AllergensItem/>
     <AllergensItem/>
     <AllergensItem/>
     <AllergensItem/>
     </div>
    
    
  );
}

export default Allergens;
