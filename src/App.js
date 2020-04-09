import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ChipName from './ChipName';
import './App.css';

function App() {
  let search = '';
  const [searchPrint, setSearchPrint] = useState('')
  const names = ['dave', 'laura', 'steve', 'daniel', 'sara']
  const [namesFiltered, setNamesFiltered] = useState(names);

  const handleSearchBar = (e) => { 
    search = e.target.value;
    setSearchPrint(e.target.value);
    console.log(search)
    setNamesFiltered(names.filter((item) => item.toLowerCase().indexOf(search) !== -1));
  }
  

  return (
    <div className="App">
      <SearchBar handleSearchBar={handleSearchBar} />
      <p>You searched for: {searchPrint}</p>

      <div className="flex">

        {namesFiltered.map(n => <ChipName key={n}>{n}</ChipName>)}

      </div>
    </div>
  );
}

export default App;
