import React from "react";

function SearchForm({onLabelChange, label}){
    return (
      <div className="search-form">
            <input
              placeholder="Search films"
              autoFocus
              onChange={onLabelChange}
              value={label}
            />
      </div>
    )
  }

  export default SearchForm