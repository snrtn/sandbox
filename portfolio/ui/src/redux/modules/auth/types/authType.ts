import { AuthState } from '../../../../interfaces';

export const initialAuthState: AuthState = {
	token: null,
	status: 'idle',
	error: null,
	user: null,
};

export type { AuthState, LoginData, User } from '../../../../interfaces';
