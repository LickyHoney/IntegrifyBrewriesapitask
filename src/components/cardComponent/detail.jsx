import React, { Component, useState, useCallback } from "react";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

/**
 * This class creates and renders the collapsible part of a Card object
 * most of the data about a brewery as well as a link to the Google Maps
 * portion of the app is included in this object.
 */
const Detail = props => {
  //const [open, setOpen] = useState(false);
  // const toggle = useCallback(() => {
  //   setOpen(!open);
  // });

    const history = useHistory();
  
    function handleClick() {
      history.push("/");
    }
  
    // return (
    //   <button type="button" onClick={handleClick}>
    //     Go home
    //   </button>
    // );
 
  return <div className="cart">
        {/* <button className="btn btn--with-icon" onClick={toggle.bind(this)}>
          <i />
          Find Out More
        </button> */}
        
        <div id="demo" >
        <h5 class="card-title">{props.name}</h5>
          <div>
            <li>name: {props.name}</li>
            <li>brewery_type: {props.type}</li>
            <li>street: {props.street}</li>
            <li>address_2: {props.address_2}</li>
            <li>address_3:{props.address_3}</li>
            <li>City: {props.city}</li>


            
            {/* <li>
              Website:{" "}
              <a href={props.website} target="_blank" rel="noopener noreferrer">
                Click Here
              </a>
            </li>
            <li>
              <Link to={{
            pathname: "/map",
            state: {
              longitude: props.longitude,
              latitude: props.latitude
            }
          }}>
                Find this Brewery on a Map
              </Link>
            </li> */}
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
