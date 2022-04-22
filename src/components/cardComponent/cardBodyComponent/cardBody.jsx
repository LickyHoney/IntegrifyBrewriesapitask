import React, { Component, useState, useCallback } from "react";
import { Link } from "react-router-dom";

/**
 * This class creates and renders the collapsible part of a Card object
 * most of the data about a brewery as well as a link to the Google Maps
 * portion of the app is included in this object.
 */
const CardBody = props => {
  //const [open, setOpen] = useState(false);
  // const toggle = useCallback(() => {
  //   setOpen(!open);
  // });
  
  return <div className="cart">
        {/* <button className="btn btn--with-icon" onClick={toggle.bind(this)}>
          <i />
          Find Out More
        </button> */}
        <div id="demo" >
          <div className="card-list">
            <li>Name: {props.name}</li>
            <li>Type: {props.type}</li>
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
        </div>
        <div class="card-footer">
        
        <Link to={`/detail/${props.id}`}>View Detail</Link>
                             
        </div>
      </div>;
};

export default CardBody;
