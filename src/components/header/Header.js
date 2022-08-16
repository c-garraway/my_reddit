import React from "react";
import Home from '../../images/home.png'
import RedditIcon from '../../images/redditIcon.png'

function Header() {
  return (
    <div className="header">
        
      <div className="headerAlign">
          <img src={Home} alt="Home Icon" width="42" height="42" />
          <h1 className="title">my_reddit</h1>
      </div>
      <div id="redditIcon">
        <a href='https://www.reddit.com/' target='_blank' rel="noreferrer"><img src={RedditIcon} alt="Reddit Icon" height="45"/></a>
      </div>
        
    </div>
  )
}

export default Header