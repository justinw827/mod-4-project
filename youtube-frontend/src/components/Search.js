import React from 'react';

const Search = ({handleSearch}) => {
  return (
    <label>
      Search:
      <input onChange={handleSearch} type="text" name="username" />
    </label>
  )
}

export default Search
