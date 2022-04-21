import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { NavLink } from "react-router-dom";
import Header from "../headerComponent/header";

/**
 * This is the API key that allows this application to use google-maps-react
 */
//This is removed for security purposes
const GOOGLE_API_KEY = 'PUT GOOGLE API KEY HERE';

/**
 * This class renders the Google Maps data for a brewery of the User's choice
 */
class GoogleMapPage extends Component {
  render() {
    /**
     * This property contains the longitude for the brewery
     */
    const { longitude } = this.props.location.state;
    /**
     * This property contains the latitude for the brewery
     */
    const { latitude } = this.props.location.state;

    /**
     * The map is supposed to take up 100% of the page under the headers
     */
    const mapStyles = {
      width: "100%",
      height: "100%"
    };

    return (
      <div>
        <Header />
        <header className="back-to-main-block">
          <NavLink className="back-to-main-text" to="/">
            Click to Go Back to Main Page
          </NavLink>
        </header>
        {longitude == null && latitude == null && (
          <header className="map-error-block">
            <div className="error-text">
              The map info pulled from the OpenBreweryAPI does not exist for
              this Brewery.
            </div>
          </header>
        )}

        <Map
          google={this.props.google}
          zoom={11}
          style={mapStyles}
          initialCenter={{ lat: latitude, lng: longitude }}
        >
          <Marker position={{ lat: latitude, lng: longitude }} />
        </Map>
      </div>
    );
  }
}

/**
 * Wraps the API key so that the app is able to use it to
 * access Google Maps
 */
export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY
})(GoogleMapPage);
