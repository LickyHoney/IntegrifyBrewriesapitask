import React from "react";
import FetchBreweries from "../components/FetchBreweries";
import FetchBreweryDetail from "../components/FetchBreweryDetail";
import Header from "../components/headerComponent/header";

/**
 * This component allows the main page of the application to be rendered
 * when Router is used
 */
const MainPage = () => {
  return (
    <div>
      
      <FetchBreweries />
      

    </div>
  );
};

export default MainPage;
