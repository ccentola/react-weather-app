import React from 'react';
import SearchBar from './SearchBar';
import { useData } from '../hooks/useData';

const App = () => {
  const [data, search] = useData('boston');

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search}/>
    </div>

  )
}

export default App;