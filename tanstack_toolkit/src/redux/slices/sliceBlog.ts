import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Blog } from '../../types/typeBlog';

interface BlogState {
	selectedBlog: Blog | null;
	isEditing: boolean;
}

const initialState: BlogState = {
	selectedBlog: null,
	isEditing: false,
};

const blogSlice = createSlice({
	name: 'blog',
	initialState,
	reducers: {
		setSelectedBlog(state, action: PayloadAction<Blog | null>) {
			state.selectedBlog = action.payload;
		},
		setIsEditing(state, action: PayloadAction<boolean>) {
			state.isEditing = action.payload;
		},
	},
});

export const { setSelectedBlog, setIsEditing } = blogSlice.actions;

export default blogSlice.reducer;
