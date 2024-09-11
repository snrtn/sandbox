import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePostApi } from '../api/deletePostApi';

export const useDeletePost = () => {
	const queryClient = useQueryClient();

	return useMutation<void, Error, string>({
		mutationFn: deletePostApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['blog'] });
		},
	});
};
