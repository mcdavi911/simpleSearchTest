import React from 'react'

export default function SearchBar(props) {
  
  return (
    <div style={{margin: 20}}>
      <input 
      value={props.value}
      onChange={(e) => props.handleSearchBar(e)} 
      />
    </div>
  )
}