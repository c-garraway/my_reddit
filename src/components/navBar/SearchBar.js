import React from 'react'
import { useState } from 'react'
import { loadSearchResults } from '../../features/search/searchResultsSlice'
import { useDispatch } from 'react-redux'
import { addSearchTerm, resetSearchTerm } from '../../features/search/searchTermSlice'
import { resetPosts } from '../../features/post/postsSlice'

function SearchBar() {

  const [userInput, setUserInput] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetPosts());
    dispatch(resetSearchTerm());
    dispatch(addSearchTerm(userInput));
    dispatch(loadSearchResults(userInput));
    setUserInput('')
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