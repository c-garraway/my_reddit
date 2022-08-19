import React from 'react'

function PostCard({subreddit, thumbnail, title, comments, author, upVotes, author_flair_text, permalink}) {
   
  const postLink = `https://www.reddit.com/${permalink}`;

  const checkedThumbnail = () => {
    if (thumbnail === 'self' || thumbnail === 'default') {
      return "";
    } else {
      return thumbnail;
    }
    
  }

  console.log(`checked: ${checkedThumbnail()}`)
  console.log(`original: ${thumbnail}`)

  return (
    <div className='postCard'>
      <div className='textContainer'>
        <div className='postHeader'>
          <p>{subreddit}</p>
          <p>: Posted by {author_flair_text}, {author}</p>         
        </div>
        
        <div className='postBody'>
          <p className='postTitle'>{title}</p>
          <a className='postLink' href={postLink}target="_blank" rel="noreferrer">Post Link</a>
        </div>
        <br/>
        <div className='postFooter'>
          <p>{upVotes} upvotes</p>
          <p id='comments'>{comments} comments</p>
        </div>
      </div>
      <div className='imageContainer'>
        <img className='thumbnailImg' src={checkedThumbnail()} alt=''/>
      </div>
    </div>
  )
}

export default PostCard