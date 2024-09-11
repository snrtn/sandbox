import { useMutation, useQueryClient } from '@tanstack/react-query';
import { loginApi, LoginData } from '../index';

interface LoginResponse {
	[x: string]: any;
	token: string;
}

export const useLogin = () => {
	const queryClient = useQueryClient();

	return useMutation<LoginResponse, Error, LoginData>({
		mutationFn: (data: LoginData) => loginApi(data.username, data.password),
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ['auth'] });
		},
	});
};
