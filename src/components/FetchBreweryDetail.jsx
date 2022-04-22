import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Card from "./cardComponent/card";
import CardDetails from "./cardComponent/cardDetails.jsx";
import Modal from "@material-ui/core/Modal";
import { DialogContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";

const API = 'https://api.openbrewerydb.org/breweries';


 function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
 function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  }));

const FetchBreweryDetail = (props) => {
    
  const [breweries, setBreweries] = useState([]);
  const { id } = useParams();
  
  
  useEffect(() => {
    debugger;
    
    //let id = window.location.pathname.split('/detail/').length>1?window.location.pathname.split('/detail/')[1]:'n/a'
    let path = API+'/'+ id;
    
    axios.get(path).then(res => {
      console.log(res);
      setBreweries([res.data]);
    });
  }, []);
  

  
  return <div className="container-fluid">
        <div className="app-card-list" id="app-card-list">
          {breweries.map(brewery => <CardDetails key={brewery.name.toString()} id={brewery.id} name={brewery.name} type={brewery.brewery_type} city={brewery.city} street={brewery.street} address_2={brewery.address_2} address_3={brewery.address_3} state={brewery.state} country_province={brewery.country_province} postal_code={brewery.postal_code} address={brewery.street + " " + brewery.city + ", " + brewery.state + " " + brewery.postal_code} website={brewery.website_url} longitude={brewery.longitude} latitude={brewery.latitude}  />)}{" "}
        </div>
       
      </div>;
};
export default FetchBreweryDetail;
