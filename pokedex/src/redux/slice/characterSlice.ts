import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { getDominantColors } from '../../utils/colorExtractor';

export type MenuType = 'info' | 'stats' | 'abilities';

interface CharacterState {
	characters: { name: string; url: string }[];
	selectedCharacter: string;
	selectedMenu: MenuType;
	currentPage: number;
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
	characterDetails: { [key: string]: any };
	backgroundColors: string[];
	characterColors: { [key: string]: string[] };
}

const initialState: CharacterState = {
	characters: [],
	selectedCharacter: '',
	selectedMenu: 'info',
	currentPage: 0,
	status: 'idle',
	error: null,
	characterDetails: {},
	backgroundColors: ['#1e1e1e', '#1e1e1e'],
	characterColors: {},
};

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async () => {
	const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=200');
	return response.data.results;
});

export const fetchCharacterDetails = createAsyncThunk(
	'characters/fetchCharacterDetails',
	async (characterUrl: string, { dispatch }) => {
		const response = await axios.get(characterUrl);
		const spriteUrl = response.data.sprites.front_default;
		const palette = await getDominantColors(spriteUrl);
		dispatch(setCharacterColors({ characterName: response.data.name, colors: palette }));
		dispatch(setBackgroundColors(palette));
		return { name: response.data.name, data: response.data };
	},
);

const characterSlice = createSlice({
	name: 'character',
	initialState,
	reducers: {
		setSelectedCharacter(state, action: PayloadAction<string>) {
			state.selectedCharacter = action.payload;
			state.selectedMenu = 'info';
		},
		setSelectedMenu(state, action: PayloadAction<MenuType>) {
			state.selectedMenu = action.payload;
		},
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
		setBackgroundColors(state, action: PayloadAction<string[]>) {
			state.backgroundColors = action.payload;
		},
		setCharacterColors(state, action: PayloadAction<{ characterName: string; colors: string[] }>) {
			state.characterColors[action.payload.characterName] = action.payload.colors;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCharacters.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchCharacters.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.characters = action.payload;
			})
			.addCase(fetchCharacters.rejected, (state) => {
				state.status = 'failed';
			})
			.addCase(fetchCharacterDetails.fulfilled, (state, action) => {
				const { name, data } = action.payload;
				state.characterDetails[name] = data;
			});
	},
});

export const { setSelectedCharacter, setSelectedMenu, setCurrentPage, setBackgroundColors, setCharacterColors } =
	characterSlice.actions;

export default characterSlice.reducer;
