import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ChipName from './ChipName';
import './App.css';

function App() {
  const [searchTerm,setSearchTerm] = useState('')
  const names = ['dave', 'laura', 'steve', 'daniel', 'sara']
  const [namesFiltered, setNamesFiltered] = useState(names);

  const handleSearchBar = (e) => { 
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    setNamesFiltered(names.filter((item) => item.toLowerCase().includes(searchTerm)));
  }, [searchTerm])
  

  return (
    <div className="App">
      <SearchBar value={searchTerm} handleSearchBar={handleSearchBar} />
      <p>You searched for: {searchTerm}</p>

      <div className="flex">

        {namesFiltered.map(n => <ChipName key={n}>{n}</ChipName>)}

      </div>
    </div>
  );
}

export default App;
