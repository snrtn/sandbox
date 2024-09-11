import { BlogState } from '../../../../interfaces';

export const initialBlogState: BlogState = {
	posts: [],
	status: 'idle',
	error: null,
};

export type { BlogState, Post } from '../../../../interfaces';
