import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post, BlogState, initialBlogState } from '../modules/blog';

const blogSlice = createSlice({
	name: 'blog',
	initialState: initialBlogState,
	reducers: {
		setPosts(state, action: PayloadAction<Post[]>) {
			state.posts = action.payload;
		},
		setStatus(state, action: PayloadAction<BlogState['status']>) {
			state.status = action.payload;
		},
		setError(state, action: PayloadAction<string | null>) {
			state.error = action.payload;
		},
	},
});

export const { setPosts, setStatus, setError } = blogSlice.actions;
export default blogSlice.reducer;
