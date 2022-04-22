import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Card from "./cardComponent/card";
import CardDetails from "./cardComponent/cardDetails";
import SearchBar from "material-ui-search-bar";
import SearchInput from "./cardComponent/searchInput";
import debounce from 'lodash.debounce';
import { fetchSearchResults } from "../util";


const API = 'https://api.openbrewerydb.org/breweries?';


const fetchData = async (query, cb) => {
  console.warn('fetching ' + query);
  const res = await fetchSearchResults(query);
  cb(res);
};

const debouncedFetchData = debounce((query, cb) => {
  fetchData(query, cb);
}, 500);


const FetchBreweries = props => {
  const [breweries, setBreweries] = useState([]);
  let [search, setSearch] = useState("");
  const handleChange = event => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    
    axios.get(API).then(res => {
      console.log(res);
      setBreweries(res.data);
    });

  
  }, [search]);


  // const onChangeSearch = (e) => {

  //   const val = e.target.value;

  //   setSearch(val);

  // }

  return <div className="container-fluid">
    {/* <SearchBar
        // ref={input}
        // onChange={handleChange}
        // onRequestSearch={handleClick}
        value={search} 
        onChange={onChangeSearch}
        style={{
          margin: "0 auto",
          maxWidth: 800
        }}
      /> */}
      <SearchInput
        value={search}
        onChangeText={e => {
          setSearch(e.target.value);
        }}
      />
    
        <div className="app-card-list" id="app-card-list">
          
          {breweries.map(brewery => <Card key={brewery.name.toString()} name={brewery.name} type={brewery.brewery_type} city={brewery.city} street={brewery.street} address_2={brewery.address_2} address_3={brewery.address_3} state={brewery.state} country_province={brewery.country_province} postal_code={brewery.postal_code} address={brewery.street + " " + brewery.city + ", " + brewery.state + " " + brewery.postal_code} website={brewery.website_url} longitude={brewery.longitude} latitude={brewery.latitude} />)}{" "}
        </div>
       
      </div>;
};
export default FetchBreweries;
