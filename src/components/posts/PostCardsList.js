import React, {useEffect} from 'react'
import PostCard from './PostCard'
import { selectSearchResults } from '../../features/search/searchResultsSlice'
import { useSelector, useDispatch  } from 'react-redux'
import { addPost, selectPosts } from '../../features/post/postsSlice'
import { v4 as uuidv4 } from 'uuid'


function PostCardsList() {

  const results = useSelector(selectSearchResults);
  const dispatch = useDispatch();
  console.log(results)

  const loadPosts = () => {
    
    for (const children in results.data) {
      for (const item in results.data[children]) {
        console.log(item);
        dispatch(addPost({
          id: uuidv4(),
          subreddit: results.data.children[item].data.subreddit,
          title: results.data.children[item].data.title,
          thumbnail: results.data.children[item].data.thumbnail,
        }))
      }
    }
    
  }

 /*  loadPosts(); */

  /* const allPosts = useSelector(selectPosts)
  console.log(allPosts) */

  

 
  useEffect(() => {
    if(results === undefined) {
      return;
    }
    loadPosts();
  });
   

  
  return (
    <div className='PostCardsList'>
        
        <h1>test</h1>
        
         
        

    </div>
    
  )
}

export default PostCardsList