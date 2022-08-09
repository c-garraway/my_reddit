import { configureStore } from '@reduxjs/toolkit';
import searchResultsReducer from '../features/search/searchResultsSlice';
import postsReducer from '../features/post/postsSlice'

export const store = configureStore({
  reducer: {
    searchResults: searchResultsReducer,
    posts: postsReducer,
  },
});
