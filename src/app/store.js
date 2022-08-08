import { configureStore } from '@reduxjs/toolkit';
import searchResultsReducer from '../features/search/searchResultsSlice';

export const store = configureStore({
  reducer: {
    searchResults: searchResultsReducer,
  },
});
