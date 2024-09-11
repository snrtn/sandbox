import axiosInstance from '../../axiosInstance';

export const deletePostApi = async (postId: string): Promise<void> => {
	try {
		await axiosInstance.delete(`/api/blog/${postId}`);
	} catch (error: any) {
		if (error.response) {
			throw new Error(error.response.data.message || 'Failed to delete post');
		} else {
			throw new Error('Server Error');
		}
	}
};
