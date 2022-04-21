import React from "react";
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
import MainPage from "./pages";
import GoogleMapPage from "./components/googleMapPageComponent/googleMapPage";
import "./Assets/css/default.min.css";
import "./Assets/css/card.min.css";
import CardFooter from "./components/cardComponent/cardFooter";
import BreweryDetail from "./components/FetchBreweryDetail";

/**
 * The main function for the app sets up the Router between pages
 */
function App()  {
  
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
     
        <Route exact path="/" component={MainPage} />
        
        <Route exact path="/detail" component={BreweryDetail} />
     
      </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;