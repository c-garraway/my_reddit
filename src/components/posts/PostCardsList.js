import React, {useEffect} from 'react'
import PostCard from './PostCard'
import { selectSearchResults } from '../../features/search/searchResultsSlice'
import { selectSearchTerm } from '../../features/search/searchTermSlice'
import { useSelector, useDispatch  } from 'react-redux'
import { addPost, selectPosts, resetPosts } from '../../features/post/postsSlice'
import { v4 as uuidv4 } from 'uuid'


function PostCardsList() {
  const searchTerm = useSelector(selectSearchTerm);
  const results = useSelector(selectSearchResults);
  const dispatch = useDispatch();
  

  const allPosts = useSelector(selectPosts)
  
 
  useEffect(() => {
    const loadPosts = () => {
      for (const children in results.data) {
        for (const item in results.data[children]) {
          
          dispatch(addPost({
            id: uuidv4(),
            subreddit: results.data.children[item].data.subreddit,
            title: results.data.children[item].data.title,
            thumbnail: results.data.children[item].data.thumbnail,
            comments: results.data.children[item].data.num_comments
          }))
        }
      }
    }

    if(results === undefined) {
      return;
    }
    loadPosts();

  },[dispatch, results]);
   

  
  return (
    <div>
      <p className='searchResultsTitle'>Search Results for... {searchTerm}</p>
      {allPosts.map((post) => {
        return(
            <div >
            <PostCard 
            key={post.id}
            id={post.id}
            subreddit={post.subreddit}
            thumbnail={post.thumbnail}
            title={post.title}
            comments={post.comments}
            />
          </div>
        )
        
      })}
      
    </div>
    
  )
}

export default PostCardsList