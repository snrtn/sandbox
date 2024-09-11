import axiosInstance from '../../axiosInstance';
import { Post } from '../types/blogTypes';

export const updatePostApi = async (formData: FormData): Promise<Post> => {
	try {
		const response = await axiosInstance.put(`/api/blog/${formData.get('_id')}`, formData);
		return response.data;
	} catch (error: any) {
		if (error.response) {
			throw new Error(error.response.data.message || 'Failed to update post');
		} else {
			throw new Error('Server Error');
		}
	}
};
