import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
    return [];
}

export const postsSlice = createSlice ({
    name: 'posts',
    initialState: initialState(),
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload);
        },
        resetPosts: () => initialState()
    }
});

export const { addPost, resetPosts } = postsSlice.actions;
export const selectPosts = (state) => state.posts;
export default postsSlice.reducer;