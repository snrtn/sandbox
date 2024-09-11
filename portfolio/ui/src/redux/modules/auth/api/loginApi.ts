import axiosInstance from '../../axiosInstance';

export const loginApi = async (username: string, password: string) => {
	const response = await axiosInstance.post('/api/auth/login', { username, password });
	return response.data;
};
