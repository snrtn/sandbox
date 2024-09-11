import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { useFetchPosts, useCreatePost, useUpdatePost, useDeletePost } from '../redux/modules/blog';
import { setPosts, setStatus, setError } from '../redux/slices/blogSlice';
import { UseBlog } from '../interfaces';

const useBlog = (): UseBlog => {
	const dispatch = useDispatch<AppDispatch>();
	const { posts, status, error } = useSelector((state: RootState) => state.blog);

	const fetchPosts = useFetchPosts();
	const createPost = useCreatePost();
	const updatePost = useUpdatePost();
	const deletePost = useDeletePost();

	useEffect(() => {
		if (fetchPosts.isLoading) {
			dispatch(setStatus('loading'));
		} else if (fetchPosts.isError) {
			dispatch(setError(fetchPosts.error?.message || 'Failed to fetch posts'));
			dispatch(setStatus('failed'));
		} else if (fetchPosts.isSuccess) {
			dispatch(setPosts(fetchPosts.data || []));
			dispatch(setStatus('succeeded'));
		}
	}, [fetchPosts.data, fetchPosts.isLoading, fetchPosts.isError, fetchPosts.isSuccess, fetchPosts.error, dispatch]);

	return {
		posts,
		status,
		error,
		fetchPosts,
		createPost: (formData: FormData) => {
			createPost.mutate(formData, {
				onSuccess: () => {
					dispatch(setStatus('succeeded'));
				},
				onError: (error) => {
					dispatch(setError(error.message));
					dispatch(setStatus('failed'));
				},
			});
		},
		updatePost: (formData: FormData) => {
			updatePost.mutate(formData, {
				onSuccess: () => {
					dispatch(setStatus('succeeded'));
				},
				onError: (error) => {
					dispatch(setError(error.message));
					dispatch(setStatus('failed'));
				},
			});
		},
		deletePost: (postId: string) => {
			deletePost.mutate(postId, {
				onSuccess: () => {
					dispatch(setStatus('succeeded'));
				},
				onError: (error) => {
					dispatch(setError(error.message));
					dispatch(setStatus('failed'));
				},
			});
		},
	};
};

export default useBlog;
