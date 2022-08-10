import { createSlice } from "@reduxjs/toolkit";

export const searchTermSlice = createSlice({
    name: 'searchTerm',
    initialState: [],
    reducers: {
        addSearchTerm: (state, action) => {
            state.push(action.payload)
        },
        resetSearchTerm: (state) => {
            state.pop();
        }
    }
});

export const { addSearchTerm, resetSearchTerm } = searchTermSlice.actions;
export const selectSearchTerm = (state) => state.searchTerm;
export default searchTermSlice.reducer;