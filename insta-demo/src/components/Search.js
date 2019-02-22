import React from "react";

const Search = props => {
  return (
    <div className="search">
      <input
        name="search"
        placeholder="Look up game..."
        value={props.searchTerm}
        onChange={props.changeHandler}
      />
    </div>
  );
};

export default Search;
