import React from "react";
import { Link } from "react-router-dom";


const CardBody = props => {
  
  
  return <div className="cart">
       
        <div id="demo" >
          <div className="card-list">
            <li>Name: {props.name}</li>
            <li>Type: {props.type}</li>
            <li>City: {props.city}</li>
            
          </div>
        </div>
        <div class="card-footer">
        
        <Link to={`/detail/${props.id}`}>View Detail</Link>
                             
        </div>
      </div>;
};

export default CardBody;
