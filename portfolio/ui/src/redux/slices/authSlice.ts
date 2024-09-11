import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialAuthState, AuthState, User } from '../modules/auth';

const authSlice = createSlice({
	name: 'auth',
	initialState: initialAuthState,
	reducers: {
		setToken(state, action: PayloadAction<string>) {
			state.token = action.payload;
		},
		clearToken(state) {
			state.token = null;
			state.user = null;
		},
		setUser(state, action: PayloadAction<User>) {
			state.user = action.payload;
		},
		setStatus(state, action: PayloadAction<AuthState['status']>) {
			state.status = action.payload;
		},
		setError(state, action: PayloadAction<string | null>) {
			state.error = action.payload;
		},
	},
});

export const { setToken, clearToken, setUser, setStatus, setError } = authSlice.actions;
export default authSlice.reducer;
