export interface AuthState {
	token: string | null;
	user: User | null;
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
}

export interface User {
	[x: string]: string;
	id: string;
	username: string;
}

export interface LoginData {
	username: string;
	password: string;
}

export interface UseAuth {
	login: (username: string, password: string) => void;
	logout: () => void;
	token: string | null;
	authStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
	authError: string | null;
	user: User | null;
}
