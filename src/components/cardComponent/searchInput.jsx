

import React from 'react';


const SearchInput = ({ value, onChangeText }) => {
  React.useEffect(() => {
    let input = document.querySelector('input');
    input.addEventListener('input', onChangeText);
    return input.removeEventListener('input', onChangeText);
  }, );
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

