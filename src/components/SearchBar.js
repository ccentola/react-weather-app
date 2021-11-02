import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, updateTerm] = useState('');

  const onInputChange = (e) => {
    updateTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // tells parent component what the current search term is
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Weather Search</label>
          <input type="text" value={term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
