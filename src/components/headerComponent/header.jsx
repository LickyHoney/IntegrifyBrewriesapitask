import React, { Component } from "react";
import image from "../Images/LogoMakr_8VhLVY.png";

/**
 * This class renders the main header for the website. It also provides
 * credit to the original data source.
 */
 const Header = () => {
  
    // Link to OpenBreweryAPI
    const INFO_SOURCE_URL = "https://www.openbrewerydb.org/";

    return (
      <header>
        <img className="header-text" alt="icon" src={image} />

        <nav>
          <u1>
            <li className="last">
              <a
                href={INFO_SOURCE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Information Source: OpenBreweryAPI
              </a>
            </li>
          </u1>
        </nav>
      </header>
    );
  }


export default Header;
