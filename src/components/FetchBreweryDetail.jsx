import React, { useState, useEffect } from "react";
import axios from "axios";

import CardDetails from "./cardComponent/cardDetails.jsx";


import { useParams } from "react-router-dom";

const API = 'https://api.openbrewerydb.org/breweries';





  

const FetchBreweryDetail = (props) => {
    
  const [breweries, setBreweries] = useState([]);
  const { id } = useParams();
  
  
  useEffect(() => {
    debugger;
    
    
    let path = API+'/'+ id;
    
    axios.get(path).then(res => {
      console.log(res);
      setBreweries([res.data]);
    });
  }, );
  

  
  return <div className="container-fluid">
        <div className="app-card-list" id="app-card-list">
          {breweries.map(brewery => <CardDetails key={brewery.name.toString()} id={brewery.id} name={brewery.name} type={brewery.brewery_type} city={brewery.city} street={brewery.street} address_2={brewery.address_2} address_3={brewery.address_3} state={brewery.state} country_province={brewery.country_province} postal_code={brewery.postal_code} address={brewery.street + " " + brewery.city + ", " + brewery.state + " " + brewery.postal_code} website={brewery.website_url} longitude={brewery.longitude} latitude={brewery.latitude}  />)}{" "}
        </div>
       
      </div>;
};
export default FetchBreweryDetail;
