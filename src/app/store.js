import { configureStore } from '@reduxjs/toolkit';
import searchResultsReducer from '../features/search/searchResultsSlice';
import postsReducer from '../features/post/postsSlice'
import searchTermReducer from '../features/search/searchTermSlice';
import commentsReducer from '../features/comments/commentsSlice'

export const store = configureStore({
  reducer: {
    searchTerm: searchTermReducer,
    searchResults: searchResultsReducer,
    posts: postsReducer,
    currentComments: commentsReducer,
  },
});
