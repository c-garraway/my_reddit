import React from "react";
import Home from '../../images/home.png'
import RedditIcon from '../../images/redditIcon.png'

function Header() {
  return (
    <div className="header">
        
            <div className="headerAlign">
                <img src={Home} alt="Home Icon" width="50" height="50" />
                <h1 className="title">my_reddit</h1>
            </div>
            <div id="redditIcon">
                <img src={RedditIcon} alt="Reddit Icon" height="45"/>
        </div>
        
    </div>
  )
}

export default Header