interface Author {
	_id: string;
	username: string;
}

export interface Post {
	_id: string;
	title: string;
	content: string;
	tags: string[];
	author: Author;
	image: string;
	createdAt: string;
	updatedAt: string;
}

export interface BlogState {
	posts: Post[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
}

export interface UseBlog {
	posts: Post[];
	status: string;
	error: string | null;
	fetchPosts: any;
	createPost: (formData: FormData) => void;
	updatePost: (formData: FormData) => void;
	deletePost: (postId: string) => void;
}

export interface LocationState {
	post: Post;
}
