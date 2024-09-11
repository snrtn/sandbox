import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { useLogin, useLogout, fetchUserById, getCookie } from '../redux/modules/auth';
import { clearToken, setToken, setStatus, setError, setUser } from '../redux/slices/authSlice';
import { UseAuth } from '../interfaces';
import { useNavigate } from 'react-router-dom';

const useAuth = (): UseAuth => {
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	const { token, user, status, error } = useSelector((state: RootState) => state.auth);

	const { mutate: login } = useLogin();
	const { mutate: logout } = useLogout();

	useEffect(() => {
		const savedToken = getCookie('accessToken');
		if (savedToken) {
			dispatch(setToken(savedToken));
			dispatch(fetchUserById()).then((action) => {
				if (fetchUserById.fulfilled.match(action)) {
					dispatch(setUser(action.payload));
				}
			});
		}
	}, [dispatch]);

	return {
		login: (username: string, password: string) => {
			login(
				{ username, password },
				{
					onSuccess: (data) => {
						const newToken = data.accessToken;
						if (newToken) {
							dispatch(setToken(newToken));
							dispatch(setStatus('succeeded'));
							dispatch(fetchUserById()).then((action) => {
								if (fetchUserById.fulfilled.match(action)) {
									dispatch(setUser(action.payload));
								}
							});
							navigate('/dashboard');
						}
					},
					onError: () => {
						dispatch(setError('Login failed'));
						dispatch(setStatus('failed'));
					},
				},
			);
		},
		logout: () => {
			logout(undefined, {
				onSuccess: () => {
					dispatch(clearToken());
					dispatch(setStatus('idle'));
				},
				onError: () => {
					dispatch(setError('Logout failed'));
				},
			});
		},
		token,
		user,
		authStatus: status,
		authError: error,
	};
};

export default useAuth;
