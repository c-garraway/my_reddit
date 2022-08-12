import React, {useEffect} from 'react'
import { addSearchTerm, resetSearchTerm } from '../../features/search/searchTermSlice'
import { useDispatch } from 'react-redux'
import { loadSearchResults } from '../../features/search/searchResultsSlice'
import { resetPosts } from '../../features/post/postsSlice';

function SearchButtons() {

  const dispatch = useDispatch();
  const starterSearch = 'Technology News';

  useEffect(() => {
    dispatch(resetSearchTerm());
    dispatch(resetPosts());
    dispatch(loadSearchResults(starterSearch));
    dispatch(addSearchTerm(starterSearch))
  })
  

  const handleClick = (e) => {
    dispatch(resetSearchTerm());
    dispatch(resetPosts());
    dispatch(addSearchTerm(e.target.value));
    dispatch(loadSearchResults(e.target.value));
  }

  return (
    <div className="searchButtons">
      <button
        value='Formula1'
        onClick={handleClick}
      >Formula 1</button>

      <button
        value='Raptors'
        onClick={handleClick}
      >Raptors</button>
      <button
        value='JavaScript'
        onClick={handleClick}
      >JavaScript</button>


    </div>
  )
}

export default SearchButtons