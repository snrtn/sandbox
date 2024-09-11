import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserByIdApi } from '../index';

export const fetchUserById = createAsyncThunk('auth/fetchUserById', async (_, { rejectWithValue }) => {
	try {
		const user = await fetchUserByIdApi();
		return user;
	} catch (error: any) {
		return rejectWithValue('Failed to fetch user details');
	}
});
