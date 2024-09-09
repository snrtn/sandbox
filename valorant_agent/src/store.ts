import { configureStore } from '@reduxjs/toolkit';
import agentsReducer from './store/agentsSlice';
import mapsReducer from './store/mapsSlice';
import weaponsReducer from './store/weaponsSlice';

const store = configureStore({
	reducer: {
		agents: agentsReducer,
		maps: mapsReducer,
		weapons: weaponsReducer,
	},
});

export default store;
