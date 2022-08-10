import React from 'react'

function PostCard({subreddit, thumbnail, title, comments}) {
  return (
    <div className='postCard'>
      <div>
        <p className='postTitle'>{title}</p>
        <p>Subreddit: {subreddit}</p>
        <p>Comments: {comments}</p>
      </div>
      
      <div className='imageContainer'>
        <img className='thumbnailImg' src={thumbnail} alt={thumbnail}/>
      </div>
      
      
    </div>
  )
}

export default PostCard