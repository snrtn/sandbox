import axiosInstance from '../../axiosInstance';

export const logoutApi = async () => {
	const response = await axiosInstance.post('/api/auth/logout');
	return response.data;
};
