import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
    return [];
}

export const searchTermSlice = createSlice({
    name: 'searchTerm',
    initialState: initialState(),
    reducers: {
        addSearchTerm: (state, action) => {
            state.push(action.payload)
        },
        resetSearchTerm: () => initialState()
    }
});

export const { addSearchTerm, resetSearchTerm } = searchTermSlice.actions;
export const selectSearchTerm = (state) => state.searchTerm;
export default searchTermSlice.reducer;