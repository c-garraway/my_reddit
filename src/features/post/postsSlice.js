import { createSlice } from "@reduxjs/toolkit";


export const postsSlice = createSlice ({
    name: 'posts',
    initialState: {},
    reducers: {
        addPost: (state, action) => {
            const { id } = action.payload;
            state[id] = action.payload;
        }
    }
});

export const { addPost } = postsSlice.actions;
export const selectPosts = (state) => state.posts;
export default postsSlice.reducer;