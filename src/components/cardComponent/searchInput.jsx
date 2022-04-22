// import React, { Component, useState, useCallback, useEffect } from "react";

// import SearchBar from "material-ui-search-bar";


// const SearchInput = props => {
   
 
//   return <div className="search">
        
        
//         <div id="demo" >

//         <SearchBar
//         // ref={input}
//         // onChange={handleChange}
//         // onRequestSearch={handleClick}
//         style={{
//           margin: "0 auto",
//           maxWidth: 800
//         }}
//       />
//         </div>
        
//       </div>;
// };

// export default SearchInput;

import React from 'react';


const SearchInput = ({ value, onChangeText }) => {
  React.useEffect(() => {
    let input = document.querySelector('input');
    input.addEventListener('input', onChangeText);
    return input.removeEventListener('input', onChangeText);
  }, []);
  return (
    <div className="search-container">
      <input
        type="text"
        value={value}
        onChange={onChangeText}
        placeholder="Search brewery"
      />
    </div>
  );
};

export default SearchInput;

