import React from 'react';
import "./personalinfo.scss"

function Personalinfo(){
 
  return (
    
  <div className="personalinfo">
  
    <h3>Full Name</h3>
    <p>Julie Park <button className="btn">update</button></p>
    <h3>Birthday</h3>
    <p>July 21</p>
    <h3>Gender</h3>
    <p>Female</p>
    <h3>Email</h3>
    <p>example@example.com <button className="btn">update</button></p>
    <h3>Password </h3>
    <p>••••••• <button className="btn">Change</button></p>
  
</div>

  );
}

export default Personalinfo;