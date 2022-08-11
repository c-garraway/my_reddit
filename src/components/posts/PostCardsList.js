import React, {useEffect} from 'react'
import PostCard from './PostCard'
import { selectSearchResults } from '../../features/search/searchResultsSlice'
import { selectSearchTerm } from '../../features/search/searchTermSlice'
import { useSelector, useDispatch  } from 'react-redux'
import { addPost, selectPosts } from '../../features/post/postsSlice'
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
            subreddit: results.data.children[item].data.subreddit_name_prefixed,
            title: results.data.children[item].data.title,
            thumbnail: results.data.children[item].data.thumbnail,
            comments: results.data.children[item].data.num_comments,
            author: results.data.children[item].data.author,
            upVotes: results.data.children[item].data.ups,
            author_flair_text: results.data.children[item].data.author_flair_text,
            permalink: results.data.children[item].data.permalink
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
            <div key={post.id}>
              <PostCard 
              id={post.id}
              subreddit={post.subreddit}
              thumbnail={post.thumbnail}
              title={post.title}
              comments={post.comments}
              author={post.author}
              upVotes={post.upVotes}
              author_flair_text={post.author_flair_text}
              permalink={post.permalink}
              />
          </div>
        )
        
      })}
      
    </div>
    
  )
}

export default PostCardsList