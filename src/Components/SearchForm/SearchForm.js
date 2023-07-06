import React from "react";

function SearchForm({onLabelChange, label, search}){

  const form = search ? <div className="search-form">
  <input
    placeholder="Search films"
    autoFocus
    onChange={onLabelChange}
    value={label}
  />
</div> : null

    return ( 
      form
    )
  }

  export default SearchForm