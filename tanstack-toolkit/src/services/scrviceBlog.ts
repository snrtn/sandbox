import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '../api/axios';
import { Blog } from '../types/typeBlog';

export const useFetchBlogs = () => {
	return useQuery<Blog[], Error>({
		queryKey: ['blogs'],
		queryFn: async () => {
			const response = await apiClient.get('/blogs');
			return response.data;
		},
	});
};

export const useCreateBlog = () => {
	const queryClient = useQueryClient();
	return useMutation<Blog, Error, Omit<Blog, 'id'>>({
		mutationFn: async (newBlog: Omit<Blog, 'id'>) => {
			const response = await apiClient.post('/blogs', newBlog);
			return response.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['blogs'] });
		},
	});
};

export const useUpdateBlog = () => {
	const queryClient = useQueryClient();
	return useMutation<Blog, Error, Blog>({
		mutationFn: async (updatedBlog: Blog) => {
			const response = await apiClient.put(`/blogs/${updatedBlog.id}`, updatedBlog);
			return response.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['blogs'] });
		},
	});
};

export const useDeleteBlog = () => {
	const queryClient = useQueryClient();
	return useMutation<number, Error, number>({
		mutationFn: async (id: number) => {
			await apiClient.delete(`/blogs/${id}`);
			return id;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['blogs'] });
		},
	});
};
