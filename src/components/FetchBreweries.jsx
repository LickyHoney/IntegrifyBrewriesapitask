import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Card from "./cardComponent/card";
import CardDetails from "./cardComponent/cardDetails";

/**
 * API variable holds the link to the OpenBreweryAPI
 */
const API = 'https://api.openbrewerydb.org/breweries?';
/**
 * This query gather data by city and state for Hanover, PA
 */
const DEFAULT_QUERY = 'by_city=Hanover&by_state=Pennsylvania';

/**
 * A class that fetches Brewery data from OpenBreweryAPI then
 * makes a list of Card objects.
 *
 * @param state The state is set to an array of Brewery objects
 */
const FetchBreweries = props => {
  const [breweries, setBreweries] = useState([]);
  useEffect(() => {
    axios.get(API + DEFAULT_QUERY).then(res => {
      console.log(res);
      setBreweries(res.data);
    });
  }, []);
  return <div className="container-fluid">
        <div className="app-card-list" id="app-card-list">
          {breweries.map(brewery => <Card key={brewery.name.toString()} name={brewery.name} type={brewery.brewery_type} city={brewery.city} street={brewery.street} address_2={brewery.address_2} address_3={brewery.address_3} state={brewery.state} country_province={brewery.country_province} postal_code={brewery.postal_code} address={brewery.street + " " + brewery.city + ", " + brewery.state + " " + brewery.postal_code} website={brewery.website_url} longitude={brewery.longitude} latitude={brewery.latitude} />)}{" "}
        </div>
       
      </div>;
};
export default FetchBreweries;
