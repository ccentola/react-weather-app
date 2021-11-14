import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    // tells parent component what the current search term is
    onFormSubmit(term);

    // clear input field
    setTerm('');
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Weather Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Enter a city name..."
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
