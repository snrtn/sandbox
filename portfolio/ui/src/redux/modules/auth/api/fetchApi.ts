import axiosInstance from '../../axiosInstance';

export const fetchUserByIdApi = async () => {
	const response = await axiosInstance.get('/api/auth/details');
	return response.data.user;
};
