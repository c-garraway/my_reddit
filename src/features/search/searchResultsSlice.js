import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadSearchResults = createAsyncThunk(
'searchResults/loadSearchResults',
    async(userInput) => {
    const response = await fetch(`https://www.reddit.com/search.json?q=${userInput}`);
    const json = await response.json();
    return json;
    }
)

export const searchResultsSlice = createSlice ({
    name: 'searchResults',
    initialState: {
        results: {},
        isLoadingSearchResults: false,
        failedToLoadSearchResults: false,
    },
    extraReducers: {
        [loadSearchResults.pending]: (state) => {
            state.isLoadingSearchResults = true;
            state.failedToLoadSearchResults = false;
        },
        [loadSearchResults.fulfilled]: (state, action) => {
            state.results = action.payload
            state.isLoadingSearchResults = true;
            state.failedToLoadSearchResults = true;
        },
        [loadSearchResults.rejected]: (state) => {
            state.isLoadingSearchResults = false;
            state.failedToLoadSearchResults = true;
        }
    }
});

export const { addSearchResults } = searchResultsSlice.actions;
export const selectSearchResults = (state) => state.searchResults.results;
export default searchResultsSlice.reducer;