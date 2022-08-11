import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadCurrentComments = createAsyncThunk(
'currentComments/loadCurrentComments',
    async(userInput) => {
    const response = await fetch(`${userInput}.json`);
    const json = await response.json();
    return json;
    }
)

export const commentsSlice = createSlice ({
    name: 'currentComments',
    initialState: {
        comments: {},
        isLoadingComments: false,
        failedToLoadComments: false,
    },
    extraReducers: {
        [loadCurrentComments.pending]: (state) => {
            state.isLoadingComments = true;
            state.failedToLoadComments = false;
        },
        [loadCurrentComments.fulfilled]: (state, action) => {
            state.comments = action.payload
            state.isLoadingComments = false;
            state.failedToLoadComments = false;
        },
        [loadCurrentComments.rejected]: (state) => {
            state.isLoadingComments = false;
            state.failedToLoadComments = true;
        }
    }
});

export const selectComments = (state) => state.currentComments.comments;
export default commentsSlice.reducer;