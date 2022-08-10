import { configureStore } from '@reduxjs/toolkit';
import searchResultsReducer from '../features/search/searchResultsSlice';
import postsReducer from '../features/post/postsSlice'
import searchTermReducer from '../features/search/searchTermSlice';
export const store = configureStore({
  reducer: {
    searchTerm: searchTermReducer,
    searchResults: searchResultsReducer,
    posts: postsReducer,
  },
});
