import React, {  useState, useEffect } from "react";
import axios from "axios";
import Card from "./cardComponent/card";

import SearchInput from "./cardComponent/searchInput";


const API = 'https://api.openbrewerydb.org/breweries?';







const FetchBreweries = props => {
  const [breweries, setBreweries] = useState([]);
  let [search, setSearch] = useState("");
 
  useEffect(() => {
    
    axios.get(API).then(res => {
      console.log(res);
      
      const results = res.data.filter(beer =>
        (JSON.stringify(beer).toLowerCase().includes(search.toLocaleLowerCase())
    
    
        )
        );
      



      setBreweries(results);
    });

  
  }, [search]);



  return <div className="container-fluid">
    
      <SearchInput
        value={search}
        onChangeText={e => {
          setSearch(e.target.value);
        }}
      />
    
        <div className="app-card-list" id="app-card-list">
          
          {breweries.map(brewery => <Card key={brewery.id} id={brewery.id} name={brewery.name} type={brewery.brewery_type} city={brewery.city} street={brewery.street} address_2={brewery.address_2} address_3={brewery.address_3} state={brewery.state} country_province={brewery.country_province} postal_code={brewery.postal_code} address={brewery.street + " " + brewery.city + ", " + brewery.state + " " + brewery.postal_code} website={brewery.website_url} longitude={brewery.longitude} latitude={brewery.latitude} />)}{" "}
        </div>
       
      </div>;
};
export default FetchBreweries;
