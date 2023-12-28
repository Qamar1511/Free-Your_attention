import React from "react";
import "../Firstpage/Card.css"

const Card =({title,image})=>{
    return (
      
        <div className="card">
          <img src={image} alt={title} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{title}</h3>
            </div>
          </div>
       
      );
    };
    
    export default Card;
