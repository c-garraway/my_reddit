import { createSlice } from "@reduxjs/toolkit";


export const postsSlice = createSlice ({
    name: 'posts',
    initialState: [],
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload);
        },
        resetPosts: (state) => {
            state = [];    
        }
    }
});

export const { addPost, resetPosts } = postsSlice.actions;
export const selectPosts = (state) => state.posts;
export default postsSlice.reducer;