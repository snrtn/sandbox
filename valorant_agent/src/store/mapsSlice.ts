import { createSlice } from '@reduxjs/toolkit';

interface Map {
	uuid: string;
	displayName: string;
	displayIcon: string;
}

interface MapsState {
	maps: Map[];
}

const initialState: MapsState = {
	maps: [],
};

const mapsSlice = createSlice({
	name: 'maps',
	initialState,
	reducers: {
		setMaps: (state, action) => {
			state.maps = action.payload;
		},
	},
});

export const { setMaps } = mapsSlice.actions;
export default mapsSlice.reducer;
