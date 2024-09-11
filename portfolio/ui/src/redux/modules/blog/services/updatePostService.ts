import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updatePostApi } from '../api/updatePostApi';
import { Post } from '../types/blogTypes';

export const useUpdatePost = () => {
	const queryClient = useQueryClient();

	return useMutation<Post, Error, FormData>({
		mutationFn: updatePostApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['blog'] });
		},
	});
};
