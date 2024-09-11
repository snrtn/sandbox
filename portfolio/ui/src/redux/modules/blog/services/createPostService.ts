import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPostApi } from '../index';

export const useCreatePost = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: createPostApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['blog'] });
		},
	});
};
