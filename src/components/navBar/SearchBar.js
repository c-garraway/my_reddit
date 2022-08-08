import React from 'react'
import { useState } from 'react'
import { loadSearchResults } from '../../features/search/searchResultsSlice'
import { useDispatch } from 'react-redux'

function SearchBar() {

  const [userInput, setUserInput] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(loadSearchResults(userInput))
  }

  return (
    <div className="searchBar">
      <input
        value={userInput}
        onChange={(e) => setUserInput(e.currentTarget.value)} 
        placeholder="Search..."
      />
      <button 
        className=""
        onClick={handleClick}
        >SEARCH</button>
    </div>
  )
}

export default SearchBar