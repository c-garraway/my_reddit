import React from 'react'

function PostCard({subreddit, thumbnail, title, comments, author, upVotes, author_flair_text, permalink}) {

  const redditHtml = 'https://www.reddit.com/'
  return (
    <div className='postCard'>
      <div className='textContainer'>
        <div className='postHeader'>
          <p>{subreddit}</p>
          <p>: Posted by {author_flair_text}, {author}</p>         
        </div>
        
        <div className='postBody'>
          <p className='postTitle'>{title}</p>
          <a className='postLink' href={`${redditHtml}${permalink}` }target="_blank">post link</a>
        </div>
        <br/>
        <div className='postFooter'>
          <p>{upVotes} upvotes</p>
          <p id='comments'>{comments} comments</p>
        </div>
      </div>
      <div className='imageContainer'>
        <img className='thumbnailImg' src={thumbnail} alt='no image available'/>
      </div>
    </div>
  )
}

export default PostCard