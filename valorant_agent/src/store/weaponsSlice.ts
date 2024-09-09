import { createSlice } from '@reduxjs/toolkit';

interface Weapon {
	uuid: string;
	displayName: string;
	displayIcon: string;
}

interface WeaponsState {
	weapons: Weapon[];
}

const initialState: WeaponsState = {
	weapons: [],
};

const weaponsSlice = createSlice({
	name: 'weapons',
	initialState,
	reducers: {
		setWeapons: (state, action) => {
			state.weapons = action.payload;
		},
	},
});

export const { setWeapons } = weaponsSlice.actions;
export default weaponsSlice.reducer;
