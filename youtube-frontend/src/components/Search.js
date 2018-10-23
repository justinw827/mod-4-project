import React from 'react';
import { Input } from 'semantic-ui-react'

const Search = ({handleSearch}) => {
  return (
    <label>
      Search:
      <Input onChange={handleSearch} size='large' icon='search' placeholder='Search...' /><br /><br />
    </label>
  )
}

export default Search
