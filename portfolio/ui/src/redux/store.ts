import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import blogReducer from './slices/blogSlice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		blog: blogReducer,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
