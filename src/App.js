import React from 'react';
import Header from './components/header/Header';
import SearchButtons from './components/navBar/SearchButtons';
import SearchBar from './components/navBar/SearchBar';
import PostCardsList from './components/posts/PostCardsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div >
          <div className="search">
            <SearchButtons />
            <SearchBar />
          </div>
        </div>    
        <PostCardsList />
      </div>
    </div>
  );
}

export default App;
