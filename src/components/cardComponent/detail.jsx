import React, { Component, useState, useCallback } from "react";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";


const Detail = props => {

    const history = useHistory();
  
    function handleClick() {
      history.push("/");
    }
  
    
 
  return <div className="cart">
        
        
        <div id="demo" >
        <h5 class="card-title">{props.name}</h5>
          <div className="card-list-detail">
            <li>name: {props.name}</li>
            <li>brewery_type: {props.type}</li>
            <li>street: {props.street}</li>
            <li>address_2: {props.address_2}</li>
            <li>address_3:{props.address_3}</li>
            <li>City: {props.city}</li>
          </div>
          <div class="card-footer">
          <span onClick={handleClick}>
        Go home
       </span>
    </div>
        </div>
        
      </div>;
};

export default Detail;
