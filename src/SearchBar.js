import React, {useState} from 'react'

export default function SearchBar(props) {
  
  return (
    <div style={{margin: 20}}>
      <input onKeyUp={(e) => props.handleSearchBar(e)} />
    </div>
  )
}